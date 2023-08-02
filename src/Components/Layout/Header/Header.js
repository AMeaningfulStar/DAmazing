import React from 'react';
import { Link } from 'react-router-dom';

import { FcMusic } from 'react-icons/fc';
import { PiListBold } from 'react-icons/pi';
import { BiChevronDown } from 'react-icons/bi';

const Header = () => {
  return (
    <header id='header' className='border-b border-gray-100 backdrop-blur-sm bg-white/90 desktop:fixed desktop:w-full desktop:top-0 desktop:left-0 desktop:z-30'>
      <div className='container px-4 py-6 mx-auto space-y-4 desktop:space-y-0 desktop:flex desktop:items-center desktop:justify-between desktop:space-x-10'>
        {/* 로고 */}
        <div className='flex justify-between'>
          <Link to='/' className='text-gray-800'>
            <div className='flex items-center'>
              <FcMusic className='flex-shrink-0 h-5 -mt-1 text-xl'></FcMusic>
              <p className='ml-2 text-lg'>D:<strong>Amazing</strong></p>
            </div>
          </Link>
          <div className='flex items-center space-x-2 desktop:hidden'>
            <button className='p-1 rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-none'>
              <PiListBold className='w-6 h-6 text-gray-700'></PiListBold>
            </button>
          </div>
        </div>
        {/* 데스크탑 */}
        <div className='hidden desktop:flex desktop:flex-row desktop:items-center desktop:justify-between desktop:flex-1 desktop:space-x-2'>
          {/* 데스크탑 메뉴 */}
          <div className='flex flex-col space-y-3 desktop:space-y-0 desktop:flex-row desktop:items-center desktop:space-x-8'>
            {/* <div className='relative inline-block w-auto desktop:block'>
              <div>
                <button className='text-gray-500 hover:text-gray-800 transition-colors duration-200 desktop:text-sm desktop:font-medium flex items-center space-x-1 focus:outline-none'>
                  <span>menu 1</span>
                  <BiChevronDown className='w-5 h-5'></BiChevronDown>
                </button>
              </div>
            </div> */}
            <Link to='/' className='text-gray-500 hover:text-gray-800 transition-colors duration-200 desktop:text-sm desktop:font-medium'>디미징 연락처</Link>
            <Link to='/' className='text-gray-500 hover:text-gray-800 transition-colors duration-200 desktop:text-sm desktop:font-medium'>디미징 출석부</Link>
            <Link to='/' className='text-gray-500 hover:text-gray-800 transition-colors duration-200 desktop:text-sm desktop:font-medium'>지원서</Link>
            <div className='relative inline-block w-auto desktop:block'>
              <div>
                <button className='text-gray-500 hover:text-gray-800 transition-colors duration-200 desktop:text-sm desktop:font-medium flex items-center space-x-1 focus:outline-none'>
                  <span>악보</span>
                  <BiChevronDown className='w-5 h-5'></BiChevronDown>
                </button>
              </div>
            </div>
          </div>
          {/* 데스크탑 로그인 */}
          <div className='flex flex-col space-y-4 desktop:space-y-0 desktop:flex-row desktop:items-center desktop:space-x-3'>
            <Link to='/login' className="flex items-center justify-center h-12 px-4 text-sm text-center text-gray-600 transition-colors duration-200 transform border rounded-lg desktop:h-10 desktop:font-medium hover:bg-gray-100 focus:outline-none">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header