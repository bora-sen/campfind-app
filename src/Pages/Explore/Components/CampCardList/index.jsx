import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import CampCard from '../CampCard';

export default function CampCardList() {
  const [camps,setCamps] = useState([])

  async function getCamps(){
    try{
      const req = await axios.get('http://localhost:4000/api/v1/campgrounds');
      const res = await req;
      const Camps = res.data;
      //console.log(Camps);
      setCamps(Camps)
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getCamps()
    console.log(camps);
  },[])

  return (
    <div className='flex gap-4 flex-wrap p-4'>
      {
        camps.map((camp,index) => {
          return <CampCard key={index} camp_object={camp} />
        })
      }
    </div>
  )
}
