import React from 'react'
import Layout from '../../Layout'

function AddCampground() {
  return (
    <Layout>
        <section className='p-4'>
            <div className='w-[25rem] mb-4'>
              <span className='font-bold text-5xl'>Add New Campground</span>
            </div>
            <form onSubmit={e => console.log(e)}>
              <div className='text-2xl'>
                <label className='grid gap-2 mb-8'>Campground Name
                  <input className='text-2xl bg-gray-200 py-4 px-2' type="text" placeholder='Seven Sisters Waterfall' />
                </label>
                <label className='grid gap-2 mb-8'>Price / Night
                  <input className='text-2xl bg-gray-200 py-4 px-2' type="text" placeholder='$149' />
                </label>
                <label className='grid gap-2 mb-8'>Image
                  <input className='text-2xl bg-gray-200 py-4 px-2' type="url" placeholder='https://loremflickr.com/1280/720/1' />
                </label>
                <label className='grid gap-2 mb-8'>Description
                  <textarea className='text-2xl bg-gray-200 py-4 px-2' type="text" placeholder='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, placeat. Quia, repellendus cum vero officiis quos suscipit inventore officia et sequi consectetur amet unde aliquam quo quaerat. Amet voluptatem reiciendis illum itaque aperiam perferendis recusandae deleniti corrupti. Repellendus quam cupiditate, fugit nemo a dolore deleniti?' />
                </label>
                <button className='font-bold w-full bg-black text-white rounded-md py-6'>Add Campground</button>
              </div>
            </form>
        </section>
    </Layout>
  )
}

export default AddCampground

