import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { FcMusic } from 'react-icons/fc';
import { FiUser } from 'react-icons/fi';
import { HiOutlineLockClosed } from 'react-icons/hi';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [ errorFormSubmit, setErrorFormSubmit ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const onSubmit = async(userInfo) => {
    try{
      setLoading(true);

      // Firebase Login
      await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password);
    }
    catch (error) {
      // 로그인 시 에러 발생 문구 출력
      setErrorFormSubmit(error.message);

      // 에러 문구 노출 시간
      setTimeout(() => {
        setErrorFormSubmit('');
      }, 5000);
    }
  }

  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <header className='pb-7 box-border block'>
        <div className='relative flex m-auto box-border text-center'>
          <FcMusic className='flex-shrink-0 mt-1 text-3xl'></FcMusic>
          <p className='ml-2 text-3xl'>D:<strong>Amazing</strong></p>
        </div>
      </header>
      <div className='pb-5'>
        <form
          className='flex flex-col border border-gray-300 w-96 h-auto items-center pt-5 rounded-md'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='w-80 h-12 border border-gray-300 rounded-t px-4 pt-3 pb-3 flex flex-row text-gray-400'>
            <FiUser className='text-lg mt-px' />
            <input
              placeholder='아이디'
              className='ml-1 w-full'
              name='email'
              type='email'
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}  
            />
          </div>
          <div className='w-80 h-12 border -mt-px border-gray-300 rounded-b shadow-sm px-4 pt-3 pb-3 flex flex-row text-gray-400 mb-3'>
            <HiOutlineLockClosed  className='text-lg mt-px'/>
            <input
              placeholder='비밀번호'
              className='ml-1 w-full'
              name='password'
              type='password'
              {...register('password', { required: true, minLength: 10 })}
            />
          </div>
          <div className='w-80 text-xs text-red-600'>
            { errorFormSubmit && <p>{ errorFormSubmit }</p> }
            { errors.email && <p><strong>아이디(이메일)</strong>를 입력해주세요</p> }
            { !errors.email && errors.password && <p><strong>비밀번호</strong>를 입력해주세요</p>}
          </div>
          <div>
            <button
              type='submit'
              disabled={loading}
              value={'login'}
              className='w-80 h-12 bg-red-300 rounded border border-gray-300 mt-3 mb-5'
            >
              <p className='text-white font-black text-lg'>로그인</p>
            </button>
          </div>
        </form>
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