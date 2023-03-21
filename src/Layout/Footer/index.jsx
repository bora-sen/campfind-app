import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <nav className="flex flex-col md:flex-row justify-between items-center p-8 bg-primary-accent text-white">
        <div className="mb-4 md:w-1/4">
          <NavLink replace to="/">
            <h1 className="font-bold text-4xl">campFind</h1>
          </NavLink>
        </div>

        <ul className="flex flex-col md:w-3/4 sm:flex-row items-center justify-end sm:mr-12 gap-24 my-24 sm:my-4">
          <li>
            <NavLink replace to="">
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink replace to="">
              Create an account
            </NavLink>
          </li>
          <li>
            <NavLink replace to="">
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink replace to="">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="text-center text-xs bg-primary-accent-darker text-white">
        <span>
          Copyright 2023 | campFind Made By.{" "}
          <a className="font-semibold" href="https://bborasen.com">
            Bora
          </a>
        </span>
      </div>
    </>
  );
}

export default Footer;
