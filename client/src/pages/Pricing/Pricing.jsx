import React from 'react'
import { Link } from 'react-router-dom'
const Pricing = () => {
  return (
    <div className='bg-[#ececec]'>
      <h1 className='text-center text-[4vw] font-black p-[2vw]'>Pay Once, Use forever</h1>
      <p className='text-center text-[1.5vw] font-bold mb-[3vw]'>Get Started with Grease Seperator Log Operator <br />Your Kitchen Draining Partner </p>    
        <div className='flex flex-col items-center justify-center md:flex-row'>
          <div className='bg-white m-[2vw] p-[2vw] w-[500px] shadow-lg rounded-[0.7vw]'>
          <div>
            <h1 className='text-[30px] font-black'>Monthly</h1>
            <h2 className='text-[15px] font-semibold'>Only for</h2>
            <h1 className='flex flex-row items-center'><h1 className='font-semibold text-[45px]'>€</h1><h1 className='text-[65px] ml-[7px] font-black'>4.99</h1></h1>
            <button className='w-[400px] h-[50px] text-white rounded-[0.2vw] bg-[#444444] hover:bg-black'>
            <Link to='/SubscriptionForm' className='text-[30px] '>
            Subscribe
        </Link>
            </button>
          </div>
          <ul>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="public/images/tick.png" className='w-[23px] mr-[7px]' alt="" /><p> For just €5 per month, our gastronomy-focused subscription offers monthly disposal documentation, self-inspection record management, and convenient digital storage.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="public/images/tick.png" className='w-[23px] mr-[7px]' alt="" /><p> Gastronomy subscription: easy disposal documentation, compliant record-keeping, accessible historical data, all for a low fee.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="public/images/tick.png" className='w-[23px] mr-[7px]' alt="" /><p> Our subscription digitally manages self-inspection records for gastronomy businesses, ensuring regulatory compliance for €5 monthly.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="public/images/tick.png" className='w-[23px] mr-[7px]' alt="" /><p> For just €5 monthly, our subscription provides gastronomy businesses secure digital storage, ensuring easy access and data integrity.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="public/images/tick.png" className='w-[23px] mr-[7px]' alt="" /><p> For €5 monthly, our subscription assists gastronomy businesses in managing self-inspection records digitally, ensuring legal compliance and peace of mind.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="public/images/tick.png" className='w-[23px] mr-[7px]' alt="" /><p> Our €5/month subscription provides gastronomy businesses a flexible, affordable solution for managing operational records, ensuring compliance and tailored digital storage.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="public/images/tick.png" className='w-[23px] mr-[7px]' alt="" /><p> Tailored for gastronomy businesses, our €5/month subscription provides a comprehensive solution for managing self-inspection and disposal documentation.</p></li>
          </ul>
        </div>
          <div className='bg-white m-[2vw] p-[2vw] w-[500px] shadow-lg rounded-[0.7vw] '>
          <div>
          <h1 className='text-[30px] font-black'>Yearly</h1>
          <h2 className='text-[15px] font-semibold'>Only for</h2>
          <h1 className='flex flex-row items-center'><h1 className='font-semibold text-[45px]'>€</h1><h1 className='text-[65px] ml-[7px] font-black'>49.99</h1></h1>
          </div>
          <button className='w-[400px] h-[50px] text-white rounded-[0.2vw] bg-[#444444] hover:bg-black'>
            <Link to='/SubscriptionForm' className='text-[30px] '>
            Subscribe
        </Link>
            </button>
          <ul>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="public/images/tick.png" className='w-[23px] mr-[7px]' alt="" /><p> Our yearly subscription, priced at €50, ensures effortless digital document storage, quick access to historical data, and regulatory compliance.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="public/images/tick.png" className='w-[23px] mr-[7px]' alt="" /><p>For a flat fee of €50 per year, our subscription provides seamless digital document storage, quick access to historical data, and regulatory compliance for gastronomy businesses.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="public/images/tick.png" className='w-[23px] mr-[7px]' alt="" /><p>Annual subscription: €50. Reliable digital storage for gastronomy. Swift data access, regulatory compliance.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="public/images/tick.png" className='w-[23px] mr-[7px]' alt="" /><p>€50/year subscription: Enhance efficiency with hassle-free digital document storage for gastronomy, ensuring compliance.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="public/images/tick.png" className='w-[23px] mr-[7px]' alt="" /><p>Gastronomy-focused yearly subscription: secure, efficient digital storage, compliance, €50/year.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="public/images/tick.png" className='w-[23px] mr-[7px]' alt="" /><p>Enhance efficiency: yearly subscription for €50, providing digital storage, quick data access, and regulatory compliance.</p></li>
            <li className=' my-[1vw] text-[14px] border-b-[1px] border-[#ececec] py-[5px] flex flex-row'><img src="public/images/tick.png" className='w-[23px] mr-[7px]' alt="" /><p>Affordable and convenient yearly subscription: comprehensive digital document storage for gastronomy businesses, ensuring compliance, for €50/year.</p></li>
          </ul>
        </div>
        </div>
      <h1 className='text-center text-[4vw] font-black p-[2vw]'>Compare Plan & Feature</h1>
      <div className='flex justify-center items-center '>
        <table className='w-[900px] bg-white'>
          <thead className=''>
            <tr>
              <th className='text-[25px] py-[20px]'>Features</th>
              <th className='text-[25px] py-[20px]'>Monthly</th>
              <th className='text-[25px] py-[20px]'>Yearly</th>
            </tr>
          </thead>
          <tbody className=' p-[100px]'>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Monthly disposal documentation. <strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Developed for gastronomy industry.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Management of self-inspection records.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Accessible digital storage.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Ensures compliance with regulations.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Convenient access to historical data.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Cost-effective solution.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Flexible and affordable pricing.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Comprehensive operational record management.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Tailored solution for gastronomy businesses.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Real-time visibility for grease separator performance.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Technical support for digital platforms.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/cross.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Tracking historical data trends.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/cross.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Remote access to operating logs.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/cross.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Inaccuracies due to inconsistent data entry.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/cross.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Difficulty in integrating with existing systems or workflows.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/cross.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Limited availability of technical support.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/cross.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Complexity in managing access rights.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/cross.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>Inability to track maintenance and repair history effectively.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/cross.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
            <tr className='border-b-[2px] border-[#ececec]'>
              <td className='px-[20px] py-[20px]'>High costs associated with manual record-keeping.<strong>?</strong></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/cross.png" className='w-[35px]' alt="" /></td>
              <td className='px-[90px] py-[20px]'><img src="public/images/True.png" className='w-[35px]' alt="" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Pricing


