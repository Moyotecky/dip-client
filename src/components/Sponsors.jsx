import React from 'react'
import a from '../assets/Images/a.png'
import b from '../assets/Images/b.png'
import c from '../assets/Images/c.png'
import d from '../assets/Images/d.png'
import e from '../assets/Images/e.png'

const Sponsors = () => {
  return (
    <div className=" md:mt-[60px] mt-[0px] md:mb-[30px] md:bg-white bg-[#fafafa] w-full md:h-[250px] h-full  ">
        <div className=" text-center text-[24px] font-[600] text-[#000d1a]  ">Affiliates / Sponsors</div>
    <div className='  flex justify-around gap-[15px] md:p-0 p-5 flex-wrap '>
      <img src={a} alt="" className=" md:w-[230px] md:h-[100px] w-[120px] h-[40px] " />
      <img src={b} alt="" className=" w-[180px] h-[40px]  md:w-[415px] md:h-[100px] " />
      <img src={c} alt="" className=" md:w-[100px] md:h-[100px] w-[40px] h-[40px] " />
      <img src={d} alt="" className=" w-[40px] h-[40px] md:w-[100px] md:h-[100px]  " />
      <img src={e} alt="" className=" md:w-[100px] md:h-[100px] w-[40px] h-[40px] " />
    </div>
    </div>
  )
}

export default Sponsors
