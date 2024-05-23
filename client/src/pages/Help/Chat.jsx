import React, { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');
  const [userImg, setUserImg] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [error, setError] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError('Please enter a message.');
      return;
    }
    const newMessage = { content: message.trim(), sender: userName || 'Anonymous', time: new Date(), image: userImg };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessage('');
    setUserImg('');
    setError('');
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserImgChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imgUrl = URL.createObjectURL(file);
    setUserImg(imgUrl);
  };

  const handleStartChat = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  const handleDeleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
  };

  return (
    <div className='w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg'>
      {showForm ? (
        <form onSubmit={handleStartChat} className='px-4 py-3'>
          <input
            type='text'
            value={userName}
            onChange={handleUserNameChange}
            className='appearance-none border rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 block w-full'
            placeholder='Enter your name...'
          />
          <input
            type='file'
            onChange={handleUserImgChange}
            accept='image/*'
            className='appearance-none border rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 block w-full'
          />
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full'>
            Start Chat
          </button>
        </form>
      ) : (
        <div className="flex flex-col h-screen">
          <div className='bg-blue-500 text-white py-4 px-6 flex justify-between items-center'>
            <div>
              {userImg && <img src={userImg} alt='User' className='h-8 w-8 rounded-full mr-2' />}
              {userName || 'Anonymous'}
            </div>
          </div>
          <div className='flex-1 px-4 py-6 overflow-y-auto'>
            {messages.map((msg, index) => (
              <div key={index} className="flex justify-end mb-2">
                <div className="bg-blue-500 text-white py-2 px-4 rounded-lg max-w-xs break-words relative">
                  {msg.image && <img src={msg.image} alt="Uploaded" className="mb-2 max-w-xs max-h-32" />}
                  {msg.content}
                  <button
                    className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center"
                    onClick={() => handleDeleteMessage(index)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
          {error && <div className='text-red-500'>{error}</div>}
          <form onSubmit={sendMessage} className='flex items-center px-4 py-3 border-t'>
            <input
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='flex-1 appearance-none border rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Type your message...'
            />
            <input
              type='file'
              onChange={handleUserImgChange}
              accept='image/*'
              className='hidden'
              id='file-upload'
            />
            <label htmlFor='file-upload' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline cursor-pointer'>
              Upload
            </label>
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ml-2'>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
