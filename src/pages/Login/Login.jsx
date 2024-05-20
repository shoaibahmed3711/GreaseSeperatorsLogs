import React from 'react'

const Login = () => {
  return (
    <div className='bg-white mx-auto py-[5vw] '>
    <div className='flex flex-row justify-center gap-36 pt-10'>
        <div className='flex flex-col justify-center bg-gray-200 rounded-md px-[2vw] py-[2vw]'>
          <div><img src="public/icon.jpg" className='w-[10vw] mx-auto p-[1vw] rounded-full' alt="" /></div>
        <div>
          <form action="">
            <div className='flex flex-col mb-3'>
              <label htmlFor="" >E-mail:</label>
              <input type="email" name="email" className='border border-gray-400 rounded-sm w-96 px-2 h-10' required />
            </div>
            <div className='flex flex-col mb-3'>
              <label htmlFor="">Username:</label>
              <input type="email" name="email" className='border border-gray-400 rounded-sm w-96 px-2 h-10' required />
            </div>
            <div className='flex flex-col mb-3'>
              <label htmlFor="">Passward:</label>
              <input type="email" name="email" className='border border-gray-400 rounded-sm w-96 px-2 h-10' required />
            </div>
            <a href="" className='text-blue-900 font-semibold text-sm hover:underline'>Already have an account</a>
          </form>
          <div className='flex justify-center mx-auto my-3'><button className="bg-black px-4 py-1 text-white  rounded-sm font-semibold">Signup</button></div>
        </div>
      </div>
    <div>
      <img src="src/pages/Login/images/1.png" className='w-[35vw] flex flex-col justify-center' alt="" />
    </div>
  </div>  
  <div className='flex flex-row justify-center items-center'>
  <div><img src="public/Login/star.png" className='w-[6vw]' alt="" /></div>
  <div>
  <h1 className='text-center pt-[3vw] text-[2vw] font-roboto font-bold'>Grease separator operating log</h1>
  <h1 className='text-center pt-[1vw] text-[2vw] font-roboto font-bold'>POWERED BY</h1>
  </div>
  <div><img src="public/Login/star.png" className='w-[6vw]' alt="" /></div>
    </div>
  </div>
  )
}

export default Login