import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';

import { SlLogout } from 'react-icons/sl';
import { FiUser } from 'react-icons/fi';

const UserDropdown = () => {
  const [dropdownShow, setDropdownShow] = useState(false);
  const user = useSelector((state) => state.user.currentUser);

  const Dropdown = props => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [repeat, setReapeat] = useState(null);

    useEffect(() => {
      if (dropdownShow) {
        clearTimeout(repeat);
        setReapeat(null);
        setShowAnimation(true);
      }
      else {
        setReapeat(setTimeout(() => {
          setShowAnimation(false);
        }, 400));
      }
    }, [dropdownShow])

    return (
      <div className='overflow-hidden'>
        {showAnimation &&
          <div className={`absolute right-0 z-40 mt-2 mb-1 bg-white border border-gray-100 rounded-lg shadow-xl shadow-gray-200/70 list-none ${dropdownShow ? 'animate-slide-fade-in-dropdown-animation' : 'animate-slide-fade-out-dropdown-animation'}`}>
            <div className='overflow-y-auto w-40 max-h-96'>
              { props.children }
            </div>
          </div>
        }
      </div>
    )
  }

  const handleLogout = () => {
    signOut(auth).then(() => {

    }).catch((error) => {

    })
  }

  return (
    <div className='relative inline-block w-auto desktop:block'>
      <div className='flex flex-col justify-center'>
        <button
          onClick={e => setDropdownShow(!dropdownShow)}
        >
          <img
            alt='UserPhoto'
            src={user && user.photoURL }
            className='object-cover w-8 h-8 rounded-full shrink-0 border border-gray-300 desktop:w-9 desktop:h-9'
          />
        </button>
      </div>
      {dropdownShow && <div className='fixed inset-0 z-30 w-full h-full' onClick={e => setDropdownShow(!dropdownShow)}></div>}
      <Dropdown>
        <Link
          to='/myPage'
          className='flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100'
          onClick={e => setDropdownShow(!dropdownShow)}
        >
          <FiUser className='w-3.5 h-3.5'/>
          프로필
        </Link>
        <button
          className='flex w-full gap-3 items-center px-4 py-3 space-x-3 text-sm text-gray-600 hover:bg-gray-100'
          onClick={handleLogout}
        >
          <SlLogout className='w-3.5 h-3.5'/>
          로그아웃
        </button>
      </Dropdown>
    </div>
  )
}

export default UserDropdown