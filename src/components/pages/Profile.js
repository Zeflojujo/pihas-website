import React from 'react'
import "../profile/ProfileStyles.css"
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Headers from '../navbar/Headers'
import MainPage from '../navbar/MainPage'
import Visitors from '../visitors/Visitor'

function Profile() {
  return (
    <>
    <Navbar/>
    <Headers/>
    <MainPage/>

    <div className='visitor-full'>

        <div className='visitor-fh'>
            <Visitors/>
        </div>
        <div className='visitor-sh'>
            <h2>PIHAS COLLEGE PROFILE</h2>
            <p>Peramiho Institute of Health and Allied Sciences (PIHAS) is a Catholic Technical Institution officially opened on 28th October 2019. The intention for launching the Institute was in line with the goal of the Catholic Bishops of Tanzania to ensure that we have a training that would impart academic and professional skills and infuse values of civic and social learning to our students. PIHAS, therefore, adheres to vision of holistic development of a person and respect for human dignity. In recognition of this vision, PIHAS will uphold the motto of “Building the City of God” and cherish our own motto “From the People for the People”. This Institute was thus established for the purpose of shedding light and contributing to technical and higher education in the country. This takes cognizance of the national development vision 2025, which mainly focuses on high quality of life, peace, stability and unity, good governance, a well-educated and learning society, a competitive economy capable of producing sustainable growth and shared benefits. The rationale of the establishment of PIHAS in Ruvuma was to maintain the vision of the Catholic church of Tanzania to bring technical and higher education services close to the people as it has been its tradition globally, regionally and locally. In this view, Ruvuma was one of the targets and hence PIHAS was established. PIHAS is a full registered by the National Accreditation Council for Technical Education (NACTE) as an Institution of Technical and Higher Learning, recognized by the Tanganyika Medical Training Board to offer training or conduct programmes in the fields of Health and Allied Sciences.</p>
            <p>In recognition of this vision, PIHAS will uphold the motto of “Building the City of God” and cherish our own motto “From the People for the People”. This Institute was thus established for the purpose of shedding light and contributing to technical and higher education in the country. This takes cognizance of the national development vision 2025, which mainly focuses on high quality of life, peace, stability and unity, good governance, a well-educated and learning society, a competitive economy capable of producing sustainable growth and shared benefits.</p>
            <p>The rationale of the establishment of PIHAS in Ruvuma was to maintain the vision of the Catholic church of Tanzania to bring technical and higher education services close to the people as it has been its tradition globally, regionally and locally. In this view, Ruvuma was one of the targets and hence PIHAS was established. PIHAS is a full registered by the National Accreditation Council for Technical Education (NACTE) as an Institution of Technical and Higher Learning, recognized by the Tanganyika Medical Training Board to offer training or conduct programmes in the fields of Health and Allied Sciences.</p>
        </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Profile