import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');
  const [userImg, setUserImg] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [error, setError] = useState('');

  
  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setError('Please enter a message.');
      return;
    }
    const newMessage = { content: message.trim(), sender: userName || 'Anonymous', time: new Date(), image: userImg };
    socket.emit('sendMessage', newMessage);
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
    <div className='w-[800px] my-[10px] mx-auto rounded-lg overflow-hidden '>
      {showForm ? (
        <form onSubmit={handleStartChat} className=' items-center mx-auto mt-[100px] bg-[#ececec] rounded-[10px] w-[300px] px-4  py-3'>
          <h1 className='text-[20px] my-[10px]'>Your Name</h1>
          <input
            type='text'
            value={userName}
            onChange={handleUserNameChange}
            className='appearance-none border rounded-[10px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 block w-full'
            placeholder='Enter your name...'
          />
          
          <div className="file-upload">
            <h1 className='text-[20px] my-[10px]'>Your image</h1>
                    <input
                        type="file"
                        onChange={handleUserImgChange}
                        className="hidden"
                        id="file-upload"
                    />
                    <label
                        htmlFor="file-upload"
                        className="upload-label text-black bg-[#444444]  rounded-lg cursor-pointer"
                        >
                        <img src="/Messages/upload.png" className='w-[50px]  rounded-full p-1' alt="" />
                    </label>
                </div>
          <button type='submit' className='bg-[#444444] hover:bg-black text-white font-bold py-2 px-4 rounded-[10px]  focus:outline-none focus:shadow-outline w-full'>
            Start Chat
          </button>
        </form>

      ) :(
        <div className="flex flex-col  h-[600px]">
          <div className='bg-[#444444] text-white  py-4 px-6 flex justify-between items-center'>
            <div className='flex flex-row items-center'>
              {userImg && <img src={userImg} alt='User' className='h-12 w-12 rounded-full mr-2' />}
              {userName || 'Anonymous' }
            </div>
          </div>
          <div className='flex-1 px-4 py-6 bg-[#ececec] overflow-y-auto'>
            {messages.map((msg, index) => (
              <div key={index} className="flex justify-end mb-2">
                <div className="bg-black text-white py-2 px-4 rounded-lg max-w-xs break-words relative">
                  {msg.image && <img src={msg.image} alt="Uploaded" className="mb-2 max-w-xs max-h-32" />}
                  {msg.content}
                  <button
                    className="absolute top-0 right-0 text-xs text-white bg-black rounded-[5px] w-4 h-4 flex items-center justify-center"
                    onClick={() => handleDeleteMessage(index)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
          {error && <div className='text-red-500'>{error}</div>}
          <form onSubmit={sendMessage} className='flex bg-[#444444] items-center px-4 py-3 border-t'>
            <input
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='flex-1 appearance-none border mr-[10px] rounded-[5px] py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
              placeholder='Type your message...'
            />
            <input
              type='file'
              onChange={handleUserImgChange}
              accept='image/*'
              className='hidden'
              id='file-upload'
            />
            <label htmlFor='file-upload' className='bg-[#444444] hover:bg-black text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline cursor-pointer'>
              Upload
            </label>
            <button type='submit' className='bg-[#444444] hover:bg-black text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ml-2'>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
