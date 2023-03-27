import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../../Context/auth";

import { SignOut } from "../../../Firebase/controller";

function Header() {
  const { user, deleteUserFromLocalStorage } = useContext(authContext);
  const navigate = useNavigate();

  async function handleSignOut(e) {
    e.preventDefault();

    try {
      await SignOut();
      deleteUserFromLocalStorage();
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <nav className="flex justify-between p-8">
      <div className="flex items-center">
        <NavLink replace to="/">
          <h1 className="font-bold text-4xl text-primary-accent">campFind</h1>
        </NavLink>
        <span className="hidden font-bold text-gray-400">Home</span>
      </div>
      <div className="md:hidden">
        <button className="bg-gray-100 p-2 rounded-md">
          <svg
            width={25}
            height={25}
            fill="none"
            stroke="#06140D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 12h18" />
            <path d="M3 6h18" />
            <path d="M3 18h18" />
          </svg>
        </button>
      </div>
      <div className="hidden md:flex md:items-center md:gap-8">
        {!user ? (
          <>
            <NavLink replace to="/sign-in" className="font-bold text-gray-400">
              Login
            </NavLink>
            <NavLink
              replace
              to="/sign-up"
              className="font-bold text-white bg-primary-black p-4"
            >
              Create an account
            </NavLink>
          </>
        ) : (
          <>
            <span>{user.displayName}</span>
            <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
