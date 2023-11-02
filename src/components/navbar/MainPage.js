import { NavLink } from "react-router-dom";
import "./NavbarStyles.css";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";

function MainPage() {
    const [showme, setShowMe] = useState(false);
    const handleShowMe = () => {
      setShowMe(!showme);
    };

  return (
    <>
      {/* main */}
      <div
        className="main duration-300 transition-all"
        id="showmehidemeresmenu"
        style={{ height: "auto", backgroundColor: "#a19810", "zIndex":"999" }}
      >
        
        <div
          className="navbarheader4 duration-300"
          style={{ width: "95%", margin: "auto", color: "#fff" }}
        >
            <div className="areseheader4Menu">
            <NavLink
              href="available-programs"
              style={{ borderRadius: "00px 00px 00px 00px", backgroundColor: "#a19810" }}
            >
              <BiMenu onClick={handleShowMe} size={24} />
            </NavLink>
          </div>

          <div className="areseheader4">
            <NavLink to={"/"} style={{ borderRadius: "00px 00px 00px 00px", padding: "16px" }}>
              Home
            </NavLink>
          </div>
          <div className="dropdownheader4">
            <button
              className="dropbtnheader4"
              style={{ borderRadius: "00px 00px 00px 00px" }}
            >
              About Us
              <i className="fa fa-angle-double-down" aria-hidden="true"></i>
            </button>
            <div className="dropdownheader4-content">
              <NavLink to={"/profile"} style={{ lineHeight: 1 }}>
                Pihas Profile
              </NavLink>
              <NavLink to={"/about"} style={{ lineHeight: "1" }}>
                Mission, Vision & Objectives
              </NavLink>
            </div>
          </div>
          <div className="areseheader4">
            <NavLink
              href="https://kamsaris.ac.tz/oas/kam"
              style={{ borderRadius: "00px 00px 00px 00px" }}
            >
              Online Application
            </NavLink>
          </div>
          <div className="dropdownheader4">
            <button
              className="dropbtnheader4"
              style={{ borderRadius: "00px 00px 00px 00px" }}
            >
              Academic
              <i className="fa fa-angle-double-down" aria-hidden="true"></i>
            </button>
            <div className="dropdownheader4-content">
              <NavLink
                href="https://kamsaris.ac.tz/"
                style={{ lineHeight: "1" }}
              >
                PIHAS-Saris
              </NavLink>
              <NavLink
                href="https://kamsaris.ac.tz/"
                style={{ lineHeight: "1" }}
              >
                E-Library
              </NavLink>
              <NavLink
                href="https://kamsaris.ac.tz/"
                style={{ lineHeight: "1" }}
              >
                E-Learning
              </NavLink>
            </div>
          </div>
          
          <div className="areseheader4">
            <NavLink
              to={"/contact"}
              style={{ borderRadius: "00px 00px 00px 00px" }}
            >
              Contact Us
            </NavLink>
          </div>
          <div className="areseheader4">
            <NavLink
              to={"/news"}
              style={{ borderRadius: "00px 00px 00px 00px" }}
            >
              News and Events
            </NavLink>
          </div>
        </div>
      </div>




      {/* MenuItem */}
      <div
        className="main duration-300"
        id="showmehidemeresmenu1"
        style={{ display: showme ? "block" : "none", backgroundColor: "#a19810", }}
      >
        <nav
          id="cbp-hrmenu"
          className="cbp-hrmenu duration-300"
          style={{ marginTop: "-5px", backgroundColor: "#a19810", color: "white !important" }}
        >
          <ul className="duration-300 pl-3 pr-3 bg-none" style={{ width: "100% !important", backgroundColor: "#a19810" }}>
            <li>
              <div
                className="cbp-hrsub"
                style={{ zIndex: "1", backgroundColor: "#a19810" }}
              >
                <div className="cbp-hrsub-inner">
                  <div
                    style={{ padding: "0", margin: "0" }}
                    className="sub-menu-int"
                  >
                    <h4 style={{ paddingTop: "15px", paddingBottom: "0px" }}>
                      <table border="0">
                        <tbody>
                          <tr>
                            <td>
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                                style={{ fontSize: "25px" }}
                              ></i>
                            </td>
                            <td>
                              <NavLink
                                to={"/"}
                                style={{
                                  lineHeight: "1",
                                  textDecoration: "none",
                                }}
                              >
                                Home
                              </NavLink>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </h4>
                    <ul className="cbp-hrmenuT"></ul>
                  </div>
                </div>
                {/* <!-- /cbp-hrsub-inner --> */}
              </div>
              {/* <!-- /cbp-hrsub --> */}
            </li>

            <li>
              {/* <a href="#" className="hvr-underline-from-center" style={{padding:"0", margin:"0", borderRadius:"00px 00px 00px 00px", fontWeight:"normal !important", color:"#ffff00 !important"}}>About Us</a> */}
              <div
                className="cbp-hrsub"
                style={{ zIndex: "1", backgroundColor: "#a19810" }}
              >
                <div className="cbp-hrsub-inner">
                  <div
                    style={{ padding: "0", margin: "0" }}
                    className="sub-menu-int"
                  >
                    <h4 style={{ paddingTop: "15px", paddingBottom: "0px" }}>
                      <table border="0">
                        <tbody>
                          <tr>
                            <td>
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                                style={{ fontSize: "25px" }}
                              ></i>
                            </td>
                            <td>
                              <NavLink
                                to={"/profile"}
                                style={{ lineHeight: "1" }}
                              >
                                Pihas Profile
                              </NavLink>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </h4>
                    <ul className="cbp-hrmenuT"></ul>
                  </div>
                </div>
                {/* <!-- /cbp-hrsub-inner --> */}
              </div>
              {/* <!-- /cbp-hrsub --> */}
            </li>

            <li>
              {/* <a href="#" className="hvr-underline-from-center" style={{padding:"0", margin:"0", borderRadius:"00px 00px 00px 00px", fontWeight:"normal !important", color:"#ffff00 !important"}}>About Us</a> */}
              <div
                className="cbp-hrsub"
                style={{ zIndex: "1", backgroundColor: "#a19810" }}
              >
                <div className="cbp-hrsub-inner">
                  <div
                    style={{ padding: "0", margin: "0" }}
                    className="sub-menu-int"
                  >
                    <h4 style={{ paddingTop: "15px", paddingBottom: "0px" }}>
                      <table border="0">
                        <tbody>
                          <tr>
                            <td>
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                                style={{ fontSize: "25px" }}
                              ></i>
                            </td>
                            <td>
                              <NavLink
                                to={"/about"}
                                style={{ lineHeight: "1" }}
                              >
                                About Us
                              </NavLink>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </h4>
                    <ul className="cbp-hrmenuT"></ul>
                  </div>
                </div>
                {/* <!-- /cbp-hrsub-inner --> */}
              </div>
              {/* <!-- /cbp-hrsub --> */}
            </li>
            {/* <li>
                    <a href="#" className="hvr-underline-from-center" style={{borderRadius:"00px 00px 00px 00px", fontWeight:"normal !important", color:"#ffffff !important"}}>Academic</a>
                    <div className="cbp-hrsub" style={{zIndex:1, backgroundColor:"#a19810"}}>
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
                    <div className="cbp-hrsub" style={{zIndex:1, backgroundColor:"#a19810"}}>
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
              <div
                className="cbp-hrsub"
                style={{ zIndex: 1, backgroundColor: "#a19810" }}
              >
                <div className="cbp-hrsub-inner">
                  <div
                    style={{ padding: "0", margin: "0" }}
                    className="sub-menu-int"
                  >
                    <h4 style={{ paddingTop: "15px", paddingBottom: "0px" }}>
                      <table border="0">
                        <tbody>
                          <tr>
                            <td>
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                                style={{ fontSize: "25px" }}
                              ></i>
                            </td>
                            <td>
                              <NavLink
                                to={"/contact"}
                                style={{ lineHeight: "1" }}
                              >
                                Contact Us
                              </NavLink>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </h4>
                    <ul className="cbp-hrmenuT"></ul>
                  </div>
                </div>
                {/* <!-- /cbp-hrsub-inner --> */}
              </div>
              {/* <!-- /cbp-hrsub --> */}
            </li>
            <li>
              {/* <a href="#" className="hvr-underline-from-center" style={{borderRadius:"00px 00px 00px 00px", fontWeight:"normal !important", color:"#ffffff !important"}}>News and Events</a> */}
              <div
                className="cbp-hrsub"
                style={{ zIndex: 1, backgroundColor: "#a19810" }}
              >
                <div className="cbp-hrsub-inner">
                  <div
                    style={{ padding: "0", margin: "0" }}
                    className="sub-menu-int"
                  >
                    <h4 style={{ paddingTop: "15px", paddingBottom: "0px" }}>
                      <table border="0">
                        <tbody>
                          <tr>
                            <td>
                              <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"
                                style={{ fontSize: "25px" }}
                              ></i>
                            </td>
                            <td>
                              <NavLink to={"/news"} style={{ lineHeight: "1" }}>
                                News and Events
                              </NavLink>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </h4>
                    <ul className="cbp-hrmenuT"></ul>
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
  );
}

export default MainPage;
