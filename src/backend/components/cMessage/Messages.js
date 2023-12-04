import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';

import axios from "../../../api/axios";

const MESSAGE_URL = 'http://localhost:3500/messages';

const Messages = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [MessageData, setMessageData] = useState([]);


  const handleMouseEnter = (rowIndex) => {
    setHoveredRow(rowIndex);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  const deleteMessageHandler = async(id) => {
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
        await axios.delete(`http://localhost:3500/messages/${id}`)
        .then((response) => {
          console.log('item deleted successfully');
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


  useEffect(() => {

    async function fetchData() {
      try{

        await axios.get(MESSAGE_URL)
          .then((response) => {
            console.log(response.data);
            setMessageData(response.data);
          }).catch((error) => {
              // alert("Message error", error.message);
              swal({
                title: "Net-Connection Error!",
                text: "Message fetching error!",
                icon: "warning",
                button: true,
                dangerMode: true,
              });
              console.log("message fetch error", error.message);
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
                {MessageData.map((item, index) => (
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
                    <td className={`py-2 px-4 text-gray-700 text-base border-b  ${hoveredRow === index ? 'bg-gray-200' : ''}`}><button onClick={() => deleteMessageHandler(item.id)} className='border border-solid bg-red-400 hover:bg-red-500 active:bg-red-400 px-3 py-1 border-r-2 text-white'>Delete</button></td>
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