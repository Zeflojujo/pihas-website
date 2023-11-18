import React, { useState, useEffect } from 'react';
import CreateNewsModal from './CreateNewsModal';
import * as Yup from 'yup';
// import './styles.css'; // Import your CSS file with Tailwind CSS styles

import axios from "../../../api/axios";

const NEWS_URL = 'http://localhost:3500/news';


const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
});

const NewsListTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);


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
    title: '',
    description: '',
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
      handleCreateNews();
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };



  const UpdataNewsHandler = async(id) => {
    console.log(id);
  }



   const deleteNewsHandler = async(id) => {
    console.log(id)

    await axios.delete(`http://localhost:3500/news/${id}`)
    .then((response) => {
      console.log('item deleted successfully');
    })
    .catch((err) => {
      console.log(err.message)
    })

   }



    const handleCreateNews = async (e) => {
    const News = formData;

    try{

    await axios.post('http://localhost:3500/news', News)
      .then((response) => {
          console.log(response);
          console.log(response.data);
          alert("News Created successfully");

          setFormData({
            title: '',
            description: '',
          });
          // navigate('/admin/dashboard');
      }).catch((error) => {
          alert("news error", error.message);
          console.log("news failed", error.message);
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

        await axios.get(NEWS_URL)
          .then((response) => {
            console.log(response.data);
            setNewsData(response.data);
          }).catch((error) => {
              alert("news error", error.message);
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
        }
    }
    fetchData();
  },[formData]);

  return (
    <>

      <div className="p-4">

      

      {/* <CreateNewsModal showModal={isModalOpen} closeModal={closeModal} /> */}
      <div className='relative float-right'>
          <button onClick={openModal} className="bg-[#a19810] text-lg text-white py-2 px-4 rounded">
            Add News
          </button>
        </div>
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">News List</h1>
        
      </div>

      <div className="shadow-md overflow-x-auto" style={{zIndex: '-999'}}>
        <table className="min-w-full overflow-x-auto  bg-white border border-gray-300">
          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className="py-2 px-4 border-b text-start">ID</th>
              <th className="py-2 px-4 border-b text-start ">Title</th>
              <th className="py-2 px-4 border-b text-start">Description</th>
              <th className="py-2 px-4 border-b text-start"></th>
              <th className="py-2 px-4 border-b text-start"></th>
            </tr>
          </thead>
          <tbody>
            {newsData.map((item, index) => (
              <tr
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{index+1}</td>
                <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{item.title}</td>
                <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{item.description}</td>
                <td className={`w-20 py-2 px-4 text-gray-700 text-base border-b  ${hoveredRow === index ? 'bg-gray-200' : ''}`}><button onClick={() => deleteNewsHandler(item.id)} className='border border-solid bg-red-400 hover:bg-red-500 active:bg-red-400 px-3 py-1 border-r-2 text-white'>Delete</button></td>
                <td className={`w-20 py-2 px-4 text-gray-700 text-base border-b  ${hoveredRow === index ? 'bg-gray-200' : ''}`}><button onClick={() => UpdataNewsHandler(item.id)} className='border border-solid bg-cyan-400 hover:bg-cyan-600 active:bg-cyan-400 px-3 py-1 border-r-2 text-white'>Update</button></td>
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
          <h2 className="text-2xl font-semibold mb-4">CREATE NEWS</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder='Enter your title'
                value={formData.title}
                onChange={handleChange}
                className={`w-full border font-normal text-base ${errors.title ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder='describe here...'
                value={formData.description}
                onChange={handleChange}
                className={`w-full border font-normal text-base ${errors.description ? 'border-red-500' : 'border-gray-300'} p-2 rounded`}
                rows="4"
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
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

export default NewsListTable;