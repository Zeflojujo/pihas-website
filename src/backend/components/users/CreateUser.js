import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import * as Yup from 'yup';
// import './styles.css'; // Import your CSS file with Tailwind CSS styles

import axios from "../../../api/axios";

const NEWS_URL = 'http://localhost:3500/users';


const validationSchema = Yup.object().shape({
  user: Yup.string().required('user is required'),
  pwd: Yup.string().required('pwd is required'),
});

const CreateUser = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState([]);


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleMouseEnter = (rowIndex) => {
    setHoveredRow(rowIndex);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  const handleCloseModal = () => {
    closeModal();
  };


  const [formData, setFormData] = useState({
    user: '',
    pwd: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      // If validation passes, add your logic to handle the form submission
      console.log('Form submitted:', formData);
      // Close the modal after submission
      closeModal();
      handleCreateUser();
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

    const handleCreateUser = async (e) => {
    const admin = formData;

    try{

    await axios.post(NEWS_URL, admin)
      .then((response) => {
          swal({
            title: "Good job!",
            text: "Admin is Registered successfully",
            icon: "success",
            button: "Aww yess!",
          });
          setFormData({
            user: '',
            pwd: '',
          });
          // navigate('/admin/dashboard');
      }).catch((error) => {
          // alert("registration error", error.message);
          swal({
            title: "Error!",
            text: error.response.data.message,
            icon: "warning",
            button: true,
            dangerMode: true,
          });
          console.log("registration failed", error.message);
      })

    }catch(err){
      if(err?.status === 400){
        console.log('Missing Email or Password');
      }
      else if(!err) {
        console.log('No server Response');
      }
      else if(!err?.status === 401) {
        console.log('Unauthorized');
      }
      else{
        console.log("rest error", err);
      }
    }
  }

  const deleteUserHandler = async(id) => {
    console.log(id);

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if (willDelete) {
        
        await axios.delete(`http://localhost:3500/users/${id}`)
        .then((response) => {
          console.log(response)
          setFormData({
            user: '',
            pwd: '',
          });
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        })
        .catch((erro) => {
          console.log(erro.response.data.message)
          swal(erro.response.data.message, {
            icon: "warning",
          });
        })
      } else {
        swal("Your imaginary file is safe!", {
          icon: "info"
        });
      }
    });

    
  }

  useEffect(() => {

    async function fetchData() {
      try{

        await axios.get(NEWS_URL)
          .then((response) => {
            console.log("object", response.data);
            setUserData(response.data)
          }).catch((erro) => {
              // alert("Fetch user error", erro.message);
              swal({
                title: "Net-Connection Error!",
                text: "Fetching user error",
                icon: "warning",
                button: true,
                dangerMode: true,
              });
              console.log("Fetch user failed", erro.message);
              // setErrorMessage(`${erro.response.data.message}`);

          })
    
        }catch(err){
          if(!err) {
            console.log('No server Response');
          }
          else if(!err?.status === 401) {
            console.log('Unauthorized');
          }
          else{
            console.log("rest error", err);
          }
        }
    }
    fetchData();
  },[formData]);


  return (
    <>
      <div className="relative p-4">

      <div className='relative float-right width-auto shadow-lg'>
          <button onClick={openModal} className="bg-[#a19810] text-lg text-white py-2 px-4 rounded">
            Add Admin
          </button>
        </div>
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin List</h1>
        
      </div>

      <div className="shadow-md overflow-x-auto" style={{zIndex: '999'}}>
        <table className="min-w-full overflow-x-auto   bg-white border border-gray-300">
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className="py-2 px-4 border-b text-start font-semibold tracking-wide ">ID</th>
              <th className="py-2 px-4 border-b text-start font-semibold tracking-wide ">Name</th>
              <th className="py-2 px-4 border-b text-start font-semibold tracking-wide whitespace-normal">Password</th>
              <th className="py-2 px-4 border-b text-start font-semibold tracking-wide "></th>
              <th className="py-2 px-4 border-b text-start font-semibold tracking-wide "></th>
              
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100'>
            {userData.map((item, index) => (
               <tr
                key={item.username}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <td className={`py-2 px-4 font-bold w-40 text-blue-500 hover:underline text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{index+101}</td>
                <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{item.username}</td>
                <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{item.password}</td>
                <td className={`py-2 px-4 text-gray-700 text-base border-b  ${hoveredRow === index ? 'bg-gray-200' : ''}`}><button onClick={() => deleteUserHandler(item.id) } className='border border-solid bg-red-400 hover:bg-red-500 active:bg-red-400 px-3 py-1 border-r-2 text-white'>Delete</button></td>
                <td className={`py-2 px-4 text-gray-700 text-base border-b  ${hoveredRow === index ? 'bg-gray-200' : ''}`}><button className='border border-solid bg-cyan-400 hover:bg-cyan-600 active:bg-cyan-400 px-3 py-1 border-r-2 text-white'>Update</button></td>
              </tr> 
             ))}
          </tbody>
        </table>
      </div>
      </div>
    
      <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isModalOpen ? '' : 'hidden'}`}>
      
        <div className="bg-gray-800 bg-opacity-75 w-full h-full absolute"></div>
        <div className="bg-white p-4 md:p-8 rounded shadow-md z-10 w-full max-w-[50%]">
        <div className="flex justify-end ">
          <button
            onClick={handleCloseModal}
            className="text-gray-600 hover:text-gray-200 hover:outline hover:bg-slate-400  rounded-full focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
          <h2 className="text-2xl font-semibold mb-4">Register Admin</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="user" className="block text-gray-700 font-semibold mb-2">
                Username
              </label>
              <input
                type="text"
                id="user"
                name="user"
                placeholder='Enter your password'
                value={formData.user}
                onChange={handleChange}
                className={`w-full border font-normal text-base ${errors.user ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
              />
              {errors.user && <p className="text-red-500 text-sm mt-1">{errors.user}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="pwd" className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                id="pwd"
                name="pwd"
                type='password'
                value={formData.pwd}
                placeholder='Enter your password'
                onChange={handleChange}
                className={`w-full border font-normal text-base ${errors.pwd ? 'border-red-500' : 'border-gray-100'} p-2 rounded`}
              />
              {errors.pwd && <p className="text-red-500 text-sm mt-1">{errors.pwd}</p>}
            </div>
            <button type="submit" className="bg-[#a19810] text-white px-4 py-2 rounded w-full">
              Submit
            </button>
          </form>
          
        </div>

        
      </div>
    </>
    
  );
};

export default CreateUser;