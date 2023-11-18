import React from 'react';
import SideBar from '../components/layouts/SideBar'
import NavBar from '../components/layouts/NavBar';

const Dashboard = () => {
  return (
    <div className='flex '>
      <SideBar />
      <NavBar />
      {/* <div className='gap-6 m-3 top-[100px] text-xl text-gray-900 font-semibold'>
        <h2>This is dashboard</h2>
      </div> */}
    </div>
  )
}

export default Dashboard