import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import DotLoader from 'react-spinners/DotLoader';
import * as Yup from 'yup';

import axios from "../../../api/axios";

const NEWS_URL = 'http://localhost:3500/course';


const validationSchema = Yup.object().shape({
  course_name: Yup.string().required('Course name is required'),
  course_image: Yup.string().required('Course name is required'),
  course_description: Yup.string().required('Course description is required'),
});

// course_image: Yup.mixed().required('Course image is required').test(
//   'fileSize',
//   'File size is too large',
//   (value) => value && value.size <= 5000000 // Adjust the file size limit as needed
// ).test(
//   'fileType',
//   'Unsupported file type',
//   (value) => value && ['image/jpeg', 'image/png'].includes(value.type) // Adjust the file types as needed
// ),

const CreateCourse = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    course_name: '',
    course_image: null,
    course_description: '',
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
      handleCreateCourse();
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };


  const UpdataCourseHandler = async(id) => {
    console.log(id);
  }


   const deleteCourseHandler = async(id) => {
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
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        await axios.delete(`http://localhost:3500/course/${id}`)
        .then((response) => {
          console.log('item deleted successfully');
          setFormData({
            course_name: '',
            course_image: null,
            course_description: '',
          });
        })
        .catch((err) => {
          console.log(err.message)
    })
      } else {
        swal("Your imaginary file is safe!", {
          icon: 'info'
        });
      }
    });

   }


    const handleCreateCourse = async (e) => {
    // e.preventDefault();
    const courses = formData;
    setIsLoading(true);

    // const formData = new FormData();
    // formData.append('course_name', formData.course_name);
    // formData.append('course_description', formData.course_description);
    // formData.append('course_image', formData.course_image); // Assuming formData.course_image is a File object
    //   console.log("jamani", formData)
    try{

    await axios.post('http://localhost:3500/course', courses)
      .then((response) => {
          console.log(response);
          console.log(response.data);
          swal({
            title: "Good job!",
            text: "Course is registered successfully!",
            icon: "success",
            button: "Aww yess!",
          });

          setFormData({
            course_name: '',
            course_image: null,
            course_description: '',
          });
          // navigate('/admin/dashboard');
      }).catch((error) => {
          // alert("", error.message);
          swal({
            title: "Net-Connection Error!",
            text: "course registration error!",
            icon: "error",
            button: true,
            dangerMode: true,
          });
          console.log("course registration failed", error.message);
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
    } finally {
        setIsLoading(false);
    }
  }

  useEffect(() => {

    async function fetchData() {
      setIsLoading(true);
      try{

        await axios.get(NEWS_URL)
          .then((response) => {
            console.log(response.data);
            setCourseData(response.data);
          }).catch((error) => {
              swal({
                title: "Error!",
                text: "course fearching error!",
                icon: "warning",
                button: true,
                dangerMode: true,
              });
              console.log("news failed", error.message);
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
        } finally {
            setIsLoading(false);
        }
    }
    fetchData();
  },[formData]);

  return (
    <>

      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          {/* Add a loading spinner or message here */}
          {/* <p>Loading...</p> */}
          <DotLoader
            color="#36d7b7"
            cssOverride={{}}
            loading
            size={55}
            speedMultiplier={2}
          />
        </div>
      )}

      <div className="p-4">

      

      {/* <CreateNewsModal showModal={isModalOpen} closeModal={closeModal} /> */}
      <div className='relative float-right'>
          <button onClick={openModal} className="bg-[#a19810] text-lg text-white py-2 px-4 rounded">
            Add Course
          </button>
        </div>
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Course List</h1>
        
      </div>

      <div className="shadow-md overflow-x-auto" style={{zIndex: '-999'}}>
        <table className="min-w-full overflow-x-auto  bg-white border border-gray-300">
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className="py-2 px-4 border-b text-start">ID</th>
              <th className="py-2 px-4 border-b text-start ">Course Name</th>
              <th className="py-2 px-4 border-b text-start">Course Description</th>
              <th className="py-2 px-4 border-b text-start">Course Image</th>
              <th className="py-2 px-4 border-b text-start"></th>
              <th className="py-2 px-4 border-b text-start"></th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((item, index) => (
              <tr
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{index+1}</td>
                <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{item.course_name}</td>
                <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{item.course_description}</td>
                <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{item.course_image}</td>
                <td className={`w-20 py-2 px-4 text-gray-700 text-base border-b  ${hoveredRow === index ? 'bg-gray-200' : ''}`}><button onClick={() => deleteCourseHandler(item.id)} className='border border-solid bg-red-400 hover:bg-red-500 active:bg-red-400 px-3 py-1 border-r-2 text-white'>Delete</button></td>
                <td className={`w-20 py-2 px-4 text-gray-700 text-base border-b  ${hoveredRow === index ? 'bg-gray-200' : ''}`}><button onClick={() => UpdataCourseHandler(item.id)} className='border border-solid bg-cyan-400 hover:bg-cyan-600 active:bg-cyan-400 px-3 py-1 border-r-2 text-white'>Update</button></td>
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
          <h2 className="text-2xl font-semibold mb-4">CREATE COURSE</h2>
          <form onSubmit={handleSubmit} enctype='multipart/form-data'>
            <div className="mb-4">
              <label htmlFor="course_name" className="block text-gray-700 font-semibold mb-2">
                Course Name
              </label>
              <input
                type="text"
                id="course_name"
                name="course_name"
                placeholder='Enter your course_name'
                value={formData.course_name}
                onChange={handleChange}
                className={`w-full border font-normal text-base ${errors.course_name ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
              />
              {errors.course_name && <p className="text-red-500 text-sm mt-1">{errors.course_name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="course_image" className="block text-gray-700 font-semibold mb-2">
                Uploade Image
              </label>
              <input
                type="file"
                id="course_image"
                name="course_image"
                placeholder='Enter your course_image'
                value={formData.course_image}
                onChange={handleChange}
                className={`w-full border font-normal text-base ${errors.course_image ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
              />
              {errors.course_image && <p className="text-red-500 text-sm mt-1">{errors.course_image}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="course_description" className="block text-gray-700 font-semibold mb-2">
                Course Description
              </label>
              <textarea
                id="course_description"
                name="course_description"
                placeholder='describe here...'
                value={formData.course_description}
                onChange={handleChange}
                className={`w-full border font-normal text-base ${errors.course_description ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
                rows="4"
              />
              {errors.course_description && <p className="text-red-500 text-sm mt-1">{errors.course_description}</p>}
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

export default CreateCourse;
