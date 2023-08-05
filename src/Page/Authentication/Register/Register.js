import React from 'react';
import { Link } from 'react-router-dom';

import { FcMusic } from 'react-icons/fc';
import { FiUser } from 'react-icons/fi';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { BsCalendarHeart } from 'react-icons/bs';


const Register = () => {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <header className='pb-7 box-border block'>
        <div className='relative flex m-auto box-border text-center'>
          <FcMusic className='flex-shrink-0 mt-1 text-xl'/>
          <p className='ml-2 text-xl'>D:<strong>Amazing</strong></p>
        </div>
      </header>
      <div className='pb-5'>
        <from className='flex flex-col'>
          <div className='flex flex-col pb-5'>
            <div className='w-96 h-12 border border-gray-300 rounded-t px-4 py-3 flex flex-row text-gray-400'>
              <FiUser className='text-lg mt-px' />
              <input placeholder='아이디' className='ml-2 w-full'/>
            </div>
            <div className='w-96 h-12 border -mt-px border-gray-300 rounded-b shadow-sm px-4 py-3 flex flex-row text-gray-400'>
              <HiOutlineLockClosed  className='text-lg mt-px'/>
              <input placeholder='비밀번호' className='ml-2 w-full'/>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='w-96 h-12 border border-gray-300 rounded-t px-4 py-3 flex flex-row text-gray-400'>
              <FiUser className='text-lg mt-px' />
              <input placeholder='이름' className='ml-2 w-full'/>
            </div>
            <div className='w-96 h-12 border -mt-px border-gray-300 px-4 py-3 flex flex-row text-gray-400'>
              <BsCalendarHeart  className='text-lg mt-px'/>
              <input placeholder='생년월일 8자리' className='ml-2 w-full'/>
            </div>
            <div className='w-96 h-12 border -mt-px border-gray-300 py-2 flex flex-row text-gray-400'>
              <div className='w-1/2 px-1.5'>
                <input type='button' className='w-1/2 h-full border rounded-l hover:bg-slate-100 cursor-pointer' value='남자'/>
                <input type='button' className='w-1/2 h-full border rounded-r -ml-px hover:bg-slate-100 cursor-pointer' value='여자' />
              </div>
              <div className='w-1/2 px-1.5'>
                <input type='button' className='w-1/2 h-full border rounded-l hover:bg-slate-100 cursor-pointer' value='교사'/>
                <input type='button' className='w-1/2 h-full border rounded-r -ml-px hover:bg-slate-100 cursor-pointer' value='학생' />
              </div>
            </div>
            <div className='w-96 h-12 border -mt-px border-gray-300 rounded-b shadow-sm px-4 py-3 flex flex-row text-gray-400'>
              <HiMiniDevicePhoneMobile  className='text-lg mt-px'/>
              <input placeholder='휴대전화번호(- 포함)' className='ml-2 w-full'/>
            </div>
          </div>
          <div>
            <button
              type='submit'
              className='w-96 h-12 bg-red-300 rounded border border-gray-300 mt-8'
            >
              <p className='text-white font-black text-lg'>회원가입</p>
            </button>
          </div>
        </from>
      </div>
      <div className='text-sm text-gray-500'>
        이미 가입을 했다면 <Link to='/login' className='text-base font-bold hover:text-red-400'>로그인 하러가기</Link>
      </div>
    </div>
  )
}

export default Register