import React from 'react'
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';



const ServiceCard = ({ color, title, icons, subtitle }) => (

  <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl '>
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color} `}>
      {icons}
    </div>

    <div className='ml-5 flex flex-col flex-1'>
      <h1 className='mt-2 text-white text-lg'>{title}</h1>
      <p className='mt-2 text-white text-sm  md:w-9/12 '>{subtitle}</p>
    </div>

  </div>

)



const Services = () => {
  return (
    <div className=' gradient-bg-services flex justify-center items-center  '>
      
<div  className='max-w-7xl flex flex-col md:flex-row  justify-center items-center   '>


<div className='flex mf:flex-row flex-col items-center  justify-between md:p-20 py-12 px-4 '>
        <div className='flex-1 flex flex-col justify-start items-start '>
          <h1 className='text-whit text-3xl  sm:text-5xl text-gradient '>Services that we  <br /> continue to improve </h1>
        </div>
      </div>

      <div className='flex-1 flex-col justify-start items-center  '>
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security Guaranteed"
          icons={<BsShieldFillCheck fontSize={21} className='text-white' />}
          subtitle="Security is guaranteed. We always maintain the quality of our products."
        />


        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icons={<BiSearchAlt fontSize={21} className='text-white' />}
          subtitle="Unlock the best exchange rates with our competitive and reliable platform."
        />

        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icons={<RiHeart2Fill fontSize={21} className='text-white' />}
          subtitle="Experience lightning-fast transactions with our efficient system."
        />

      </div>

</div>
    </div>
  )
}

export default Services