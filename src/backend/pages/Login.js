import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginUser = async (e) => {
    e.preventDefault();
    const admin = {
         email,
         password
    }

    console.log(email, password)

    await axios.post('http://localhost:8000/admin/login', admin).then((response) => {
        console.log(response);
        alert("Login successfully");

        setEmail("");
        setPassword("");
    }).catch((error) => {
        alert("login error", error);
        console.log("login failed", error);
    })

    //send a post request to the backend AP
    
  }

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="w-96 p-6 m-3 shadow-lg bg-white rounded-md text-gray-900">
        <h1 className="text-3xl text-center font-semibold">Admin Login </h1>
        <hr className="mt-3" />

        <form>

          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2">
              Username
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="username"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter username..."
              required
            />
          </div>

          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoComplete="off"
              id="password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter password..."
              required
            />
          </div>

          <div className="flex items-center  justify-between mt-3">
            <div className="flex gap-1">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <div>
              <Link className="text-[#a19810] font-semibold" to={"/"}>
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="w-full mt-3">
            <button onClick={(e) => handleLoginUser(e)} className="border-2 border-[#a19810] bg-[#a19810] text-white py-1 w-full rounded-md active:bg-[#b0a946] font-semibold">
              Login
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;
