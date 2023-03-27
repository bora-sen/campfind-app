import React, { useContext } from "react";
import * as Assets from "../../Assets";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Login } from "../../Firebase/controller";
import { authContext } from "../../Context/auth";
import LandingLayout from "../../Layouts/LandingLayout";

function SignIn() {
  const navigate = useNavigate();
  const { saveUserToLocalStorage } = useContext(authContext);

  async function handleSubmit(e) {
    e.preventDefault();
    let username = document.querySelector("#input-username").value;
    let password = document.querySelector("#input-password").value;

    try {
      const resp = await Login(username, password);
      console.log(resp);
      saveUserToLocalStorage(resp.user);
      navigate("/camps", { replace: true });
    } catch (error) {
      console.log(error.code);
    }
  }
  return (
    <LandingLayout imageObj={Assets.HeroImgDesktop}>
      <div className="lg:w-[34rem]">
        <h1 className="font-bold text-4xl md:text-6xl">
          Explore the best camps on Earth.
        </h1>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col mt-12">
          <div className="grid">
            <label>Username</label>
            <input
              className="bg-gray-100 p-2 rounded-md text-lg"
              type="text"
              id="input-username"
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
            Login
          </button>
          <span className="mt-4">
            Not a user yet?{" "}
            <Link
              to="/sign-up"
              className="font-semibold text-blue-400 underline underline-offset-3"
            >
              Create and account
            </Link>
          </span>
        </form>
      </div>
    </LandingLayout>
  );
}

export default SignIn;
