import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import md5 from 'md5';

import { getDatabase, ref, set } from 'firebase/database';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { FcMusic } from 'react-icons/fc';
import { FiUser } from 'react-icons/fi';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { BsCalendarHeart } from 'react-icons/bs';


const Register = () => {
  const { register, watch, formState: { errors }, handleSubmit, setValue } = useForm();
  const [ errorFormSubmit, setErrorFormSubmit ] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [gender, setGender] = useState('');
  const [identity, setIdentity] = useState('');

  const password = useRef();
  password.current = watch('password');

  const onSubmit = async (userInfo) => {
    try {
      setLoading(true);

      let createdUser = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);

      await updateProfile(auth.currentUser, {
        displayName: userInfo.name,
        photoURL: `http://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`
      })

      const db = getDatabase();

      set(ref(db, `users/${ createdUser.user.uid }`), {
        name: userInfo.name,
        birthday: userInfo.birthday,
        gender: userInfo.gender,
        identity : userInfo.identity,
        phoneNum: userInfo.phoneNum
      })

      setLoading(false);
      navigate('/');
    }
    catch (error) {
      setLoading(false);
      // 회원가입 에러 발생 시 에러 문구 출력
      setErrorFormSubmit(error.message);

      // 에러 문구 노출 시간
      setTimeout(() => {
        setErrorFormSubmit("")
      }, 5000);
    }
  }

  return (
    <div className='flex flex-col min-h-screen items-center justify-center'>
      <header className='pb-7 box-border block'>
        <div className='relative flex m-auto box-border text-center'>
          <FcMusic className='flex-shrink-0 mt-1 text-xl' />
          <p className='ml-2 text-xl'>D:<strong>Amazing</strong></p>
        </div>
      </header>
      <div className='pb-5'>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col pb-5'>
            {/* 아이디 */}
            <div className='w-96 h-12 border border-gray-300 rounded-t px-4 py-3 flex flex-row text-gray-400'>
              <FiUser className='text-lg mt-px' />
              <input
                type='email'
                name='email'
                placeholder='아이디'
                className='ml-2 w-full'
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              />
            </div>
            {/* 비밀번호 */}
            <div className='w-96 h-12 border -mt-px border-gray-300 shadow-sm px-4 py-3 flex flex-row text-gray-400'>
              <HiOutlineLockClosed className='text-lg mt-px' />
              <input
                type='password'
                name='password'
                placeholder='비밀번호(10자 이상)'
                className='ml-2 w-full'
                {...register('password', { required: true, minLength: 10 })}
              />
            </div>
            {/* 비밀번호 확인 */}
            <div className='w-96 h-12 border -mt-px border-gray-300 rounded-b shadow-sm px-4 py-3 flex flex-row text-gray-400'>
              <HiOutlineLockClosed className='text-lg mt-px' />
              <input
                type='password'
                name='password_confirm'
                placeholder='비밀번호 확인'
                className='ml-2 w-full'
                {...register('password_confirm', {
                  required: true,
                  validate: (value) => value === password.current
                })}
              />
            </div>
          </div>
          <div className='flex flex-col'>
            {/* 이름 */}
            <div className='w-96 h-12 border border-gray-300 rounded-t px-4 py-3 flex flex-row text-gray-400'>
              <FiUser className='text-lg mt-px' />
              <input
                name='name'
                placeholder='이름'
                className='ml-2 w-full'
                {...register('name', { required: true, minLength: 2, maxLength: 6 })}
              />
            </div>
            {/* 생년월일 */}
            <div className='w-96 h-12 border -mt-px border-gray-300 px-4 py-3 flex flex-row text-gray-400'>
              <BsCalendarHeart className='text-lg mt-px' />
              <input
                type='date'
                name='birthday'
                placeholder='생년월일 8자리'
                className='ml-2 w-full'
                {...register('birthday', { required: true })}
              />
            </div>
            {/* 남자/여자 and 교사/학생 */}
            <div className='w-96 h-12 border -mt-px border-gray-300 py-2 flex flex-row text-gray-400'>
              <div className='flex flex-row w-1/2 px-1.5'>
                <label
                  htmlFor='male'
                  className={`w-1/2 h-full border rounded-l hover:bg-slate-100 text-center pt-px ${ gender === '남자' ? 'text-red-400 font-medium' : ''}`}
                  onClick={e => setGender('남자')}
                >
                  <input type='radio' id='male' className='hidden' value='남자' {...register('gender', { required: true })}/>
                  남자
                </label>
                <label
                  htmlFor='female'
                  className={`w-1/2 h-full border rounded-r -ml-px hover:bg-slate-100 text-center pt-px ${ gender === '여자' ? 'text-red-400 font-medium' : ''}`}
                  onClick={e => setGender('여자')}
                >
                  <input type='radio' id='female' className='hidden' value='여자' {...register('gender')}/>
                  여자
                </label>
              </div>
              <div className='flex flex-row w-1/2 px-1.5'>
              <label
                  htmlFor='teacher'
                  className={`w-1/2 h-full border rounded-l hover:bg-slate-100 text-center pt-px ${ identity === '교사' ? 'text-red-400 font-medium' : ''}`}
                  onClick={e => setIdentity('교사')}
                >
                  <input type='radio' id='teacher' className='hidden' value='교사' {...register('identity', { required: true })}/>
                  교사
                </label>
                <label
                  htmlFor='student'
                  className={`w-1/2 h-full border rounded-r -ml-px hover:bg-slate-100 text-center pt-px ${ identity === '학생' ? 'text-red-400 font-medium' : ''}`}
                  onClick={e => setIdentity('학생')}
                >
                  <input type='radio' id='student' className='hidden' value='학생' {...register('identity')}/>
                  학생
                </label>
              </div>
            </div>
            {/* 전화번호 */}
            <div className='w-96 h-12 border -mt-px border-gray-300 rounded-b shadow-sm px-4 py-3 flex flex-row text-gray-400'>
              <HiMiniDevicePhoneMobile className='text-lg mt-px' />
              <input
                name='phoneNum'
                placeholder='휴대전화번호(- 포함)'
                className='ml-2 w-full'
                {...register('phoneNum', { required: true })}
              />
            </div>
          </div>
          {/* 에러 문구 */}
          <div className='w-80 text-xs text-red-600'>
            {/* 전체 */}
            {errorFormSubmit && <p>{errorFormSubmit}</p>}
            {/* 아이디 */}
            {errors.email && errors.email.type === 'required' && <p><strong>아이디(이메일)</strong>를 입력해주세요</p>}
            {errors.email && errors.email.type === 'pattern' && <p><strong>이메일 형식</strong>으로 입력해주세요</p>}
            {/* 비밀번호 */}
            {!errors.email && errors.password && errors.password.type === 'required' && <p><strong>비밀번호</strong>를 입력해주세요</p>}
            {!errors.email && errors.password && errors.password.type === 'minLength' && <p><strong>비밀번호</strong>를 <strong>10자 이상</strong> 입력해주세요</p>}
            {/* 비밀번호 확인 */}
            {!errors.email && !errors.password && errors.password_confirm && errors.password_confirm.type === 'required' && <p><strong>비밀번호 확인</strong>을 입력해주세요</p>}
            {!errors.email && !errors.password && errors.password_confirm && errors.password_confirm.type === 'validate' && <p>입력하신 <strong>비밀번호</strong>가 다릅니다</p>}
            {/* 이름 */}
            {!errors.email && !errors.password && !errors.password_confirm && errors.name && errors.name.type === 'required' && <p><strong>이름</strong>을 입력해주세요</p>}
            {!errors.email && !errors.password && !errors.password_confirm && errors.name && errors.name.type === 'minLength' && <p>정확한 <strong>이름</strong>을 입력해주세요</p>}
            {!errors.email && !errors.password && !errors.password_confirm && errors.name && errors.name.type === 'maxLength' && <p>정확한 <strong>이름</strong>을 입력해주세요</p>}
            {/* 생년월일 */}
            {!errors.email && !errors.password && !errors.password_confirm && !errors.name && errors.birthday && errors.birthday.type === 'required' && <p><strong>생년월일</strong>을 입력해주세요</p>}
            {/* 성별 */}
            {!errors.email && !errors.password && !errors.password_confirm && !errors.name && !errors.birthday && errors.gender && <p><strong>성별</strong>을 선택해주세요</p>}
            {/* 직업 */}
            {!errors.email && !errors.password && !errors.password_confirm && !errors.name && !errors.birthday && !errors.gender && errors.identity && <p><strong>직업</strong>을 선택해주세요</p>}
            {/* 전화번호 */}
            {!errors.email && !errors.password && !errors.password_confirm && !errors.name && !errors.birthday && !errors.gender && !errors.identity && errors.phoneNum && <p><strong>전화번호</strong>를 입력해주세요</p>}
          </div>
          <div>
            <button
              type='submit'
              value={'submit'}
              disabled={loading}
              className='w-96 h-12 bg-red-300 rounded border border-gray-300 mt-8'
            >
              <p className='text-white font-black text-lg'>회원가입</p>
            </button>
          </div>
        </form>
      </div>
      <div className='text-sm text-gray-500'>
        이미 가입을 했다면 <Link to='/' className='text-base font-bold hover:text-red-400'>로그인 하러가기</Link>
      </div>
    </div>
  )
}

export default Register