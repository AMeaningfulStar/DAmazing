import React from 'react';
import { Link } from 'react-router-dom';

import { FcMusic } from 'react-icons/fc';
import { FiUser } from 'react-icons/fi';
import { HiOutlineLockClosed } from 'react-icons/hi';

const Login = () => {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <header className='pb-7 box-border block'>
        <div className='relative flex m-auto box-border text-center'>
          <FcMusic className='flex-shrink-0 mt-1 text-3xl'></FcMusic>
          <p className='ml-2 text-3xl'>D:<strong>Amazing</strong></p>
        </div>
      </header>
      <div className='pb-5'>
        <from className='flex flex-col border border-gray-300 w-96 h-56 items-center pt-5 rounded-md'>
          <div className='w-80 h-12 border border-gray-300 rounded-t px-4 pt-3 pb-3 flex flex-row text-gray-400'>
            <FiUser className='text-lg mt-px' />
            <input placeholder='아이디' className='ml-1 w-full'/>
          </div>
          <div className='w-80 h-12 border -mt-px border-gray-300 rounded-b shadow-sm px-4 pt-3 pb-3 flex flex-row text-gray-400'>
            <HiOutlineLockClosed  className='text-lg mt-px'/>
            <input placeholder='비밀번호' className='ml-1 w-full'/>
          </div>
          <div>
            <button
              type='submit'
              className='w-80 h-12 bg-red-300 rounded border border-gray-300 mt-8'
            >
              <p className='text-white font-black text-lg'>로그인</p>
            </button>
          </div>
        </from>
      </div>
      <div className='text-sm text-gray-500'>
        <Link className='hover:font-semibold'> 비밀번호 찾기 </Link>
        |
        <Link className='hover:font-semibold'> 아이디 찾기 </Link>
        |
        <Link to='/register' className='hover:font-semibold'> 회원 가입 </Link>
      </div>
    </div>
  )
}

export default Login