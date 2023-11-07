import logo from "../../assets/kamcollege/logo.png";
import head from "../../assets/kamcollege/42853ef933.png";
import { Link } from "react-router-dom";

function Headers() {
  
  return (
    <>
      {/* header */}
      <div
        className="clearfix"
        style={{
          marginTop: "25px",
          marginBottom: "30px",
          height: "auto !important",
          backgroundColor: "white !important",
          paddingBottom: "5px !important",
        }}
      >
        <div className="header4_logo1">
          <img src={logo} alt="defualtImage" />
        </div>
        <div className="header4_logo2">
          <h1 style={{fontFamily: ""}}>PERAMIHO COLLEGE OF HEALTH AND ALLIED SCIENCES</h1>
          <span style={{ clear: "both" }}>FROM THE PEOPLE FOR THE PEOPLE</span>
          <div className="header4_links">
            <a
              href="https://saristz.ac.tz/login/kam"
              style={{
                display: "inline-block",
                padding: "5px 10px 5px 10px",
                border: "2px solid #008000",
                borderRadius: "20px 20px 20px 20px",
              }}
              className=" text-[12px] sm:text-[12px] lg:text-[16px]"

            >
              PIHAS-SARIS
            </a>
            <Link
              to="/"
              style={{
                display: "inline-block",
                padding: "5px 10px 5px 10px",
                marginLeft: "5px",
                border: "2px solid #008000",
                borderRadius: "20px 20px 20px 20px",
              }}
              className="text-[12px] sm:text-[12px] lg:text-[16px]"

            >
              Apply-Now
            </Link>
          </div>
        </div>
        <div className="header4_logo3">
          <img src={head} alt="defaultImage" />
        </div>
      </div>

      
    </>
  );
}

export default Headers;
