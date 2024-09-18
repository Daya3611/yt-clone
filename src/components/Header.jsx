import { ModeToggle } from '@/ui/ModeToggle';
import { useAppContext } from '@/useContextHook/useContextApi';
import { useTheme } from '@/useContextHook/useTheme';
import Loader from '@/utils/Loder';
import SpinnerLoader from '@/utils/SpinnerLoader';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { CgClose, CgMenu, CgSearch } from 'react-icons/cg';
import { FaBell, FaHamburger } from 'react-icons/fa';
import { IoMic, IoMicOff } from 'react-icons/io5';
import { MdVideoCall } from 'react-icons/md';
import { RiAccountCircleLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [searchQuery,setSearchQuery]= useState();
  const {loading,mobileMenu,setMobileMenu} = useAppContext();
  const navigate = useNavigate();
  const handelSeachQuary = () => {
    if(searchQuery?.length > 0){
      navigate(`/search/${searchQuery}`)
    }
  }

  const handleClearSearchQuery = () => {
    setSearchQuery("sds")
  };

  const mobileToggleMenu = () =>{
    setMobileMenu(!mobileMenu)
  }

  return (
    <div>
      <div className='w-full fixed top-0 z-10 flex flex-row items-center justify-between h-20 shadow-md px-4 md:px-5 bg-white dark:bg-black dark:text-white text-gray-700 dark:border-b-2 '>
      {loading && <SpinnerLoader/>}

        <div className='flex h-5 items-center'>
            <div className='flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-9 w-9 rounded-full hover:dark:bg-gray-700 hover:bg-gray-300' onClick={mobileToggleMenu}>
             {mobileMenu ? (<CgClose className=' text-lg' />) : ( <CgMenu className='text-lg'/>)}
            </div>

          <Link href='/'>
            <Image src='/img/yt_dekstop.png' width={100} height={50} alt='logo' className="hidden md:block h-full dark:invert object-contain" />
            <Image src='/img/youtube_mobile.png' width={100} height={50} alt='logo' className=" md:hidden h-14 dark:invert object-contain" />
          </Link>

        </div>

        <div className='flex items-center group relative'>
          <div className='flex h-10 md:ml-10 md:pl-5 border border-gray-300  rounded-l-2xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 dark:border-gray-700'>
            <div className='w-10 items-center justify-center hidden group-focus-within:md:flex'>
            <CgSearch className='text-xl' />
            </div>
            <input type="text" placeholder='Search' className='pl-5 pr-5 text-black text-sm bg-transparent outline-none md:pl-0 w-32 sm:w-44 md:w-64 lg:w-[500px] dark:text-white dark:placeholder-gray-300' onChange={(e)=>setSearchQuery(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handelSeachQuary();
            }}}
            />
            {searchQuery && (
              <button className='absolute right-32 top-1/2 transform -translate-y-1/2' onClick={handleClearSearchQuery}><CgClose className='text-lg'/></button>
            )}
          </div>
          <button className='flex items-center justify-center w-[40px] md:w-[60px] h-10 rounded-r-3xl dark:border-gray-700 border-gray-300 dark:bg-gray-700 bg-gray-100'
          onClick={handelSeachQuary}
          >
              <CgSearch className='text-xl'/>
          </button>

          <button className='flex items-center justify-center w-[40px] md:w-[60px] h-8 md:h-10 rounded-full dark:hover:bg-gray-700 hover:bg-gray-300'
          onClick={''}
          >
              {/* <IoMicOff className='text-xl'/> */}
              <IoMic className='text-xl'/>
          </button>
        </div>
        <div className='flex items-center space-x-2 md:space-x-4'>
          <button className='hidden md:flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700'>
            <MdVideoCall className='text-xl'/>
          </button>
          <button className='hidden md:flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700'>
            <FaBell className='text-xl'/>
          </button>

          <div className='flex space-x-0 md:space-x-2'>
          <button className='hidden md:flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700'>
            <RiAccountCircleLine className='text-xl'/>
          </button>  
          
            <ModeToggle className="rounded-3xl"/>
          
          </div>       

        </div>
      </div>
    </div>
  )
}

export default Header
