import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import logoweb from './assets/MiZtbg.png'
import { Home, CreatePost } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex
    justify-between items-center bg-[#b8b8fc]
    sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
          <img src={logoweb} alt='logo'
            className='w-40 object-contain' />
        </Link>

        <Link to='/create-post'
          className='font-inter font-medium
      bg-[#6469ff] text-white px-4 py-2
      rounded-md'>Create Image</Link>
      </header>
      <main className='sm: p-8 px-4 py-8 w-full bg-[#e1e1e2] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>

      </main>
    </BrowserRouter>
  )
}

export default App  