import React from 'react'
import { NavLink } from 'react-router-dom'
import * as Assets from '../../Pages/Landing/Assets'

function Footer() {
  return (
    <nav className='flex flex-col justify-between p-8'>
      <div className='flex items-center'>
      <NavLink replace to="/"><h1 className='font-bold md:text-4xl'>campFind</h1></NavLink>
      </div>
      <div className='text-center text-xs'>
        <span>Copyright 2023 | campFind Made By. <a className='font-semibold' href="https://bborasen.com">Bora</a></span>
      </div>
    </nav>
  )
}

export default Footer