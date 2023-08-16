import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setUser } from './Redux/actions/user_action';

import MainPage from './Page/MainPage/MainPage';
import Login from './Page/Authentication/Login/Login';
import Register from './Page/Authentication/Register/Register';
import MyPage from './Page/MyPage/MyPage';

function App(props) {
  const navigate = useNavigate(); // 강제 경로 이동
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) { // 로그인을 한 상태
        navigate('/d:amazing');

        // 로그인한 user 정보를 redux에 저장
        dispatch(setUser(user));
      }
      else { // 로그인을 실패한 상태 혹은 로그인을 하지 않을 상태
        navigate('/');

        // 로그아웃 시 저장된 user 정보를 redux에서 삭제
        dispatch(clearUser());
      }
    })
  }, [])

  if (isLoading) {
    return <div>...Loading</div>
  }
  else {
    return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/d:amazing' element={<MainPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/myPage' element={<MyPage />} />
      </Routes>
    );
  }
}

export default App;
