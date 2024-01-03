import React from 'react'
// import AiFillPlayCircle  from "react-icons/ai"
// import {SiEthereum } from "react-icons/si"
// import {BsInfoCircle } from "react-icons/bs"
import { FaEthereum } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";


import { Loader } from './'



const Input = ({ placeholder, name, type, value, handleChange }) => (

  <input placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism '
  />




);




const Welcome = () => {

  const connectWallet = () => {

  }

  const handleSubmit = () => {

  }


  const commonStyles = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white'

  return (
    <div className='flex w-full justify-center items-center'>

      <div className='flex md:flex-row flex-col items-start justify-between  md:p-20 py-12 px-4 '>

        <div className='flex flex-1 justify-start  flex-col md:mr-10  '>
          <h1 className='text-white sm:text-5xl text-gradient py-1 '>
            Send Crypto <br />  across teh world
          </h1>

          <p className='text-left mt-5 text-white font-light md:w-p/12 text-base'>
            Explore the crypto world, buy and send crypto on KRYPT.
          </p>

          <button
            type='button'
            onClick={connectWallet}
            className='flex flex-row  justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] '
          >
            <p className='text-semibold text-white text-base'>Connect Wallet</p>

          </button>


          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
            <div className={`rounded-tl-2xl  ${commonStyles} `}>

              Reliability
            </div>

            <div className={commonStyles}>Security  </div>

            <div className={`rounded-tr-2xl  ${commonStyles} `}>

              Ethereum
            </div>

            <div className={`rounded-bl-2xl  ${commonStyles} `}>

              Web 3.0
            </div>

            <div className={commonStyles}>Security  </div>

            <div className={`rounded-br-2xl  ${commonStyles} `}>

              Blockchain
            </div>


          </div>


        </div>



        <div className='flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10 '>

          <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism '>
            {/* csshero.org/mesher  */}

            <div className='flex justify-between flex-col w-full h-full  '>

              <div className='flex justify-between items-start'>

                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center  ">

                  <FaEthereum className='text-white text-xl ' />

                </div>
                <IoIosInformationCircleOutline className='text-2xl text-white' />

              </div>


              <div>
                <p className='text-white font-light text-sm '>

                  0xsadjsd.....324hjg23
                </p>

                <p className='text-white font-semibold text-lg mt-1 '>

                  address ethereum

                </p>

              </div>

            </div>
          </div>


          <div className='p-5 sm:w-96 flex flex-col justify-start item-center blue-glassmorphism '>

            <Input placeholder="Address To" name="addressTo" type="text" handleChange={() => { }} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={() => { }} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={() => { }} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={() => { }} />


            <div className='h-[1px] w-full bg-gray-400 my-2 ' />




            {false ? (

              <>
               <Loader></Loader>
              </>

            ) : (

              <button
                type="button"
                onClick={handleSubmit}
                className='text-white w-full mt-2 border-[1px] p-2  border-[#3d4f7c] rounded-full cursor-pointer '
              >

                Send Now

              </button>

            )}

          </div>



        </div>




      </div>

    </div>
  )
}

export default Welcome