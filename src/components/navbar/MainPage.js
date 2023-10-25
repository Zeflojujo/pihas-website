import { Link, NavLink } from 'react-router-dom';
import './NavbarStyles.css'
import './NavbarStyles.css'


function MainPage() {
  return (
    <>
        {/* main */}
        <div className="main" id="showmehidemeresmenu" style={{height:"auto", backgroundColor:"#076ead"}}>

            <div className="navbarheader4" style={{width:"95%", margin:"auto", color:"#fff"}}>
                <div className="areseheader4">
                    <NavLink to={"/"} style={{borderRadius:"00px 00px 00px 00px"}}>Home</NavLink>
                </div>
                <div className="dropdownheader4">
                    <button className="dropbtnheader4" style={{borderRadius:"00px 00px 00px 00px"}}>About Us 
        <i className="fa fa-angle-double-down" aria-hidden="true"></i>
        </button>
                    <div className="dropdownheader4-content">
                        <NavLink to={"/profile"} style={{lineHeight: 1}}>Pihas Profile</NavLink>
                        <NavLink to={"/about"} style={{lineHeight: "1"}}>Mission, Vision & Objectives</NavLink>
                    </div>
                </div>
                <div className="areseheader4">
                    <NavLink href="https://kamsaris.ac.tz/oas/kam" style={{borderRadius:"00px 00px 00px 00px"}}>Online Application</NavLink>
                </div>
                <div className="dropdownheader4">
                    <button className="dropbtnheader4" style={{borderRadius:"00px 00px 00px 00px"}}>Academic 
        <i className="fa fa-angle-double-down" aria-hidden="true"></i>
        </button>
                    <div className="dropdownheader4-content">
                        <NavLink href="https://kamsaris.ac.tz/" style={{lineHeight: "1"}}>PIHAS-Saris</NavLink>
                        <NavLink href="https://kamsaris.ac.tz/" style={{lineHeight: "1"}}>E-Library</NavLink>
                        <NavLink href="https://kamsaris.ac.tz/" style={{lineHeight: "1"}}>E-Learning</NavLink>
                    </div>
                </div>
                <div className="areseheader4">
                    <NavLink href="available-programs" style={{borderRadius:"00px 00px 00px 00px"}}>Available Programs</NavLink>
                </div>
                <div className="areseheader4">
                    <NavLink to={"/contact"} style={{borderRadius:"00px 00px 00px 00px"}}>Contact Us</NavLink>
                </div>
                <div className="areseheader4">
                    <NavLink to={"/news"} style={{borderRadius:"00px 00px 00px 00px"}}>News and Events</NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainPage;