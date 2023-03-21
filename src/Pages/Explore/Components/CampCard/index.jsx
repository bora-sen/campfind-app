import React from "react";
import { NavLink } from "react-router-dom";

export default function CampCard({ camp_object }) {
  return (
    <div className="w-full sm:w-[20rem] p-2 border-gray-200 border-2 rounded-md">
      <img
        className="rounded-xl w-full object-cover"
        src={camp_object.placeholderImg}
        alt="Alter"
      />
      <div className="grid p-4">
        <span className="font-semibold text-xl my-2">{camp_object.title}</span>
        <span className="h-[3rem] overflow-hidden">{camp_object.desc}</span>
      </div>
      <NavLink
        replace
        to={`/camp/${camp_object._id}`}
        className="block font-semibold text-center p-4 border-2 w-full mt-4"
      >
        View Campground
      </NavLink>
    </div>
  );
}
