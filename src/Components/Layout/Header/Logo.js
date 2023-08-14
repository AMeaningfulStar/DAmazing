import React from 'react';
import { Link } from 'react-router-dom';

import { FcMusic } from 'react-icons/fc';
import { PiListBold } from 'react-icons/pi';

const Logo = () => {
  return (
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
  )
}

export default Logo