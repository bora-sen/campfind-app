import React from "react";
import * as Assets from "../../Assets";
import { NavLink } from "react-router-dom";
import { LandingLayout } from "../../Layouts";

function Landing() {
  return (
    <LandingLayout imageObj={Assets.HeroImgDesktop}>
      <div className="p-8 md:w-[40rem]">
        <h1 className="font-bold text-4xl md:text-6xl">
          Explore the best camps on Earth.
        </h1>
        <h2 className="leading-9 text-2xl text-gray-400 my-4">
          YelpCamp is a created list of the best camping spots on earth.
          Unfiltired and unbaised reviews.
        </h2>
        <ul className="mb-12">
          <li className="flex gap-2 my-4 text-xl">
            <img src={Assets.Checkmark} alt="" />
            Add your own camp suggestions.
          </li>
          <li className="flex gap-2 my-4 text-xl">
            <img src={Assets.Checkmark} alt="" />
            Leave review and experiences.
          </li>
          <li className="flex gap-2 my-4 text-xl">
            <img src={Assets.Checkmark} alt="" />
            Save locations for all camps.
          </li>
        </ul>
        <NavLink
          replace
          to="/camps"
          className="text-white bg-gray-900 p-6 rounded-md mt-8"
        >
          View Campgrounds
        </NavLink>
        <div className="mt-8">
          <span>Partnered With:</span>
          <ul className="flex p-2 justify-around">
            <li>
              <img src={Assets.AirbnbLogo} alt="" />
            </li>
            <li>
              <img src={Assets.BookingLogo} alt="" />
            </li>
            <li>
              <img src={Assets.PlumGuideLogo} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </LandingLayout>
  );
}

export default Landing;
