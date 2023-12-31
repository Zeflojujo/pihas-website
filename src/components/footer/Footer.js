import React, { useEffect, useState } from 'react'
import "./FooterStyles.css";
import director from '../../assets/kamcollege/logo.png';
import kamDsm from '../../assets/kamcollege/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NEWS_URL = 'http://localhost:3500/quickLink';

function Footer() {
    const [quickLinkData, setQuickLInkData] = useState([]);

    useEffect(() => {

        async function fetchData() {
          try{
    
            await axios.get(NEWS_URL)
              .then((response) => {
                console.log(response.data);
                setQuickLInkData(response.data);
              }).catch((error) => {
                  alert("news error", error.message);
                  console.log("news failed", error.message);
              })
        
            }catch(err){
              if(!err) {
                console.log('No server Response');
              }
              else if(!err?.status === 401) {
                console.log('Unauthorized');
              }
              else{
                console.log("rest error", err);
              }
            }
        }
        fetchData();
      },[]);

  return (
    <div style={{marginBottom:"-10px"}}>
                <div className="footer">
                    <div className="footer1">
                        <table style={{clear:"both"}}>
                            <tbody>
                                <tr>
                                    <td style={{textAlign:"center", padding:"4px 0 4px 0"}}><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i></td>
                                    <td style={{padding:"4px 0 4px 4px", fontSize:"16px"}}> <a className="hyp" href="/">Pihas college is Located at Ruvuma, PERAMIHO - Morogoro. PIHAS college of health sciences is fully registered and accredited by the National Council for Technical Education (NACTE) and working closely with department of Human Resource Development of the ministry of health,community development,Gender,Elderly and Children to ensure quality standards and integrity of academic in our college.</a></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="footer2">
                        <div style={{textAlign:"center"}}>
                            <div className="img_1" style={{margin: "auto", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                                <img src={director} alt='defaultimage' />
                                <div style={{textAlign:"center", marginTop:"5px", marginBottom:"15px"}}><span style={{margin:"0", padding:"0"}}><a style={{color:"#ffffff"}} className="img" href="/">Managing Director </a></span></div>
                            </div>
                        </div>

                    </div>
                    <div className="footer3 flex-col hover:text-green-800 ">
                        <h2 className="c1">QUICK LINKS</h2>
                        
                        {quickLinkData.map((item, index) => (
                            <table style={{clear:"both"}}>
                                <tbody>
                                    <tr>
                                        <td style={{textAlign:"center", padding:"4px 0 4px 0"}}><i className="fa fa-arrow-circle-o-right" aria-hidden="true" style={{color:"#ffff00"}}></i></td>
                                        <td style={{padding:"4px 0 4px 4px", fontSize:"16px"}}><a className="hyp" href={item.link}>{item.name}</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        ))}

                        <table style={{clear:"both"}}>
                            <tbody>
                                <tr>
                                    <td style={{textAlign:"center", padding:"4px 0 4px 0"}}><i className="fa fa-arrow-circle-o-right" aria-hidden="true" style={{color:"#ffff00"}}></i></td>
                                    <td style={{padding:"4px 0 4px 4px", fontSize:"16px"}}> <Link className="hyp" to="/admin/auth">Sign In</Link></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="footer4">
                        <div style={{textAlign:"center"}}>
                            <div className="img_1" style={{margin: "auto", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                                <img style={{width: "300px", height: "300px", border: "none", borderRadius: "none"}} src={kamDsm} alt='defaultimage' />
                                <div style={{textAlign:"center", marginTop:"5px", marginBottom:"15px"}}><span style={{margin:"0", padding:"0"}}><a style={{color:"#ffffff", fontSize: "24px"}} className="img" href="/">PIHAS - RUVUMA</a></span></div>
                            </div>
                        </div>

                    </div>

                    <div className="footer-last" style={{textAlign:"center", clear:"both", borderTop:"1px solid #fff"}}>
                        <p style={{fontFamily:"times", margin:"0px",padding:"0px", marginTop:"10px", color:"#ffffff"}}>Copyright &copy; PIHAS COLLEGE OF HEALTH SCIENCES-RUVUMA</p>
                        {/* <p style={{fontFamily:"times"}}>Designed by : <a href='/' style={{fontStyle:"italic"}}>Wahunzi Tech Co.</a> Contact:+255628000443</p> */}
                    </div>
                    
                </div>

                
            </div>
  )
}

export default Footer