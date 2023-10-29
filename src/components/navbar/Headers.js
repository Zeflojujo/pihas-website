import logo from '../../assets/kamcollege/logo.png';
import head from '../../assets/kamcollege/42853ef933.png';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Headers() {
    const [showme, setShowMe] = useState(false);
    const handleShowMe = () => {
        setShowMe(!showme);
    }
  return (
    <>
        {/* header */}
        <div className="clearfix" style={{ marginTop:"25px",marginBottom: "30px", height:"auto !important",backgroundColor:"white !important", paddingBottom:"5px !important"}}>
            <div className="header4_logo1">
                <img src={logo} alt='defualtImage' />
            </div>
            <div className="header4_logo2">
                <h1>PERAMIHO COLLEGE OF HEALTH AND ALLIED SCIENCES</h1>
                <span style={{clear:"both"}}>HEALTHY IS WEALTH</span>
                <div className="header4_links">
                <a id="menule" onClick={handleShowMe} style={{padding:"5px 10px 5px 10px", marginLeft:"5px", border:"2px solid #008000", borderRadius:"20px 20px 20px 20px"}}>
                    <BiMenu size={24} />
                </a>
                <a href="https://saristz.ac.tz/login/kam" style={{display:"inline-block", padding:"5px 10px 5px 10px", border:"2px solid #008000", borderRadius:"20px 20px 20px 20px"}}>PIHAS-SARIS</a><a href="https://saristz.ac.tz/oas/kam/home" style={{display:"inline-block", padding:"5px 10px 5px 10px", marginLeft:"5px", border:"2px solid #008000", borderRadius:"20px 20px 20px 20px"}}> Apply-Now</a>
            </div>
            </div>
            <div className="header4_logo3">
                <img src={head} alt='defaultImage' />
            </div>
            
        </div>



        {/* MenuItem */}
        <div className="main" id="showmehidemeresmenu1" style={{ display: showme ? "block": "none" }}>
        <nav id="cbp-hrmenu" className="cbp-hrmenu" style={{marginTop:"-5px"}}>
            <ul style={{width:"100% !important", backgroundColor:"#076ead"}}>
                <li>
                    {/* <a href="#" className="hvr-underline-from-center" style={{borderRadius:"00px 00px 00px 00px", fontWeight:"normal !important", color:"#ffffff !important"}}>Home</a> */}
                    <div className="cbp-hrsub" style={{zIndex:"1", backgroundColor:"#076ead"}}>
                        <div className="cbp-hrsub-inner">
                            <div style={{padding:"0", margin:"0"}} className="sub-menu-int">
                                <h4 style={{paddingTop:"15px", paddingBottom:"0px"}}>
                                    <table border="0">
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-angle-double-right" aria-hidden="true" style={{fontSize:"25px"}}></i></td>
                                                <td><NavLink to={"/"} style={{ lineHeight: "1", textDecoration: "none" }}>Home</NavLink></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </h4>
                                <ul className="cbp-hrmenuT">
                                </ul>
                            </div>
                        </div>
                        {/* <!-- /cbp-hrsub-inner --> */}
                    </div>
                    {/* <!-- /cbp-hrsub --> */}
                </li>
                <li>
                    <a href="#" className="hvr-underline-from-center" style={{padding:"0", margin:"0", borderRadius:"00px 00px 00px 00px", fontWeight:"normal !important", color:"#ffff00 !important"}}>About Us</a>
                    <div className="cbp-hrsub" style={{zIndex:"1", backgroundColor:"#076ead"}}>
                        <div className="cbp-hrsub-inner">
                            <div style={{padding:"0", margin:"0"}} className="sub-menu-int">
                                <h4 style={{paddingTop:"15px", paddingBottom:"0px"}}>
                                    <table border="0">
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-angle-double-right" aria-hidden="true" style={{fontSize:"25px"}}></i></td>
                                                <td><NavLink to={"/profile"} style={{lineHeight: "1"}}>Pihas Profile</NavLink></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </h4>
                                <ul className="cbp-hrmenuT">
                                </ul>
                            </div>
                            <div style={{padding:"0", margin:"0"}} className="sub-menu-int">
                                <h4 style={{paddingTop:"15px", paddingBottom:"0px"}}>
                                    <table border="0">
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-angle-double-right" aria-hidden="true" style={{fontSize:"25px"}}></i></td>
                                                <td><NavLink to={"/about"} style={{lineHeight: "1"}}>About Us</NavLink></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </h4>
                                <ul className="cbp-hrmenuT">
                                </ul>
                            </div>
                        </div>
                        {/* <!-- /cbp-hrsub-inner --> */}
                    </div>
                    {/* <!-- /cbp-hrsub --> */}
                </li>
                {/* <li>
                    <a href="#" className="hvr-underline-from-center" style={{borderRadius:"00px 00px 00px 00px", fontWeight:"normal !important", color:"#ffffff !important"}}>Online Application</a>
                    <div className="cbp-hrsub" style={{zIndex:"1", backgroundColor:"#076ead"}}>
                        <div className="cbp-hrsub-inner">
                            <div style={{padding:"0", margin:"0"}} className="sub-menu-int">
                                <h4 style={{paddingTop:"15px", paddingBottom:"0px"}}>
                                    <table border="0">
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-angle-double-right" aria-hidden="true" style={{fontSize:"25px"}}></i></td>
                                                <td><a href="https://kamsaris.ac.tz/oas/kam" style={{lineHeight: "1"}}>Online Application</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </h4>
                                <ul className="cbp-hrmenuT">
                                </ul>
                            </div>
                        </div>
                        {/* <!-- /cbp-hrsub-inner --> */}
                    {/* </div> */}
                    {/* <!-- /cbp-hrsub --> */}
                {/* </li> */}
                {/* <li>
                    <a href="#" className="hvr-underline-from-center" style={{borderRadius:"00px 00px 00px 00px", fontWeight:"normal !important", color:"#ffffff !important"}}>Academic</a>
                    <div className="cbp-hrsub" style={{zIndex:1, backgroundColor:"#076ead"}}>
                        <div className="cbp-hrsub-inner">
                            <div style={{padding:"0", margin:"0"}} className="sub-menu-int">
                                <h4 style={{paddingTop:"15px", paddingBottom:"0px"}}>
                                    <table border="0">
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-angle-double-right" aria-hidden="true" style={{fontSize:"25px"}}></i></td>
                                                <td><a href="https://kamsaris.ac.tz/" style={{lineHeight: "1"}}>KAM-Saris</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </h4>
                                <ul className="cbp-hrmenuT">
                                </ul>
                            </div>
                            <div style={{padding:"0", margin:"0"}} className="sub-menu-int">
                                <h4 style={{paddingTop:"15px", paddingBottom:"0px"}}>
                                    <table border="0">
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-angle-double-right" aria-hidden="true" style={{fontSize:"25px"}}></i></td>
                                                <td><a href="https://kamsaris.ac.tz/" style={{lineHeight: "1"}}>E-Library</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </h4>
                                <ul className="cbp-hrmenuT">
                                </ul>
                            </div>
                            <div style={{padding:"0", margin:"0"}} className="sub-menu-int">
                                <h4 style={{paddingTop:"15px", paddingBottom:"0px"}}>
                                    <table border="0">
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-angle-double-right" aria-hidden="true" style={{fontSize:"25px"}}></i></td>
                                                <td><a href="https://kamsaris.ac.tz/" style={{lineHeight: "1"}}>E-Learning</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </h4>
                                <ul className="cbp-hrmenuT">
                                </ul>
                            </div>
                        </div>
                        {/* <!-- /cbp-hrsub-inner --> */}
                    {/* </div> */}
                    {/* <!-- /cbp-hrsub --> */}
                {/* </li> */}
                {/* <li>
                    <a href="#" className="hvr-underline-from-center" style={{borderRadius:"00px 00px 00px 00px", fontWeight:"normal !important", color:"#ffffff !important"}}>Available Programs</a>
                    <div className="cbp-hrsub" style={{zIndex:1, backgroundColor:"#076ead"}}>
                        <div className="cbp-hrsub-inner">
                            <div style={{padding:"0", margin:"0"}} className="sub-menu-int">
                                <h4 style={{paddingTop:"15px", paddingBottom:"0px"}}>
                                    <table border="0">
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-angle-double-right" aria-hidden="true" style={{fontSize:"25px"}}></i></td>
                                                <td><a href="available-programs" style={{lineHeight: "1"}}>KAM PROGRAMS</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </h4>
                                <ul className="cbp-hrmenuT">
                                </ul>
                            </div>
                        </div>
                        {/* <!-- /cbp-hrsub-inner --> */}
                    {/* </div> */}
                    {/* <!-- /cbp-hrsub --> */}
                {/* </li> */} 
                <li>
                    {/* <a href="#" className="hvr-underline-from-center" style={{borderRadius:"00px 00px 00px 00px", fontWeight:"normal !important", color:"#ffffff !important"}}>Contact Us</a> */}
                    <div className="cbp-hrsub" style={{zIndex:1, backgroundColor:"#076ead"}}>
                        <div className="cbp-hrsub-inner">
                            <div style={{padding:"0", margin:"0"}} className="sub-menu-int">
                                <h4 style={{paddingTop:"15px", paddingBottom:"0px"}}>
                                    <table border="0">
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-angle-double-right" aria-hidden="true" style={{fontSize:"25px"}}></i></td>
                                                <td><NavLink to={"/contact"} style={{lineHeight: "1"}}>Contact Us</NavLink></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </h4>
                                <ul className="cbp-hrmenuT">
                                </ul>
                            </div>
                        </div>
                        {/* <!-- /cbp-hrsub-inner --> */}
                    </div>
                    {/* <!-- /cbp-hrsub --> */}
                </li>
                <li>
                    {/* <a href="#" className="hvr-underline-from-center" style={{borderRadius:"00px 00px 00px 00px", fontWeight:"normal !important", color:"#ffffff !important"}}>News and Events</a> */}
                    <div className="cbp-hrsub" style={{zIndex:1, backgroundColor:"#076ead"}}>
                        <div className="cbp-hrsub-inner">
                            <div style={{padding:"0", margin:"0"}} className="sub-menu-int">
                                <h4 style={{paddingTop:"15px", paddingBottom:"0px"}}>
                                    <table border="0">
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-angle-double-right" aria-hidden="true" style={{fontSize:"25px"}}></i></td>
                                                <td><NavLink to={"/news"} style={{lineHeight: "1"}}>News and Events</NavLink></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </h4>
                                <ul className="cbp-hrmenuT">
                                </ul>
                            </div>
                        </div>
                        {/* <!-- /cbp-hrsub-inner --> */}
                    </div>
                    {/* <!-- /cbp-hrsub --> */}
                </li>

            </ul>
        </nav>
    </div>

        
    </>
  )
}

export default Headers;