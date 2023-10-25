import "./CourseListStyles.css";

import nursing from '../../assets/kamcollege/a933abda64.jpg';
import clinical from '../../assets/kamcollege/9196b537cf.jpg';
import medical from '../../assets/kamcollege/427115f306.jpg';

function CourseList() {
  return (
    <div style={{marginBottom:"10px", backgroundColor: "#a19810"}}>
        <div style={{clear:"both"}} id="photo_gallery1_div">
            <div className="photo_gallery1_heading">
                <h2 className="photo_gallery1_h2h">COURSE LIST</h2>
                <p className="photo_gallery1_h2h2">Certificate & Diploma</p>
            </div>
            <div className="photo_gallery1_list1">
                <div className="photo_gallery1_div1">
                    <img src={nursing} alt="defaultImage"/>
                    <div className="fiti"><i className="fa fa-camera-retro" aria-hidden="true"></i></div>
                    <h2 style={{paddingBottom:"10px"}}>NURSING</h2>
                    {/* <p style={{marginTop:"0px"}}>ok</p> */}
                    <div className="photo_gallery1_oles" style={{marginTop:"-25px"}}>
                        <p style={{margin:"0", padding:"0"}}>
                            <p>Certificate and Diploma in Nursing and Midwifery,Join us and earn competitive education proffesional on nursing and mieldwifery field;</p>
                        </p>
                    </div>
                    <div className="fut">
                        <div><i className="fa fa-twitter" aria-hidden="true"></i></div>
                        <div><i className="fa fa-youtube-play" aria-hidden="true"></i></div>
                        <div><i className="fa fa-instagram" aria-hidden="true"></i></div>
                        <div><i className="fa fa-facebook" aria-hidden="true"></i></div>
                    </div>
                </div>
                <div className="photo_gallery1_div1">
                    <img src={clinical} alt="defaultImage"/>
                    <div className="fiti"><i className="fa fa-camera-retro" aria-hidden="true"></i></div>
                    <h2 style={{paddingBottom:"10px"}}>CLINICAL MEDICINE</h2>
                    {/* <p style={{marginTop:"0px"}}>ok</p> */}
                    <div className="photo_gallery1_oles" style={{marginTop:"-25px"}}>
                        <p style={{margin:"0", padding:"0"}}>
                            <p>Certificate and Diploma in Clinical Medicine,Join us and earn competitive education proffesional on Clinical Medicine field;</p>
                        </p>
                    </div>
                    <div className="fut">
                        <div><i className="fa fa-twitter" aria-hidden="true"></i></div>
                        <div><i className="fa fa-youtube-play" aria-hidden="true"></i></div>
                        <div><i className="fa fa-instagram" aria-hidden="true"></i></div>
                        <div><i className="fa fa-facebook" aria-hidden="true"></i></div>
                    </div>
                </div>
                <div className="photo_gallery1_div1">
                    <img src={medical} alt="defaultImage"/>
                    <div className="fiti"><i className="fa fa-camera-retro" aria-hidden="true"></i></div>
                    <h2 style={{paddingBottom:"10px"}}>MEDICAL LABORATORY</h2>
                    {/* <p style={{marginTop:"0px"}}>ok</p> */}
                    <div className="photo_gallery1_oles" style={{marginTop:"-25px"}}>
                        <p style={{margin:"0", padding:"0"}}>
                            <p>Certificate and Diploma in Medical Laboratory,Join us and earn competitive education proffesional on Medical Laboratory field;</p>
                        </p>
                    </div>
                    <div className="fut">
                        <div><i className="fa fa-twitter" aria-hidden="true"></i></div>
                        <div><i className="fa fa-youtube-play" aria-hidden="true"></i></div>
                        <div><i className="fa fa-instagram" aria-hidden="true"></i></div>
                        <div><i className="fa fa-facebook" aria-hidden="true"></i></div>
                    </div>
                </div>
            </div>
            <p className="photo_gallery1_loadbutton"><button className="photo_gallery1_loadmore1" data-page="2">More Course 3</button></p>
        </div>
    </div>
  )
}

export default CourseList