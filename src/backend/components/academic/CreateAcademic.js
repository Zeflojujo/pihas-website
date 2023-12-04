import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import * as Yup from 'yup';

import axios from "../../../api/axios";

const ACADEMIC_URL = 'http://localhost:3500/academic';


const validationSchema = Yup.object().shape({
  name: Yup.string().required('name is required'),
  academicLink: Yup.string().required('AcademicLink is required'),
});

const CreateAcademic = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [academicData, setAcademicData] = useState([]);


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
    name: '',
    academicLink: '',
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
      handleCreateAcademicLink();
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };



  const UpdataAcademicHandler = async(id) => {
    console.log(id);
  }



   const deleteAcademicHandler = async(id) => {
    console.log(id)

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if (willDelete) {
        
        await axios.delete(`http://localhost:3500/academic/${id}`)
        .then((response) => {
          console.log('Item deleted successfully');
          setFormData({
            name: '',
            academicLink: '',
          });
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err.message)
          swal(err.response.data.message, {
            icon: "warning",
          });
        })
      } else {
        swal("Your imaginary file is safe!", {
          icon: 'info'
        });
      }
    }); 

   }



    const handleCreateAcademicLink = async (e) => {
    const academic = formData;

    try{

    await axios.post(ACADEMIC_URL, academic)
      .then((response) => {
          console.log(response);
          console.log(response.data);
          alert("");
          swal({
            title: "Good job!",
            text: "Academic Link is Created successfully!",
            icon: "success",
            button: "Aww yess!",
          });

          setFormData({
            name: '',
            academicLink: '',
          });
          // navigate('/admin/dashboard');
      }).catch((error) => {
          alert("Academic error", error.message);
          swal({
            title: "Error!",
            text: "Academic Link fetching error!",
            icon: "warning",
            button: true,
            dangerMode: true,
          });
          console.log("Academic failed", error.message);
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

  useEffect(() => {

    async function fetchData() {
      try{

        await axios.get(ACADEMIC_URL)
          .then((response) => {
            console.log(response.data);
            setAcademicData(response.data);
          }).catch((error) => {
              // alert("Academic error", error.message);
              swal({
                title: "Net-Connection Error!",
                text: "Academic Link fearching error!",
                icon: "warning",
                button: true,
                dangerMode: true,
              });
              console.log("Academic failed", error.message);
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

      <div className="p-4">

      

      {/* <CreateAcademicModal showModal={isModalOpen} closeModal={closeModal} /> */}
      <div className='relative float-right'>
          <button onClick={openModal} className="bg-[#a19810] text-lg text-white py-2 px-4 rounded">
            Add Academic
          </button>
        </div>
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Academic Link List</h1>
        
      </div>

      <div className="shadow-md overflow-x-auto" style={{zIndex: '-999'}}>
        <table className="min-w-full overflow-x-auto  bg-white border border-gray-300">
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className="py-2 px-4 border-b text-start">ID</th>
              <th className="py-2 px-4 border-b text-start ">Name</th>
              <th className="py-2 px-4 border-b text-start">Academic Link</th>
              <th className="py-2 px-4 border-b text-start"></th>
              <th className="py-2 px-4 border-b text-start"></th>
            </tr>
          </thead>
          <tbody>
            {academicData.map((item, index) => (
              <tr
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{index+1}</td>
                <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{item.name}</td>
                <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{item.academicLink}</td>
                <td className={`w-20 py-2 px-4 text-gray-700 text-base border-b  ${hoveredRow === index ? 'bg-gray-200' : ''}`}><button onClick={() => deleteAcademicHandler(item.id)} className='border border-solid bg-red-400 hover:bg-red-500 active:bg-red-400 px-3 py-1 border-r-2 text-white'>Delete</button></td>
                <td className={`w-20 py-2 px-4 text-gray-700 text-base border-b  ${hoveredRow === index ? 'bg-gray-200' : ''}`}><button onClick={() => UpdataAcademicHandler(item.id)} className='border border-solid bg-cyan-400 hover:bg-cyan-600 active:bg-cyan-400 px-3 py-1 border-r-2 text-white'>Update</button></td>
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
          <h2 className="text-2xl font-semibold mb-4">CREATE ACADEMIC LINK</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Enter your name'
                value={formData.name}
                onChange={handleChange}
                className={`w-full border font-normal text-base ${errors.name ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="academicLink" className="block text-gray-700 font-semibold mb-2">
                Academic Link
              </label>
              <input
                id="academicLink"
                name="academicLink"
                placeholder='enter academic application link...'
                value={formData.academicLink}
                onChange={handleChange}
                className={`w-full border font-normal text-base ${errors.academicLink ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
              />
              {errors.academicLink && <p className="text-red-500 text-sm mt-1">{errors.academicLink}</p>}
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

export default CreateAcademic;