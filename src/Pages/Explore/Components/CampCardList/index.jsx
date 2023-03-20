import React, { useState } from 'react'
import { useEffect } from 'react';
import CampCard from '../CampCard';
import { getAllCampgrounds } from '../../../../Firebase/controller';

export default function CampCardList() {
  const [camps,setCamps] = useState([])

  async function getCamps(){
    try{
      const Camps = await getAllCampgrounds();
      setCamps(Camps)
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    getCamps()
  },[])

  return (
    <div className='flex gap-4 flex-wrap p-4 my-12'>
      {
        camps.map((camp,index) => {
          return <CampCard key={index} camp_object={camp} />
        })
      }
    </div>
  )
}
