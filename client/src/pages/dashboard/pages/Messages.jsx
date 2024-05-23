import React, { useState } from 'react';

// ChatBox component
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
    handleVoiceMessage,
    darkMode,
    emojiPickerVisible,
    toggleEmojiPicker,
    handleEmojiClick
}) => {
    return (
        <div
            className={`chat-area h-full w-full flex bg flex-col p-4 rounded-lg ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'
            }`}
        >
            {/* User profile at the top */}
            <div className="user-profile flex items-center mb-4">
                <img
                    src={chat.userImageURL}
                    alt={chat.userName}
                    className="w-10 h-10 rounded-full mr-3"
                />
                <p className="font-semibold">{chat.userName}</p>
            </div>

            {/* Chat messages in the middle */}
            <div className="chat-messages flex-grow overflow-y-auto h-56 p-4 mb-4">
                {chat.messages.map((msg, index) => (
                    <div key={index} className="message my-2 flex items-center">
                        <div
                            className={`message-content ${
                                msg.edited ? 'italic' : ''
                            } flex-grow bg-gray-300 text-black p-2 rounded-lg max-w-max`}
                            onClick={() => handleEditMessage(index)}
                        >
                            {msg.text}
                        </div>
                        <span className="text-xs text-gray-600 mt-1 ml-2">
                            {msg.time}
                        </span>
                        {/* Reactions */}
                        <button
                            className="reaction-button ml-2"
                            onClick={() => handleReaction(index)}
                        >
                            <img src="public/SVG/like.png" className='w-[1.4vw]' alt="" />
                        </button>
                        {/* Delete button */}
                        <button
                            className="delete-button ml-2 text-red-500"
                            onClick={() => handleDeleteMessage(index)}
                        >
                            <img src="public/SVG/Tarsh.png" className='w-[1.4vw]' alt="" />
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
            <div className="input-area flex space-x-2 items-center">
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
                        className="upload-label text-black px-4 py-2 rounded-lg cursor-pointer"
                    >
                        <img src="public/SVG/upload.png" className='w-[3vw] hover:bg-gray-600 rounded-full p-1' alt="" />
                    </label>
                </div>

                {/* Emoji picker toggle */}
                <button
                    className="emoji-picker-button text-black px-4 py-2 rounded-lg cursor-pointer"
                    onClick={toggleEmojiPicker}
                >
                    <img src="public/SVG/Emoji.png" className='w-[3vw] hover:bg-gray-600 rounded-full p-1' alt="" />
                </button>

                {/* Emoji picker */}
                {emojiPickerVisible && (
                    <div className="emoji-picker flex flex-">
                        {/* Implement emoji picker here */}
                        {/* For example: */}
                        <button onClick={() => handleEmojiClick('😊')}>
                            😊
                        </button>
                        <button onClick={() => handleEmojiClick('😂')}>
                            😂
                        </button>
                        <button onClick={() => handleEmojiClick('😂')}>
                            ❤
                        </button>
                        <button onClick={() => handleEmojiClick('😂')}>
                            👍
                        </button>
                        <button onClick={() => handleEmojiClick('😂')}>
                            👌
                        </button>
                        <button onClick={() => handleEmojiClick('😂')}>
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
                    className={`flex-grow px-3 py-2 border ${
                        darkMode ? 'bg-gray-600' : 'border-gray-100'
                    } rounded-lg`}
                    placeholder="Type a message..."
                />

                {/* Send button */}
                <button
                    onClick={handleSendMessage}>
                   <img src="public/SVG/send.png" className='w-[3vw] hover:bg-gray-600 rounded-full p-1' alt="" />
                </button>
            </div>
        </div>
    );
};

// ChatSystem component
const ChatSystem = ({ userName, userImageURL }) => {
    // State to store the list of chats, selected chat index, and current message input
    const [chats, setChats] = useState([]);
    const [selectedChatIndex, setSelectedChatIndex] = useState(null);
    const [message, setMessage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [unreadCount, setUnreadCount] = useState({});
    const [archivedChats, setArchivedChats] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

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

    // Function to create a new chat
    const handleNewChat = () => {
        const newChat = {
            userName,
            userImageURL,
            name: `Chat ${chats.length + 1}`,
            messages: [],
        };
        setChats([...chats, newChat]);
        setSelectedChatIndex(chats.length);
        // Add to unread count
        setUnreadCount({
            ...unreadCount,
            [chats.length]: 0,
        });
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

    // Function to pin a chat
    const handlePinChat = (chatIndex) => {
        // Implement your pin chat logic here
        alert('Pin chat feature coming soon!');
    };

    // Function to archive a chat
    const handleArchiveChat = (chatIndex) => {
        // Implement your archive chat logic here
        alert('Archive chat feature coming soon!');
    };

    // Filter chats based on search query
    const filteredChats = chats.filter((chat) =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div
            className={`chat-system absolute flex flex-row right-[1.4vw] top-[13vh] ${
                darkMode ? 'bg-gray-900' : 'bg-slate-100'
            } h-[85vh] w-[82vw] rounded-[0.7vw]`}
        >
            {/* Left sidebar with chat selection */}
            <div
                className={`left-sidebar w-[40vw] ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-[0.7vw] m-[1vw] overflow-y-auto p-4`}
            >
                <div className='flex flew-row'>

                {/* Search bar to filter chats */}
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`search-bar flex-grow px-3 py-2  border ${
                        darkMode ? 'bg-gray-600' : 'border-gray-100'
                    } rounded-lg`}
                    placeholder="Search chats..."
                    />

                {/* Button to create a new chat */}
                <button
                    onClick={handleNewChat}
                    className={`new-chat-btn   font-roboto text-2xl mx-1 text-center w-[3vw] hover:bg-gray-300 p-1
                         text-gray-100 rounded-full`}
                    >
                   <img src="public/SVG/add.png"  alt="" />
                </button>

                {/* Toggle dark mode */}
                <button
                    onClick={handleDarkModeToggle}
                    className="dark-mode-toggle w-[3vw] font-roboto text-2xl  items-center   hover:bg-gray-300 rounded-full"
                    >
                    <img src="public/SVG/Dark.png"  alt="" />
                </button>

                    </div>
                {/* Display filtered chats */}
                {filteredChats.map((chat, index) => (
                    <div
                        key={index}
                        className={`chat-item p-2 my-2 rounded-lg ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-300 hover:bg-gray-400'
                        } hover:bg-gray-400 flex justify-between`}
                        onClick={() => setSelectedChatIndex(index)}
                    >
                        <span className="chat-name cursor-pointer">
                            {chat.name}
                        </span>
                        {/* Chat actions */}
                        <div className="chat-actions flex gap-2">
                            {/* Unread message count */}
                            {unreadCount[index] > 0 && (
                                <span className="unread-count bg-red-500 text-white rounded-full px-2">
                                    {unreadCount[index]}
                                </span>
                            )}
                            {/* Pin chat */}
                            <button
                                className="pin-chat-button"
                                onClick={() => handlePinChat(index)}
                            >
                                <img src="public/SVG/pin.png" className='w-[3vw] hover:bg-yellow-600 rounded-full p-1' alt="" />
                            </button>
                            {/* Archive chat */}
                            <button
                                className="archive-chat-button"
                                onClick={() => handleArchiveChat(index)}
                            >
                                <img src="public/SVG/archive.png" className='w-[3vw] hover:bg-yellow-600 rounded-full p-1' alt="" />
                            </button>
                            {/* Delete chat */}
                            <button
                                onClick={() => handleDeleteChat(index)}
                                className="delete-chat-btn text-red-500"
                            >
                                <img src="public/SVG/Tarsh.png" className='w-[3vw] hover:bg-red-500 rounded-full p-1' alt="" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right: ChatBox with the selected chat */}
            <div
                className={`right-chatbox w-[40vw] ${
                    darkMode ? 'bg-gray-800' : 'bg-blue-100'
                } rounded-[0.7vw] m-[1vw] p-4 overflow-y-auto`}
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
                    <p
                        className={`${
                            darkMode ? 'text-gray-900' : 'text-gray-900'
                        }`}
                    >
                        Select a chat from the left pane to start chatting
                    </p>
                )}
            </div>
        </div>
    );
};

export default ChatSystem;