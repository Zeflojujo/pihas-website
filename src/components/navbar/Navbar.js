import './headToper.css';
import head from '../../assets/kamcollege/42853ef933.png';
import logo from '../../assets/kamcollege/logo.png';
import flag from '../../assets/flags/us.png';


function Navbar() {
  return (
    <>

        <div class="container container_header4">
        <div class="header4_toper">
            <div class="header4_toper1">
                <span class="header4_title"><i style={{color:"#f7db05"}} class="fa fa-envelope-o" aria-hidden="true"></i> Email : info@pihas.ac.tz  </span>
                <span><i  style={{color:"#f7db05"}} class="fa fa-phone" aria-hidden="true"></i> Call : +255-765-117-145</span>
            </div>

            <div class="dropdown_header4">
                <div class="dropbtn" style={{width:"80px", overflow:"hidden", padding:"2px 10px 2px 4px"}}>
                    <span style={{float:"left"}}><img src={flag}/></span>
                    <span style={{marginTop:"-3px"}}>Eng <i class="fa fa-angle-down"aria-hidden="true"></i></span>
                </div>
                <div class="dropdown_header4-content">
                </div>
            </div>

        </div>
        </div>


        

           
        

        

    </>
    
  )
}

export default Navbar