import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
function Header() {
  const {user} = useSelector(store => store.auth)

  return (
    <nav className='flex justify-between p-8'>
      <div className='flex items-center'>
        <NavLink replace to="/"><h1 className='font-bold md:text-4xl'>campFind</h1></NavLink>
        <span className='hidden font-bold text-gray-400'>Home</span>
      </div>
      <div className='md:hidden'>
        <button className='bg-gray-100 p-2 rounded-md'>
        <svg width={25} height={25} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></svg>
        </button>
      </div>
      <div className='hidden md:flex md:items-center md:gap-8'>
        {
          !user ? <>
            <NavLink replace to='/sign-in' className='font-bold text-gray-400'>Login</NavLink>
            <NavLink replace to="/sign-up" className='font-bold text-white bg-gray-900 p-4'>Create an account</NavLink>
          </>
          :
          <>
            <span>{user.name}</span>
            <button onClick={e => console.log(e)}>Sign Out</button>
          </>
        }


      </div>
    </nav>
  )
}

export default Header