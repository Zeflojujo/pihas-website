import './headToper.css';
import head from '../../assets/kamcollege/42853ef933.png';
import logo from '../../assets/kamcollege/logo.png';
import flag from '../../assets/flags/us.png';
import { MdOutlineMail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';


function Navbar() {
  return (
    <>

        <div className="container container_header4">
        <div className="header4_toper">
            <div className="header4_toper1">
                <span className="header4_title" style={{display: "flex", flexDirection: "row", gap: "10px"}}><MdOutlineMail color='#dc3545' size={18}/> Email : info@pihas.ac.tz  </span>
                <span style={{display: "flex", flexDirection: "row", rowGap: "10px", gap: "10px"}}><AiOutlinePhone color='#198754' size={18}/> Call : +255-765-117-145</span>
            </div>

            <div className="dropdown_header4">
                <div className="dropbtn" style={{width:"80px", overflow:"hidden", padding:"2px 10px 2px 4px"}}>
                    <span style={{float:"left"}}><img src={flag}/></span>
                    <span style={{marginTop:"-3px"}}>Eng <i className="fa fa-angle-down"aria-hidden="true"></i></span>
                </div>
                <div className="dropdown_header4-content">
                </div>
            </div>

        </div>
        </div>


        

           
        

        

    </>
    
  )
}

export default Navbar