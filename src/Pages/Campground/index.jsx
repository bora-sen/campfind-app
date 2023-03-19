import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCampgroundById } from '../../Firebase/controller';
import Layout from '../../Layout'
import Comments from './Comments';

function Campground() {
  const {id} = useParams();
  const [sel_post,setSelectedPost] = useState(false);

  useEffect(() => {
    async function getCamp(){
      setSelectedPost(await getCampgroundById(id.toString()));
    }
    getCamp();
    console.log(sel_post);
  },[id])



  if(sel_post === false) {return <div>Loading..</div>}

  return (
    <Layout>
      <div className='p-4'>
        <img className='w-full' src={sel_post.placeholderImg} alt="" />
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-4xl my-4'>{sel_post.title}</h1>
          <h3 className='font-semibold text-xl mr-4'>{`$${sel_post.price}/night`}</h3>
        </div>
        <span className='leading-7'>{sel_post.disc}</span>
        <Comments comments={sel_post.comments} />
      </div>
    </Layout>
  )
}

export default Campground