import React from 'react'
import { Routes,Route } from 'react-router-dom'
import * as Pages from '../Pages'


function MainRouter() {
  return (
    <Routes>
        <Route path='/' element={<Pages.Landing />} />
        <Route path='/sign-in' element={<Pages.SignIn />} />
        <Route path='/sign-up' element={<Pages.SignUp />} />
        <Route path='/camps' element={<Pages.Explore />} />
        <Route path='/camp/:id' element={<Pages.Campground />} />
    </Routes>
  )
}

export default MainRouter