
// import "./styles.css";

import VideoGallery from "../VideoGallery";
import CollegePhoto from "../collegePhoto/CollegePhoto";
import CourseList from "../courseList/CourseList";
import CourseOffered from "../courseOffered/CourseOffered";
import Footer from "../footer/Footer";
// import MenuItem from "../menueItems/MenuItem";
import Navbar from "../navbar/Navbar";
import Main from "../navbar/MainPage";
import Slider from "../slider/Slider";
import Visitor from "../visitors/Visitor";
import WelcomeMessage from "../welcomeMessage/WelcomeMessage";
import Header from "../navbar/Headers";
import SlideShow from "./SlideShow";

function Home() {
  return (
    <div className="App">

      <Navbar/>
      
      <Header/>

      {/* <MenuItem/> */}

      <Main/>

      {/* <Slider/> */}
      <SlideShow/>

      <WelcomeMessage/>

      <CourseOffered/>

      <Visitor/>

      <CourseList/>

      <CollegePhoto/>

      <VideoGallery/>

      <Footer/>
      
    </div>

  );
}

export default Home;
