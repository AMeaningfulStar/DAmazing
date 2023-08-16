import React from 'react'

const Main = ({ children }) => {
  return (
    <main className='flex-1 desktop:mt-20'>
      {children }
    </main>
  )
}

export default Main