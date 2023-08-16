import React, { useState, useEffect } from 'react';

import { BiChevronDown } from 'react-icons/bi';

const MenuDropdown = props => {
  const [dropdownShow, setDropdownShow] = useState(false);

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
      <article className='overflow-hidden'>
        {showAnimation &&
          <div className={`absolute left-0 z-40 mt-2 mb-1 bg-white border border-gray-100 rounded-lg shadow-xl shadow-gray-200/70 list-none ${dropdownShow ? 'animate-slide-fade-in-dropdown-animation' : 'animate-slide-fade-out-dropdown-animation'}`}>
            <div className='overflow-y-auto w-56 max-h-96'>
              { props.children }
            </div>
          </div>
        }
      </article>
    )
  }

  return (
    <div className='relative inline-block w-auto desktop:block'>
      <div>
        <button
          className='text-gray-500 hover:text-gray-600 transition-colors duration-200 desktop:text-sm desktop:font-medium flex items-center space-x-1 focus:outline-none'
          onClick={e => setDropdownShow(!dropdownShow)}
        >
          <span>{props.mainTitle}</span>
          <BiChevronDown className='w-5 h-5'></BiChevronDown>
        </button>
      </div>
      {dropdownShow && <div className='fixed inset-0 z-30 w-full h-full' onClick={e => setDropdownShow(!dropdownShow)}></div>}
      <Dropdown>
        {props.children}
      </Dropdown>
    </div>
  )
}

export default MenuDropdown