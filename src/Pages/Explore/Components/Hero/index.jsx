import React from 'react'
import { NavLink } from 'react-router-dom'

function Hero() {
  return (
    <section className='flex flex-col mx-4 md:mx-0 md:w-full bg-primary-accent-pale bg-opacity-20 sm:h-[26rem] sm:justify-center sm:items-start mb-12 p-4 md:p-12'>
        <div className='text-start grid gap-4 sm:w-[30rem]'>
            <span className='font-bold text-5xl sm:text-6xl'>
                Welcome to campFind!
            </span>
            <span className='text-xl'>
                View our hand-picked campgrounds from all over the world, or add your own.
            </span>
            <div className='flex flex-col md:flex-row gap-2'>
                <input className='w-full p-4 rounded-md border-gray-300 border-2 placeholder:text-lg' type="text" placeholder='Search for camps' />
                <button className='bg-primary-accent-darker transition-colors hover:bg-primary-accent font-bold text-white text-xl py-4 md:px-4 rounded-md'>Search</button>
            </div>
            <NavLink className="underline" replace to="/add/campground">Or add your own campground</NavLink>
        </div>

    </section>
  )
}

export default Hero