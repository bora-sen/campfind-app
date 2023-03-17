import React from 'react'
import * as Assets from '../Landing/Assets'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../Store/auth';

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  //TODO: Add register
  async function handleSubmit(e){
    e.preventDefault();
    let username = document.querySelector('#input-username').value;
    let password = document.querySelector('#input-password').value;
    //console.log("login attempt",{username,password});

    try {
      let resp = await axios.post('http://localhost:4000/api/v1/auth/login',{username,password});
      //console.log(resp.data);
      dispatch(login(resp.data))
      navigate("/camps",{replace:true})
    } catch (error) {
      console.log(error);
    }


  }
  return (
    <section className='md:flex md:w-full md:h-screen'>
    <div className='py-8'>
      <a href="/"><h1 className='font-bold md:text-4xl'>campFind</h1></a>
    </div>
  <div className='md:w-full md:flex md:flex-col md:justify-center'>
    <img className='h-[30rem] object-cover md:hidden' src={Assets.HeroImgMobile} alt='Landing Page' />
    <div className='p-8 md:w-[40rem]'>
      <h1 className='font-bold text-4xl md:text-6xl'>Explore the best camps on Earth.</h1>
      <form onSubmit={e => handleSubmit(e)} className="flex flex-col mt-12">
        <div className='grid'>
          <label>Username</label>
          <input className='bg-gray-100 p-2 rounded-md text-lg' type="text" id='input-username' />
        </div>
        <div className='grid'>
          <label>Password</label>
          <input className='bg-gray-100 p-2 rounded-md text-lg' type="password" id='input-password' />
        </div>
        <button className='bg-gray-900 text-white py-4 mt-12 rounded-md'>Login</button>
        <span className='mt-4'>Not a user yet? <Link to='/sign-up' className='font-semibold text-blue-400 underline underline-offset-3'>Create and account</Link></span>
      </form>
    </div>
  </div>
  <div className='hidden md:block'>
    <img className='h-screen w-[120rem] object-cover' src={Assets.HeroImgDesktop} alt="" />
  </div>
</section>
  )
}

export default SignIn