import React from 'react'
import SideBar from '../components/layouts/SideBar'
import NavBar from '../components/layouts/NavBar'
import CreateAcademic from '../components/academic/CreateAcademic';

const AcademicLink = () => {
  return (
    <div className='flex '>
        <SideBar />
        <div className='flex flex-col w-full'>
          <NavBar />
          <div className=' relative gap-6 mt-10 text-xl text-gray-900 font-semibold'>
            <CreateAcademic />
          </div>
        </div>   
    </div>
  )
}

export default AcademicLink;