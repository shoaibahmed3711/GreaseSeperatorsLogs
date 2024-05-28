import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const ChatBox = ({
    chat,
    handleMessageChange,
    handleSendMessage,
    message,
    handleFileUpload,
    isTyping,
    handleEditMessage,
    handleDeleteMessage,
    handleReaction,
    darkMode,
    emojiPickerVisible,
    toggleEmojiPicker,
    handleEmojiClick
}) => {
    return (
        <div
            className={`chat-area h-full w-full flex flex-col rounded-lg ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-white'
            }`}
        >
            {/* User profile at the top */}
            <div className="user-profile flex bg-[#444444] rounded-t-lg p-[1.4vw] h-[4vw] items-center ">
                <img
                    src={chat.userImageURL}
                    alt={chat.userName}
                    className="w-[3vw] rounded-full mr-[1vw]"
                />
                <p className="font-semibold text-[1.2vw]">{chat.userName}</p>
            </div>

            {/* Chat messages in the middle */}
            <div className="chat-messages flex-grow overflow-y-auto p-[1vw]">
                {chat.messages.map((msg, index) => (
                    <div key={index} className="message my-[0.5vw] flex items-center">
                        <div
                            className={`message-content ${
                                msg.edited ? 'italic' : ''
                            } flex-grow bg-[#444444] text-white text-[1vw] p-[0.5vw] rounded-lg max-w-max`}
                            onClick={() => handleEditMessage(index)}
                        >
                            {msg.text}
                        </div>
                        <span className="text-[0.8vw] text-gray-600 ml-[0.4vw]">
                            {msg.time}
                        </span>
                        {/* Reactions */}
                        <button
                            className="reaction-button ml-[1vw]"
                            onClick={() => handleReaction(index)}
                        >
                            <img src="/SVG/like.png" className="w-[1.4vw]" alt="" />
                        </button>
                        {/* Delete button */}
                        <button
                            className="delete-button ml-2 text-red-500"
                            onClick={() => handleDeleteMessage(index)}
                        >
                            <img src="/SVG/Tarsh.png" className="w-[1.4vw]" alt="" />
                        </button>
                    </div>
                ))}
                {isTyping && (
                    <div className="typing-indicator text-gray-500 italic">
                        typing...
                    </div>
                )}
            </div>

            {/* Input area at the bottom */}
            <div className="input-area flex bg-[#444444] space-x-[0.2vw] px-[2vw] items-center">
                {/* File upload input */}
                <div className="file-upload">
                    <input
                        type="file"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                    />
                    <label
                        htmlFor="file-upload"
                        className="upload-label text-black px-[0.2vw] rounded-[0.3vw] cursor-pointer"
                    >
                        <img src="/Messages/upload.png" className="w-[3vw] rounded-full p-[0.4vw]" alt="" />
                    </label>
                </div>

                {/* Emoji picker toggle */}
                <button
                    className="emoji-picker-button text-black px-[0.3vw] py-[0.3vw] rounded-lg cursor-pointer"
                    onClick={toggleEmojiPicker}
                >
                    <img src="/Messages/emoji.png" className="w-[3vw] rounded-full p-[0.1vw]" alt="" />
                </button>

                {/* Emoji picker */}
                {emojiPickerVisible && (
                    <div className="emoji-picker flex flex-row">
                        <button onClick={() => handleEmojiClick('😊')}>
                            😊
                        </button>
                        <button onClick={() => handleEmojiClick('😂')}>
                            😂
                        </button>
                        <button onClick={() => handleEmojiClick('❤')}>
                            ❤
                        </button>
                        <button onClick={() => handleEmojiClick('👍')}>
                            👍
                        </button>
                        <button onClick={() => handleEmojiClick('👌')}>
                            👌
                        </button>
                        <button onClick={() => handleEmojiClick('😢')}>
                            😢
                        </button>
                        {/* Add more emojis */}
                    </div>
                )}

                {/* Message input */}
                <input
                    type="text"
                    value={message}
                    onChange={handleMessageChange}
                    className={`flex-grow px-[0.5vw] py-[0.6vw] border ${
                        darkMode ? 'bg-gray-600' : 'border-gray-100'
                    } rounded-[0.3vw]`}
                    placeholder="Type a message..."
                />

                {/* Send button */}
                <button onClick={handleSendMessage}>
                    <img src="/Messages/send.png" className="w-[3vw] rounded-[0.3vw] p-[0.1vw]" alt="" />
                </button>
            </div>
        </div>
    );
};
// ChatSystem component
// ChatSystem component
const ChatSystem = ({ userName, userImageURL }) => {
    // State to store the list of chats, selected chat index, and current message input
    const [chats, setChats] = useState([]);
    const [selectedChatIndex, setSelectedChatIndex] = useState(null);
    const [message, setMessage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [unreadCount, setUnreadCount] = useState({});
    const [darkMode, setDarkMode] = useState(false);
    const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [newChatName, setNewChatName] = useState('');
    const [newChatImageURL, setNewChatImageURL] = useState('');


    useEffect(() => {
        const handleReceiveMessage = (message) => {
            const currentTime = new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            });

            // Assuming messages are stored under chats[selectedChatIndex].messages
            const updatedChats = [...chats];
            updatedChats[selectedChatIndex].messages.push({
                ...message,
                time: currentTime,
            });

            setChats(updatedChats);
        };

        socket.on('receiveMessage', handleReceiveMessage);

        return () => {
            socket.off('receiveMessage', handleReceiveMessage);
        };
    }, [chats, selectedChatIndex]);

    // Function to handle input changes
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setIsTyping(true);
    };

    
    
    // Function to send a message in the selected chat
    const handleSendMessage = () => {
        if (selectedChatIndex !== null && message.trim() !== '') {
            const currentTime = new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
            });
            const updatedChats = [...chats];
            updatedChats[selectedChatIndex].messages.push({
                text: message,
                time: currentTime,
                edited: false,
            });
            setChats(updatedChats);
            setMessage('');
            setIsTyping(false);
            // Reset unread count for the selected chat
            setUnreadCount({
                ...unreadCount,
                [selectedChatIndex]: 0,
            });
        }
    };

    const handleAddChat = () => {
        if (newChatName.trim() !== '' && newChatImageURL.trim() !== '') {
            const newChat = {
                userName: newChatName,
                userImageURL: newChatImageURL,
                name: `Chat ${chats.length + 1}`,
                messages: [],
            };
            setChats([...chats, newChat]);
            setSelectedChatIndex(chats.length);
            setUnreadCount({
                ...unreadCount,
                [chats.length]: 0,
            });
            setFormVisible(false);
            setNewChatName('');
            setNewChatImageURL('');
        }
    };
    

    // Function to create a new chat
    const handleNewChat = () => {
        setFormVisible(true);
    };

    // Function to delete a chat
    const handleDeleteChat = (chatIndex) => {
        const updatedChats = chats.filter((_, index) => index !== chatIndex);
        setChats(updatedChats);
        setSelectedChatIndex(null);
        // Remove from unread count
        const updatedUnreadCount = { ...unreadCount };
        delete updatedUnreadCount[chatIndex];
        setUnreadCount(updatedUnreadCount);
    };

     // Function to handle file uploads
     const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file && selectedChatIndex !== null) {
            const reader = new FileReader();
            reader.onload = () => {
                const fileContent = reader.result;
                const currentTime = new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                });
                const updatedChats = [...chats];
                updatedChats[selectedChatIndex].messages.push({
                    text: fileContent,
                    time: currentTime,
                });
                setChats(updatedChats);
            };
            reader.readAsDataURL(file);
        }
    };

    // Function to edit a message
    const handleEditMessage = (msgIndex) => {
        const updatedChats = [...chats];
        const msg = updatedChats[selectedChatIndex].messages[msgIndex];
        const newText = prompt('Edit message:', msg.text);
        if (newText) {
            msg.text = newText;
            msg.edited = true;
            setChats(updatedChats);
        }
    };

    // Function to delete a message
    const handleDeleteMessage = (msgIndex) => {
        const updatedChats = [...chats];
        updatedChats[selectedChatIndex].messages.splice(msgIndex, 1);
        setChats(updatedChats);
    };

    // Function to handle reactions
    const handleReaction = (msgIndex) => {
        // Implement your reaction handling logic here
        alert('Reaction added to message!');
    };

    // Function to toggle dark mode
    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    // Function to handle emoji picker toggle
    const toggleEmojiPicker = () => {
        setEmojiPickerVisible(!emojiPickerVisible);
    };

    // Function to handle emoji clicks
    const handleEmojiClick = (emoji) => {
        setMessage((prevMessage) => `${prevMessage} ${emoji}`);
        setEmojiPickerVisible(false);
    };

    // Filter chats based on search query
    const filteredChats = chats.filter((chat) =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    
    return (
        <div
            className={`chat-system absolute flex flex-row right-[1.4vw] top-[13vh] ${
                darkMode ? 'bg-gray-900' : 'bg-[#ececec]'
            } h-[85vh] w-[82vw] rounded-[0.7vw]`}
        >
            
            <div
                className={`left-sidebar w-[40vw] ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-[0.7vw] m-[1vw] overflow-y-auto p-[0.5vw]`}
            >
                <div className='flex flew-row'>

                {/* Search bar to filter chats */}
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`search-bar flex-grow px-[0.7vw] py-[0.4vw]  border ${
                        darkMode ? 'bg-gray-600' : ''
                    } rounded-[0.3vw]`}
                    placeholder="Search chats..."
                    />

                {/* Button to create a new chat */}
                <button
                    onClick={handleNewChat}
                    className={`new-chat-btn font-roboto text-[1.3vw] mx-[0.51vw] text-center w-[3vw]  p-[0.1vw] text-gray-100 rounded-[0.3vw]`}
                    >
                    <img src="/Report/add.png"  alt="" />
                </button>

                {/* Toggle dark mode */}
                <button
                    onClick={handleDarkModeToggle}
                    className="dark-mode-toggle w-[3vw] font-roboto text-[1.3vw]  items-center  rounded-[0.3vw]"
                    >
                   <img src="/Messages/theme.png"  alt="" />
                </button>

                    </div>
                {/* Display filtered chats */}
                {filteredChats.map((chat, index) => (
                    <div
                    key={index}
                    className={`chat-item h-[4vw] p-[1vw] my-[0.5vw] rounded-[0.3vw] ${
                        darkMode ? 'bg-gray-700' : 'bg-[#444444] hover:[#ececec]'
                    } hover:bg-gray-400 flex justify-between`}
                    onClick={() => setSelectedChatIndex(index)}
                >
                    <div className='flex flex-row items-center'>

                    {/* Display user image */}
                    <img
                        src={chat.userImageURL}
                        alt={chat.userName}
                        className="w-[3vw]  rounded-[0.3vw] mr-[0.4vw]"
                        />
                    <span className="chat-name cursor-pointer">
                        {chat.userName}
                    </span>
                        </div>
                    {/* Chat actions */}
                    <div className="chat-actions flex gap-[0.3vw]">
                        {/* Unread message count */}
                        {unreadCount[index] > 0 && (
                            <span className="unread-count bg-red-500 text-white rounded-[0.3vw] px-2">
                                {unreadCount[index]}
                            </span>
                        )}
                        {/* Delete chat */}
                        <button
                            onClick={() => handleDeleteChat(index)}
                            className="delete-chat-btn text-red-500"
                        >
                            <img src="/Messages/Trash.png" className='w-[2vw]  rounded-full p-1' alt="" />
                        </button>
                    </div>
                </div>
                
                ))}
            </div>

            {formVisible && (
    <div className="new-chat-form absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl mb-4">Add New Chat</h2>
            <input
                type="text"
                value={newChatName}
                onChange={(e) => setNewChatName(e.target.value)}
                placeholder="Enter name"
                className="mb-4 px-3 py-2 border rounded w-full"
            />
            <input
                type="text"
                value={newChatImageURL}
                onChange={(e) => setNewChatImageURL(e.target.value)}
                placeholder="Enter image URL"
                className="mb-4 px-3 py-2 border rounded w-full"
            />
            <button
                onClick={handleAddChat}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                OK
            </button>
            <button
                onClick={() => setFormVisible(false)}
                className="bg-red-500 text-white px-4 py-2 rounded ml-2"
            >
                Cancel
            </button>
        </div>
    </div>
)}

            {/* Right: ChatBox with the selected chat */}
            <div
                className={`right-chatbox w-[90vw] ${
                    darkMode ? 'bg-gray-800' : ''
                } rounded-[0.7vw] m-[1vw]  overflow-y-auto`}
            >
                {selectedChatIndex !== null ? (
                    <ChatBox
                        chat={chats[selectedChatIndex]}
                        handleMessageChange={handleMessageChange}
                        handleSendMessage={handleSendMessage}
                        message={message}
                        handleFileUpload={handleFileUpload}
                        isTyping={isTyping}
                        handleEditMessage={handleEditMessage}
                        handleDeleteMessage={handleDeleteMessage}
                        handleReaction={handleReaction}
                        darkMode={darkMode}
                        emojiPickerVisible={emojiPickerVisible}
                        toggleEmojiPicker={toggleEmojiPicker}
                        handleEmojiClick={handleEmojiClick}
                    />
                ) : (
                    <div className='flex flex-col items-center my-[13vw] justify-center'>
                        <img src="/Dashboard/messages.png" className='w-[150px]' alt="" />
                        <h1>
                            Select a chat
                        </h1>
                    </div>
                )}
            </div>
        </div>
    )}
export default ChatSystem;