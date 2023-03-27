import React, { useContext } from "react";
import { authContext } from "../../Context/auth";
import { MainLayout } from "../../Layouts";
import { createCampground as firebaseAddCg } from "../../Firebase/controller";
import { useNavigate } from "react-router-dom";

function AddCampground() {
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("handled Submit");

    let title = document.getElementById("campground_title_input").value;
    let desc = document.getElementById("campground_desc_input").value;
    let placeholderImg = document.getElementById("campground_url_input").value;
    let price = document.getElementById("campground_price_input").value;

    const newCampgroundReq = {
      title,
      desc,
      placeholderImg,
      price,
    };

    await firebaseAddCg(user, newCampgroundReq);
    navigate("/camps", { replace: true });
  }
  return (
    <MainLayout>
      <section className="p-4 sm:w-[45rem] sm:block sm:mx-auto">
        <div className="w-[25rem] mb-4">
          <span className="font-bold text-5xl">Add New Campground</span>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="text-2xl">
            <label className="grid gap-2 mb-8">
              Campground Name
              <input
                id="campground_title_input"
                className="text-2xl bg-gray-200 py-4 px-2"
                type="text"
                placeholder="Seven Sisters Waterfall"
              />
            </label>
            <label className="grid gap-2 mb-8">
              Price / Night
              <input
                id="campground_price_input"
                className="text-2xl bg-gray-200 py-4 px-2"
                type="text"
                placeholder="$149"
              />
            </label>
            <label className="grid gap-2 mb-8">
              Image
              <input
                id="campground_url_input"
                className="text-2xl bg-gray-200 py-4 px-2"
                type="url"
                placeholder="https://loremflickr.com/1280/720/1"
              />
            </label>
            <label className="grid gap-2 mb-8">
              Description
              <textarea
                id="campground_desc_input"
                className="text-2xl bg-gray-200 py-4 px-2 h-[24rem] sm:h-[18rem]"
                type="text"
                placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, placeat. Quia, repellendus cum vero officiis quos suscipit inventore officia et sequi consectetur amet unde aliquam quo quaerat. Amet voluptatem reiciendis illum itaque aperiam perferendis recusandae deleniti corrupti. Repellendus quam cupiditate, fugit nemo a dolore deleniti?"
              />
            </label>
            <button className="font-bold w-full bg-black text-white rounded-md py-6">
              Add Campground
            </button>
          </div>
        </form>
      </section>
    </MainLayout>
  );
}

export default AddCampground;
