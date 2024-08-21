import React from 'react'
import art from '../assets/Images/Artwork.png'
import Footer from './Footer'
const NoQuote = () => {
  return (
    <div className='  w-full bg-[#fafafa] h-[500px] ' >
        <div className=" p-8 text-[32px] font-[400] text-[#000000D9] ">My Quotes</div>
        <div className=" flex flex-col items-center justify-center gap-[10px] ">
<img src={art} alt="" className=' w-[163px] h-[200px] ' />
<div className=" text-[24px] font-[400] text-[#00000080] ">You don’t have any item on your qoute </div>
<div className=" mb-[50px]  w-[230px] mt-[20px] h-[59px] rounded-[30px] bg-[#2577EE] text-white font-[500] justify-center items-center flex cursor-pointer "> Add Item </div>
        </div>
      <Footer />
    </div>
  )
}

export default NoQuote
