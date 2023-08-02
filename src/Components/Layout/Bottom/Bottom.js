import React from 'react';
import { Link } from 'react-router-dom';

import DonganLogo from '../../../Images/DonganLogo.png';

import { FcMusic } from 'react-icons/fc';

const Bottom = () => {
  return (
    <div className='bg-gray-100'>
      <div className='container flex flex-col items-center px-4 py-6 mx-auto space-y-6 desktop:space-y-0 desktop:flex-row desktop:justify-between'>
        <Link to='/' className='inline-block w-48 text-gray-700'>
          <div className='flex items-center'>
            <FcMusic className='flex-shrink-0 h-5 -mt-1 text-xl'></FcMusic>
            <p className='ml-2 text-lg'>D:<strong>Amazing</strong></p>
          </div>
        </Link>

        <p className='text-sm text-center text-gray-500'>
          © 2023
          <Link to='/' className='hover:underline'> D:Amazing </Link>
          찬양팀은 동안교회 청소년 2부 소속 찬양팀입니다
        </p>

        <Link to='http://www.dongan.org/indexpc.asp' className='flex items-center'>
          <img alt='DonganLogo' src={DonganLogo} className='h-7 w-auto'/>
        </Link>
      </div>
    </div>
  )
}

export default Bottom