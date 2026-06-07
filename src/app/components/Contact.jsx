'use client'
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";import { FaRegAddressBook } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FaLocationPinLock } from "react-icons/fa6";
export default function Contact() {
  return (
    <section id='contact'>
        <div  className='py-10 px-17 bg-slate-900 text-white shadow shadow-white '> 
            <div className='text-center items-center mb-19 text-blue-500 font-extrabold text-4xl id'>
                <h1>Contact</h1>
            </div>
           <div>
                <p className='font-bold text-[16px] pb-1.5 '><MdOutlineEmail  className='inline w-4 h-5 mr-2.5'/>_ Email: <span className='font-normal text-slate-400 '>ishaq0318@gmail.com</span></p>
                <p className='font-bold text-[16px] pb-1.5'><FaRegAddressBook className='inline w-4 h-5 mr-2.5'/>_ Watsapp: <span className='font-normal text-slate-400'><a href="">03181950521</a></span></p>
                <p className='font-bold text-[16px] pb-1.5'><IoLocationOutline className='inline w-4 h-5 mr-2.5'/>_ Current Address: <span className='font-normal text-slate-400 '>Peshawar University Road Tehkal Payan</span></p>
                <p className='font-bold text-[16px] pb-1.5'><FaLocationPinLock className='inline w-4 h-5 mr-2.5'/>_ Permenent Address: <span className='font-normal text-slate-400 '>KPK Lower Dir /teh: Samar Bagh  /vill: Khan Banda</span></p>
          </div>
        </div>
    </section>
  )
}
