import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginUser = async (e) => {
    e.preventDefault();
    const admin = {
         name,
         email,
         password
    }

    console.log(email, password)

    await axios.post('http://localhost:8000/admin/register', admin).then((response) => {
        console.log(response);
        alert("Registered successfully");

        setName("");
        setEmail("");
        setPassword("");
    }).catch((error) => {
        alert("register error", error);
        console.log("register failed", error);
    })

    //send a post request to the backend AP
    
  }

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="w-96 p-6 m-3 shadow-lg bg-white rounded-md text-gray-900">
        <h1 className="text-3xl text-center font-semibold">Admin Registration </h1>
        <hr className="mt-3" />

        <form>

        <div className="mt-3">
            <label htmlFor="name" className="block text-base mb-2">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Name..."
              required
            />
          </div>

          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
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

          <div className="w-full mt-3">
            <button onClick={(e) => handleLoginUser(e)} className="border-2 border-[#a19810] bg-[#a19810] text-white py-1 w-full rounded-md active:bg-[#b0a946] font-semibold">
              Register
            </button>
          </div>
        </form>

        <div className="flex items-center  justify-center mt-3">
            <Link className="text-gray-500 font-semibold" to={"/admin/login"}>
              Already have an account? <label className="text-blue-400 cursor-pointer">Sign In</label>
            </Link>
        </div>
        
        </div>

    </div>
  );
};

export default Register;
