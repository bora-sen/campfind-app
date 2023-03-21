import React, { useContext } from "react";
import * as Assets from "../Landing/Assets";
import { Link, useNavigate } from "react-router-dom";
import { SignUp as FireBaseSignUp } from "../../Firebase/controller";
import { authContext } from "../../Context/auth";

function SignUp() {
  const navigate = useNavigate();
  const { saveUserToLocalStorage } = useContext(authContext);
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      let name = document.querySelector("#input-name").value;
      let email = document.querySelector("#input-email").value;
      let password = document.querySelector("#input-password").value;
      //console.log({username,password});

      const user = await FireBaseSignUp(name, email, password);
      saveUserToLocalStorage(user);
      navigate("/camps", { replace: true });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="md:flex md:w-full md:h-screen">
      <div className="py-8">
        <a href="/">
          <h1 className="font-bold md:text-4xl">campFind</h1>
        </a>
      </div>
      <div className="md:w-full md:flex md:flex-col md:justify-center">
        <img
          className="h-[30rem] object-cover md:hidden"
          src={Assets.HeroImgMobile}
          alt="Landing Page"
        />
        <div className="p-8 md:w-[40rem]">
          <h1 className="font-bold text-4xl md:text-6xl">
            Explore the best camps on Earth.
          </h1>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col mt-12"
          >
            <div className="grid">
              <label>Name</label>
              <input
                className="bg-gray-100 p-2 rounded-md text-lg"
                type="text"
                id="input-name"
              />
            </div>

            <div className="grid">
              <label>Email</label>
              <input
                className="bg-gray-100 p-2 rounded-md text-lg"
                type="text"
                id="input-email"
              />
            </div>

            <div className="grid">
              <label>Password</label>
              <input
                className="bg-gray-100 p-2 rounded-md text-lg"
                type="password"
                id="input-password"
              />
            </div>

            <button className="bg-gray-900 text-white py-4 mt-12 rounded-md">
              Sign Up!
            </button>
            <span className="mt-4">
              Already have an account?{" "}
              <Link
                to="/sign-in"
                className="font-semibold text-blue-400 underline underline-offset-3"
              >
                Sign In
              </Link>
            </span>
          </form>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          className="h-screen w-[120rem] object-cover"
          src={Assets.HeroImgDesktop}
          alt=""
        />
      </div>
    </section>
  );
}

export default SignUp;
