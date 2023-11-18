import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
// import './styles.css'; // Import your CSS file with Tailwind CSS styles

import axios from "../../../api/axios";

const NEWS_URL = 'http://localhost:3500/messages';


const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
});

const Messages = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);



  const handleMouseEnter = (rowIndex) => {
    setHoveredRow(rowIndex);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };




  const [errors, setErrors] = useState({});



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
  },[]);

  return (
    <>

      <div className="p-4 font-serif">

        <div className="mb-4 flex justify-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">User Contact Messages</h1>
            
        </div>

        <div className="shadow-md overflow-x-auto" style={{zIndex: '999'}}>
            <table className="min-w-full overflow-x-auto  bg-white border border-gray-300 -z-40">
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
                <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Phone</th>
                <th className="py-2 px-4 border-b">Message</th>
                <th className="py-2 px-4 border-b"></th>
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
                    <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{item.name}</td>
                    <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{item.email}</td>
                    <td className={`py-2 px-4 text-gray-700 text-base border-b ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{item.phone}</td>
                    <td className={`py-2 px-4 text-gray-700 text-base border-b whitesapce-pre-line ${hoveredRow === index ? 'bg-gray-200' : ''}`}>{item.message}</td>
                    <td className={`py-2 px-4 text-gray-700 text-base border-b  ${hoveredRow === index ? 'bg-gray-200' : ''}`}><button className='border border-solid bg-red-400 hover:bg-red-500 active:bg-red-400 px-3 py-1 border-r-2 text-white'>Delete</button></td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>  
    </>
    
  );
};

export default Messages;