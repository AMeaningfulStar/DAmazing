import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Bottom from './Bottom/Bottom';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <Main>
        { children }
      </Main>
      <Bottom />
    </div>
  )
}

export default Layout