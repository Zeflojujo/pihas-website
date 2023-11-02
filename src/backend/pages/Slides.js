import React from 'react'
import SideBar from '../components/SideBar'

const Slides = () => {
  return (
    <div className='flex gap-6'>
        <SideBar/>
        <div className='m-3 text-xl text-gray-900 font-semibold'>
          <h2>News</h2>
        </div>
    </div>
  )
}

export default Slides