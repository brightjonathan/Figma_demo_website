import React from 'react';
import { footer } from '../Constant';
import { MdOutlineLocationOn, MdPhoneAndroid } from 'react-icons/md';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { ImFacebook2 } from 'react-icons/im';
import { div } from 'framer-motion/client';

const Footer = () => {
  return (
    <div className='footer font-sans flex-wrap px-5 flex flex-col md:flex-row justify-around  mt-[300px] pb-[70px]  items-center'>
        <div className='foot-links flex flex-col md:flex-row text-[20px] md:text-4xl w-[40%] lg:gap-12 justify-around md:w-auto mb-10 items-center  md:mb-0'>
         {
            footer.map((foot, index)=>{
                return(
                    <div key={index} className="mb-6 md:mb-0 md:mr-10">
                       <p  className="font-bold text-[20px]  mb-3 md:mb-4">{foot.name}</p>
                       <ul className="flex flex-col gap-3">
                          {foot.links.map((link, index)=>{
                            return(
                                <li key={index} className='text-[16px] cursor-pointer' >{link}</li>
                            )
                          })}
                       </ul>
                    </div>
                )
            })
         }
        </div>

        
      
    </div>
  )
}

export default Footer;
