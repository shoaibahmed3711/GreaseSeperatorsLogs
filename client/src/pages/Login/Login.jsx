import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'shoaib' && password === '123') {
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="bg-white mx-auto py-[5vw]">
      <div className="flex flex-row justify-center gap-36 pt-10">
        <div className="flex flex-col justify-center bg-gray-200 rounded-md px-[2vw] py-[2vw]">
          <div className="flex justify-center mb-6">
            <img src="public/icon.jpg" className="w-[10vw] rounded-full" alt="icon" />
          </div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col mb-4">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                className="border border-gray-400 rounded-sm w-96 px-2 h-10"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="border border-gray-400 rounded-sm w-96 px-2 h-10"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a href="#" className="text-blue-900 font-semibold text-sm hover:underline">Already have an account</a>
            <div className="flex justify-center my-4">
              <button type="submit" className="bg-black px-4 py-2 text-white rounded-sm font-semibold">
                Signup
              </button>
            </div>
          </form>
        </div>
        <div>
          <img src="src/pages/Login/images/1.png" className="w-[35vw] flex flex-col justify-center" alt="illustration" />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-10">
        <img src="public/Login/star.png" className="w-[6vw]" alt="star" />
        <div className="text-center mx-6">
          <h1 className="text-[2vw] font-bold">Grease Separator Operating Log</h1>
          <h2 className="text-[2vw] font-bold mt-2">POWERED BY</h2>
        </div>
        <img src="public/Login/star.png" className="w-[6vw]" alt="star" />
      </div>
    </div>
  );
};

export default Login;
