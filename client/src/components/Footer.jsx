import React from 'react'
import logo from "../assets/images/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
import MailComponent from './MailComponent';


const Footer = () => {
  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>

      <div className='w-full flex sm:flex-row flex-col  justify-between items-center my-4 '>

        <div className='flex flex-[0.5] justify-center items-center '>
          <img src={logo} className='w-32' alt="logo" />
        </div>


        <div className='flex flex-1 justify-evenly items-center flex-warp  sm:mt-0 mt-5 w-full'>
          <p className='text-white text-base text-center mx-2 cursor-pointer '>Market</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer '>Exchange</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer '>Tutorials</p>
          <p className='text-white text-base text-center mx-2 cursor-pointer '>Wallets</p>

        </div>

      </div>


      <div className='flex justify-center items-center flex-col mt-5 '>
        <p className='text-white text-sm text-center'>Contact Us</p>
        <p className='text-white text-sm text-center'>arpitweb3@proton.me</p>
      </div>


      <div className='sm:w-[90%]  w-full h-[0.25px]   bg-gray-400  mt-5 ' />


      <div className='sm:w-[90%] w-full flex justify-between items-center '>
        <p className='text-white text-sm text-center'> @arpitweb3 2024 </p>


        <div className='flex gap-4 py-10 '>
          <a href="https://www.linkedin.com/in/arpitweb3/"><FaLinkedin className='text-4xl text-white cursor-pointer  ' /></a>
          <a href="https://www.linkedin.com/in/arpitweb3/"> <FaGithub className=' text-4xl text-white cursor-pointer  ' /></a>
          <a href="https://twitter.com/arpitweb3"> <FaSquareXTwitter className=' text-4xl text-white cursor-pointer  ' /></a>
          {/* <a href={`mailto:arpitweb3@proton.me`}>
            <MdEmail className='text-4xl text-white cursor-pointer' />
          </a> */}
          <MailComponent></MailComponent>
        </div>


        <p className='text-white text-sm text-center'>  All Rights Reserved. </p>
      </div>

    </div>
  )
}

export default Footer