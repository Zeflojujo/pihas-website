import "./SliderStyles.css";

function Slider() {
  return (
    <>
    <div style={{marginBottom:"10px"}}>
            

        <div className='body'>
            
            <div id="jssor_1" style={{position:"relative",  margin:"0 auto",  top:"0px",  left:"0px",  width:"980px",  height:"380px",  overflow:"hidden",  visibility:"hidden"}}>
                
                {/* <!-- Loading Screen --> */}
                <div data-u="loading" style={{position:"absolute",  top:"0px",  left:"0px"}}>
                    <div className='loadingDiv1'></div>
                    <div className='loadingDiv2'></div>
                </div>

                <div data-u="slides" style={{cursor:"default",  position:"relative",  top:"0px",  left:"0px",  width:"980px",  height: "380px",  overflow: "hidden"}}>

                    <div data-b="0" data-p="170.00" data-po="80% 55%">
                        <img data-u="image" src="../www/kamcollege/a76f3a7138.jpg" alt='defaultImage' />
                        <div data-u="caption" className="puk" data-t="10" style={{position:"absolute", top:"80px", fontSize:"20px", color:"#ffffff", textAlign:"left", backgroundColor:"#ffffff", padding:"10px 0 15px 15px", opacity:"0.7"}}>
                            <h1 style={{margin:"0px", padding:"0px", }}><a href="#" className="slider3-big">KAM COLLEGE LABORATORY</a></h1>
                            <h2 style={{margin:"0px", padding:"0px", marginBottom:"10px", }}><a href="#" className="slider3-small">Student are practising college laboratory</a></h2>
                            <h3 style={{margin:"0px", padding:"0px", }}><a className="slider3-link" href="https://saristz.ac.tz/oas/kam/home">APPLY ONLINE</a></h3>
                            <h2></h2>
                        </div>
                    </div>

                    <div data-b="0" data-p="170.00" data-po="80% 55%">
                        <img data-u="image" src="../www/kamcollege/477e1fc8fa.jpg" alt="defaultimage" />
                        <div data-u="caption" className="puk" data-t="10" style={{position:"absolute", top:"80px", fontSize:"20px", color:"#ffffff", textAlign:"left", backgroundColor:"#ffffff", padding:"10px 0 15px 15px", opacity:"0.7"}}>
                            <h1 style={{margin:"0px", padding:"0px"}}><a href="#" className="slider3-big">GRADUATION DAY</a></h1>
                            <h2 style={{margin:"0px", padding:"0px", marginBottom:"10px"}}><a href="#" className="slider3-small">KAM - Graduation Ceremony Images</a></h2>
                            <h3 style={{margin:"0px", padding:"0px"}}><a className="slider3-link" href="https://saristz.ac.tz/oas/kam/home">JIUNGE NASI SASA</a></h3>
                            <h2></h2>
                        </div>
                    </div>

                    <div data-b="0" data-p="170.00" data-po="80% 55%">
                        <img data-u="image" src="../www/kamcollege/f4557db350.jpg" alt="defaultImage"/>
                        <div data-u="caption" className="puk" data-t="10" style={{position:"absolute", top:"80px", fontSize:"20px", color:"#ffffff", textAlign:"left", backgroundColor:"#ffffff", padding:"10px 0 15px 15px", opacity:"0.7"}}>
                            <h1 style={{margin:"0px", padding:"0px"}}><a href="#" className="slider3-big">KAM COLLEGE STAFF TEAM</a></h1>
                            <h2 style={{margin:"0px", padding:"0px", marginBottom:"10px"}}><a href="#" className="slider3-small">College staff team on Medical lab</a></h2>
                            <h3 style={{margin:"0px", padding:"0px"}}><a className="slider3-link" href="https://saristz.ac.tz/oas/kam/home">APPLY NOW</a></h3>
                            <h2></h2>
                        </div>
                    </div>

                    <div data-b="0" data-p="170.00" data-po="80% 55%">
                        <img data-u="image" src="../www/kamcollege/62dfa6a6a5.jpg" alt="defaultImage"/>
                        <div data-u="caption" className="puk" data-t="10" style={{position:"absolute", top:"80px", fontSize:"20px", color:"#ffffff", textAlign:"left", backgroundColor:"#ffffff", padding:"10px 0 15px 15px", opacity:"0.7"}}>
                            <h1 style={{margin:"0px", padding:"0px"}}><a href="#" className="slider3-big">KAM COLLEGE</a></h1>
                            <h2 style={{margin:"0px", padding:"0px", marginBottom:"10px"}}><a href="#" className="slider3-small">Students are on className session</a></h2>
                            <h3 style={{margin:"0px", padding:"0px"}}><a className="slider3-link" href="https://saristz.ac.tz/oas/kam/home">Apply Now</a></h3>
                            <h2></h2>
                        </div>
                    </div>

                    <div data-b="0" data-p="170.00" data-po="80% 55%">
                        <img data-u="image" src="../www/kamcollege/f4416298e2.png" alt="defaultImage"/>
                        <div data-u="caption" className="puk" data-t="10" style={{position:"absolute", top:"80px", fontSize:"20px", color:"#ffffff", textAlign:"left", backgroundColor:"#ffffff", padding:"10px 0 15px 15px", opacity:"0.7"}}>
                            <h2></h2>
                        </div>
                    </div>

                    <div data-b="0" data-p="170.00" data-po="80% 55%">
                        <img data-u="image" src="../www/kamcollege/99b7ddbc0c.png" alt="defaultImage"/>
                        <div data-u="caption" className="puk" data-t="10" style={{position:"absolute", top:"80px", fontSize:"20px", color:"#ffffff", textAlign:"left", backgroundColor:"#ffffff", padding:"10px 0 15px 15px", opacity:"0.7"}}>
                            <h2></h2>
                        </div>
                    </div>
                </div>
                {/* // <!-- Bullet Navigator --> */}

                {/* // <!-- Arrow Navigator --> */}
                <span data-u="arrowleft" className="jssora22l" style={{top:"0px", left:"10px", width:"40px", height:"58px"}} data-autocenter="2"></span>
                <span data-u="arrowright" className="jssora22r" style={{top:"0px", right:"10px", width:"40px", height:"58px"}} data-autocenter="2"></span>
            </div> 
        </div>

    </div>
    </>
    
        
  )
}

export default Slider;