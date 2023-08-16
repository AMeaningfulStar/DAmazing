import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useSelector, useDispatch } from 'react-redux';
import { setPhotoURL } from '../../Redux/actions/user_action';

import { auth, storage } from '../../firebase';
import { updateProfile } from 'firebase/auth';
import { uploadBytesResumable, ref as strRef, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref, update, onValue } from 'firebase/database';

import Layout from '../../Components/Layout/Layout';

import { FiUser } from 'react-icons/fi';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { BsCalendarHeart } from 'react-icons/bs';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const { register, watch, formState: { errors }, handleSubmit, setValue } = useForm();
  const [errorFormSubmit, setErrorFormSubmit] = useState('');
  const user = useSelector((state) => state.user.currentUser);
  const inputOpenImageRef = useRef();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const password = useRef();
  password.current = watch('password');

  useEffect(() => {
    onValue(ref(getDatabase(), `users/${user.uid}`), (snapshot) => {
      setUserInfo(snapshot.val())
    })
  }, [])

  // 프로필 변경 클릭 이벤트 Ref 클릭
  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  }

  // 프로필 이미지 업로드 이벤트 함수
  const handleUploadImage = async (event) => {
    const file = event.target.files[0];
    const user = auth.currentUser;

    const metadata = { contentType: file.type };

    try {
      // Firebase Storage에 저장
      // user_image폴더 안에 user.uid의 이름으로 업로드할 파일(file)을 지정한 타입(metadata)으로 저장한다. 
      let uploadTask = await uploadBytesResumable(strRef(storage, `user_image/${user.uid}`), file, metadata);

      await getDownloadURL(uploadTask.ref).then((downloadURL) => {
        updateProfile(user, {
          photoURL: downloadURL
        });

        dispatch(setPhotoURL(downloadURL));

        update(ref(getDatabase(), `user/${user.uid}`), { image: downloadURL })
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <section className='h-48 tablet:h-72 desktop:h-80 bg-gradient-to-r from-red-200 to-red-300' />
      <section className='container px-4 py-10 mx-auto -mt-28'>
        <div className='flex flex-col items-center'>
          <div className='object-cover overflow-hidden w-32 h-32 bg-white border-4 border-white rounded-lg'>
            <img
              alt='UserPhoto'
              src={user && user.photoURL}
              className='w-32'
              onClick={handleOpenImageRef}
            />
          </div>
          <form
            className='flex flex-col mt-4'
            onSubmit={handleSubmit()}
          >
            <div className='flex flex-col pb-5'>
              {/* 아이디 */}
              <div className='w-72 h-12 border border-gray-300 rounded-t-lg px-4 py-3 flex flex-row'>
                <FiUser className='text-lg mt-1' />
                <span className='ml-2 w-full'>{user.email}</span>
              </div>
              {/* 비밀번호 */}
              <div className='w-72 h-12 border -mt-px border-gray-300 shadow-sm px-4 py-3 flex flex-row text-gray-400'>
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
              <div className='w-72 h-12 border -mt-px border-gray-300 rounded-b-lg shadow-sm px-4 py-3 flex flex-row text-gray-400'>
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
              <div className='w-72 h-12 border border-gray-300 rounded-t-lg px-4 py-3 flex flex-row'>
                <FiUser className='text-lg mt-px' />
                <span className='ml-2 w-full'>{userInfo.name}</span>
              </div>
              {/* 생년월일 */}
              <div className='w-72 h-12 border -mt-px border-gray-300 px-4 py-3 flex flex-row'>
                <BsCalendarHeart className='text-lg mt-px' />
                <span className='ml-2 w-full'>{userInfo.birthday}</span>
              </div>
              <div className='w-72 h-12 border -mt-px border-gray-300 rounded-b-lg shadow-sm px-4 py-3 flex flex-row text-gray-400'>
                <HiMiniDevicePhoneMobile className='text-lg mt-px' />
                <input
                  name='phoneNum'
                  placeholder={userInfo.phoneNum}
                  className='ml-2 w-full'
                  {...register('phoneNum', { required: true })}
                />
              </div>
            </div>
            <div className='w-72 text-xs text-red-600'>
              {/* 전체 */}
              {errorFormSubmit && <p>{errorFormSubmit}</p>}
              {/* 비밀번호 */}
              {!errors.email && errors.password && errors.password.type === 'required' && <p><strong>비밀번호</strong>를 입력해주세요</p>}
              {!errors.email && errors.password && errors.password.type === 'minLength' && <p><strong>비밀번호</strong>를 <strong>10자 이상</strong> 입력해주세요</p>}
              {/* 비밀번호 확인 */}
              {!errors.email && !errors.password && errors.password_confirm && errors.password_confirm.type === 'required' && <p><strong>비밀번호 확인</strong>을 입력해주세요</p>}
              {!errors.email && !errors.password && errors.password_confirm && errors.password_confirm.type === 'validate' && <p>입력하신 <strong>비밀번호</strong>가 다릅니다</p>}
            </div>
            <div className='flex flex-row justify-between gap-1'>
              <div
                onClick={e => navigate(-1)}
                className='flex flex-col items-center justify-center w-1/4 h-12 bg-gray-300 rounded border mt-8 hover:bg-gray-400 cursor-pointer'
              >
                  <p className='text-white font-black text-lg'>취소</p>
              </div>
              <button
                type='submit'
                value={'submit'}
                disabled={loading}
                className='w-3/4 h-12 bg-red-300 rounded border mt-8 hover:bg-red-400'
              >
                <p className='text-white font-black text-lg'>변경</p>
              </button>
            </div>
          </form>
        </div>
      </section>
      <input
        onChange={handleUploadImage}
        accept="image/jpeg,, image/png"
        className='hidden'
        ref={inputOpenImageRef}
        type='file'
      />
    </Layout>
  )
}

export default MyPage