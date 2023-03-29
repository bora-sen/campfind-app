import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCampgroundById } from "../../Firebase/controller"
import { MainLayout } from "../../Layouts"
import Comments from "./Comments"

function Campground() {
  const { id } = useParams()
  const [sel_post, setSelectedPost] = useState(false)

  useEffect(() => {
    async function getCamp() {
      let selected = await getCampgroundById(id.toString())
      setSelectedPost(selected)
    }
    getCamp()
  }, [])

  if (sel_post === false) {
    return <div>Loading..</div>
  }

  return (
    <MainLayout>
      <div className="p-4">
        <img className="w-full" src={sel_post.placeholderImg} alt="" />
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl my-4">{sel_post.title}</h1>
          <h3 className="font-semibold text-xl mr-4">{`$${sel_post.price}/night`}</h3>
        </div>
        <span className="leading-7">{sel_post.desc}</span>
        {sel_post.comments && <Comments campground={sel_post} />}
      </div>
    </MainLayout>
  )
}

export default Campground
