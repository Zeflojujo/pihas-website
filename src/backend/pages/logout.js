import React from 'react';
import { useNavigate } from 'react-router-dom';
// import SideBar from '../components/layouts/SideBar';
import axios from "../../api/axios";

const LOGOUT_URL = 'http://localhost:3500/logout';

const Logout = (props) => {

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try{

      await axios.get(LOGOUT_URL)
        .then((response) => {
  
            navigate('/admin/auth');
        }).catch((error) => {
            alert("logout error", error.message);
            console.log("logout failed", error.message);
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

  
    
  return (
    <>
    <div className='flex flex-row min:w-full items-center justify-end'>
      <h3 className='flex text-center font-semibold'>Loggen in as:</h3>

      <div className='flex items-center justify-end m-2 text-xl text-gray-900 font-semibold'>
        <form onSubmit={handleLogout} className='flex items-center'>
          <button className='flex items-center bg-[#a19810] text-white px-4 py-2 rounded text-1px mx-4 hover:cursor-pointer hover:bg-blue-400 border border-r-2' type='submit'>Logout</button>
        </form>
      </div>
    </div>
      
    </>
      
)
}

export default Logout