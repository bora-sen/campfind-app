import React from "react";
import { NavLink } from "react-router-dom";

function LandingLayout({ imageObj,children }) {
  return (
    <main className="flex flex-col-reverse w-screen md:h-screen md:flex-row">
      <div className="md:flex md:flex-col w-auto md:w-1/2 h-auto md:h-full">
        <div className="py-8">
          <NavLink replace to="/">
            <h1 className="font-bold md:text-4xl ml-12">campFind</h1>
          </NavLink>
        </div>
        <div className="flex md:items-center p-8 md:h-full xl:pl-24">{children}</div>
      </div>

      <div className="h-[22rem] md:w-1/2 md:h-screen flex items-center justify-center overflow-hidden">
        <img
          className="w-full h-screen object-cover"
          src={imageObj}
          alt=""
        />
      </div>
    </main>
  );
}

export default LandingLayout;
