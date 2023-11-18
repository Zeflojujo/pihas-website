// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLoginUser = async (e) => {
//     e.preventDefault();
//     const admin = {
//          name,
//          email,
//          password
//     }

//     console.log(email, password)

//     await axios.post('http://localhost:8000/admin/register', admin).then((response) => {
//         console.log(response);
//         alert("Registered successfully");

//         setName("");
//         setEmail("");
//         setPassword("");
//     }).catch((error) => {
//         alert("register error", error);
//         console.log("register failed", error);
//     })

//     //send a post request to the backend AP
    
//   }

//   return (
//     <div className="flex justify-center items-center h-screen bg-blue-50">
//       <div className="w-96 p-6 m-3 shadow-lg bg-white rounded-md text-gray-900">
//         <h1 className="text-3xl text-center font-semibold">Admin Registration </h1>
//         <hr className="mt-3" />

//         <form>

//         <div className="mt-3">
//             <label htmlFor="name" className="block text-base mb-2">
//               Name
//             </label>
//             <input
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               type="text"
//               id="name"
//               className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
//               placeholder="Enter Name..."
//               required
//             />
//           </div>

//           <div className="mt-3">
//             <label htmlFor="username" className="block text-base mb-2">
//               Email
//             </label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="text"
//               id="username"
//               className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
//               placeholder="Enter username..."
//               required
//             />
//           </div>

//           <div className="mt-3">
//             <label htmlFor="password" className="block text-base mb-2">
//               Password
//             </label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               autoComplete="off"
//               id="password"
//               className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
//               placeholder="Enter password..."
//               required
//             />
//           </div>

//           <div className="w-full mt-3">
//             <button onClick={(e) => handleLoginUser(e)} className="border-2 border-[#a19810] bg-[#a19810] text-white py-1 w-full rounded-md active:bg-[#b0a946] font-semibold">
//               Register
//             </button>
//           </div>
//         </form>

//         <div className="flex items-center  justify-center mt-3">
//             <Link className="text-gray-500 font-semibold" to={"/admin/login"}>
//               Already have an account? <label className="text-blue-400 cursor-pointer">register</label>
//             </Link>
//         </div>
        
//         </div>

//     </div>
//   );
// };

// export default Register;



import React, { useRef, useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";

const REGISTER_URL = 'http://localhost:3500/register';

const Register = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const validationSchema = Yup.object().shape({
    user: Yup.string().required('Email is required'),
    pwd: Yup.string().required('Password is required'),
  });

  // const validationSchema = Yup.object().shape({
  //   user: Yup.string().email('Invalid email').required('Email is required'),
  //   pwd: Yup.string()
  //     .required('Password is required')
  //     .min(8, 'Password must be at least 8 characters')
  //     .matches(
  //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
  //       'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
  //     ),
  // });
  

  const onSubmit = async (data) => {
    try {
      console.log(data)
      await validationSchema.validate(data, { abortEarly: false });

      const admin = {
        user: data.user,
        pwd: data.pwd
      };

      await axios.post(REGISTER_URL, admin)
        .then((response) => {
          console.log(response);
          // alert("Login successfully");

          navigate('/admin/dashboard');
        })
        .catch((error) => {
          alert("Login error", error.message);
          console.log("Login failed", error.message);
        });

    } catch (err) {
      console.error('Validation error:', err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="w-96 p-6 m-3 shadow-lg bg-white rounded-md text-gray-900">
        <h1 className="text-3xl text-center font-semibold">Admin Registration </h1>
        <hr className="mt-3" />

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2">
              Username
            </label>
            <input
              {...register("user")}
              type="text"
              id="username"
              className={`border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 ${errors.user ? 'border-red-500' : ''}`}
              placeholder="Enter username..."
            />
            {errors.user && <p className="text-red-500 text-sm mt-1">{errors.user.message}</p>}
          </div>

          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">
              Password
            </label>
            <input
              {...register("pwd")}
              type="password"
              autoComplete="off"
              id="password"
              className={`border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 ${errors.pwd ? 'border-red-500' : ''}`}
              placeholder="Enter password..."
            />
            {errors.pwd && <p className="text-red-500 text-sm mt-1">{errors.pwd.message}</p>}
          </div>

          <div className="flex items-center justify-between mt-3">
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
            <button type="submit" className="border-2 border-[#a19810] bg-[#a19810] text-white py-1 w-full rounded-md active:bg-[#b0a946] font-semibold">
              register
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Register;

