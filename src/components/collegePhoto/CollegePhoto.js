import './CollegePhotoStyles.css';
import cumpus2 from '../../assets/kamcollege/library1.jpg';
import cumpus21 from '../../assets/kamcollege/pihasBuild.jpg';
// import cumpus22 from '../../assets/PIHAScollege/3c2e264532.jpg';
// import cumpusmain from '../../assets/PIHAScollege/bc8520c3bb.jpg';
// import cumpusmain1 from '../../assets/PIHAScollege/b45b436498.jpg';
// import cumpusmain2 from '../../assets/PIHAScollege/3c2e264532.jpg';

function CollegePhoto() {
  return (
    <div style={{marginBottom:"10px"}}>
        <div style={{clear:"both"}} id="campus2_div">
            <div className="campus2_heading">
                <h2 className="campus2_h2h">PIHAS COLLEGE PHOTOS</h2>
                <p className="campus2_h2h2">(PIHAS college photos)</p>
            </div>
            <div className="campus2_list1">
                <div className="campus2_div1">
                    <table style={{width:"100%"}}>
                        <tr>
                            <td style={{width:"4.5vw"}}><img src={cumpus2} alt="img1" className="campus2_ico1" /></td>
                            <td style={{textAlign:"left"}}>
                                <h2>PIHAS-LIBRARY</h2>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style={{textAlign:"center"}}>
                                <div className="campus2_oles">
                                    <p style={{margin:"0", padding:"0"}}>
                                        <p>Student are studying at college library</p>
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </table>

                     {/* overflow-y:scroll;margin-top:-10px; <p style={{marginTop:"0px"}}>ok</p> */}

                    <img src={cumpus2} alt="img2" className="campus2_ico" />
                </div>
                <div className="campus2_div1">
                    <table style={{width:"100%"}}>
                        <tr>
                            <td style={{width:"4.5vw"}}><img src={cumpus21} alt="img1" className="campus2_ico1" /></td>
                            <td style={{textAlign:"left"}}>
                                <h2>PIHAS-HOSTEL</h2>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style={{textAlign:"center"}}>
                                <div className="campus2_oles">
                                    <p style={{margin:"0", padding:"0"}}>
                                        <p>PIHAS College hostel buildings view</p>
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </table>

                     {/* overflow-y:scroll;margin-top:-10px; <p style="margin-top:0px;">ok</p> */}

                    <img src={cumpus21} alt="img2" className="campus2_ico" />
                </div>
                <div className="campus2_div1">
                    <table style={{width:"100%"}}>
                        <tr>
                            <td style={{width:"4.5vw"}}><img src={cumpus21} alt="img1" className="campus2_ico1" /></td>
                            <td style={{textAlign:"left"}}>
                                <h2>PIHAS-DOCTORS</h2>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style={{textAlign:"center"}}>
                                <div className="campus2_oles">
                                    <p style={{margin:"0", padding:"0"}}>
                                        <p>Doctors at PIHAS College discussing some issues</p>
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </table>
                     {/* overflow-y:scroll;margin-top:-10px; <p style="margin-top:0px;">ok</p> */}

                    {/* <img src={cumpusmain2} alt="img2" className="campus2_ico" /> */}
                </div>
            </div>
            <p className="campus2_no-more-a"><button className="campus2_loadmore1" data-page="2">More photo 3</button></p>
        </div>
    </div>
  )
}

export default CollegePhoto