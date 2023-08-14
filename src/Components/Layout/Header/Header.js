import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../../Menu/Dropdown';
import Logo from './Logo';


const Header = () => {
  return (
    <header id='header' className='border-b border-gray-100 backdrop-blur-sm bg-white/90 desktop:fixed desktop:w-full desktop:top-0 desktop:left-0 desktop:z-30'>
      <div className='container px-4 py-6 mx-auto space-y-4 desktop:space-y-0 desktop:flex desktop:items-center desktop:justify-between desktop:space-x-10'>
        {/* 로고 */}
        <Logo />
        {/* 데스크탑 */}
        <div className='hidden desktop:flex desktop:flex-row desktop:items-center desktop:justify-between desktop:flex-1 desktop:space-x-2'>
          {/* 데스크탑 메뉴 */}
          <div className='flex flex-col space-y-3 desktop:space-y-0 desktop:flex-row desktop:items-center desktop:space-x-8'>
            <Link to='/' className='text-gray-500 hover:text-gray-600 transition-colors duration-200 desktop:text-sm desktop:font-medium'>디미징 연락처</Link>
            <Link to='/' className='text-gray-500 hover:text-gray-600 transition-colors duration-200 desktop:text-sm desktop:font-medium'>디미징 출석부</Link>
            <Link to='/' className='text-gray-500 hover:text-gray-600 transition-colors duration-200 desktop:text-sm desktop:font-medium'>지원서</Link>
            <Dropdown mainTitle='자료실'>
              <Link className='flex items-center justify-between px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100'>세션 악보</Link>
              <Link className='flex items-center justify-between px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100'>보컬 악보</Link>
              <Link className='flex items-center justify-between px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100'>기타</Link>
            </Dropdown>
          </div>
          {/* 데스크탑 User */}

          {/* <div className='flex flex-col space-y-4 desktop:space-y-0 desktop:flex-row desktop:items-center desktop:space-x-3'>
            <Link to='/login' className="flex items-center justify-center h-12 px-4 text-sm text-center text-gray-600 transition-colors duration-200 transform border rounded-lg desktop:h-10 desktop:font-medium hover:bg-gray-100 focus:outline-none">
              Login
            </Link>
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header