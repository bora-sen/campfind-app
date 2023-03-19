import React, { useContext } from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import { authContext } from '../Context/auth'
import * as Pages from '../Pages'
import UserSpesificPage from './UserSpesificPage'


function MainRouter() {
  const {user} = useContext(authContext);
  return (
    <Routes>
        <Route path='/' element={
          <UserSpesificPage user={user} isAuthEl={<Navigate to="/camps" />} isNotAuthEl={<Pages.Landing />} />
        } />

        <Route path='/sign-in' element={<Pages.SignIn />} />
        <Route path='/sign-up' element={<Pages.SignUp />} />
        <Route path='/camps' element={<Pages.Explore />} />
        <Route path='/camp/:id' element={<Pages.Campground />} />
        <Route path='/create/campground' element={<Pages.AddCampground />} />
    </Routes>
  )
}

export default MainRouter