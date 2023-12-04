import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Headers from "../navbar/Headers";
import MainPage from "../navbar/MainPage";

import "../news/NewsStyles.css";
import { useEffect, useState } from "react";
import axios from "../../api/axios";

const NEWS_URL = 'http://localhost:3500/news';

function News() {

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {

    async function fetchData() {
      try{

        await axios.get(NEWS_URL)
          .then((response) => {
            console.log(response.data);
            setNewsData(response.data);
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
    <>
      <Navbar />
      <Headers />
      <MainPage />

      <div className="flex flex-col justify-center text-center m-4">
        <h1 style={{fontFamily: 'times'}} className="font-bold text-2xl text-[#a19810]">NEWS, EVENTS AND DOWNLOADS</h1>
        <h2 className="font-semibold italic text-gray-500">(Get latest News and dowloads here)</h2>
      </div>

      <div style={{border: "1px solid #6ac5fc", borderRadius: "10px"}} className="border border-solid border-b-2 border-yellow-400 min:w-full bg-[#d7edfc] m-[1.8vw] px-[0.4vw] py-[0.8vw] border-r-4">
        
        
        <div>
          <h2 className="text-center text-lg bg-[#a19810] m-5 text-white">Latest News</h2>


          
          <div className=" md:flex-row px-2 grid grid-cols-1 md:grid-cols-2 gap-2">

            {newsData.map((item, index) => (
              <div className="w-full border border-solid border-blue-500 rounded-md m-3 px-2">
                <div className="tk1">
                  <p
                    title="New"
                    className="lib_new"
                    style={{
                      margin: "10px 0 0 10px",
                      width: "30px",
                      height: "30px",
                    }}
                  >
                    <img
                      src="https://schooling.co.tz/img/new.gif"
                      alt="defaultImage"
                      width="30"
                      height="30"
                    />
                  </p>
                </div>
                <div className="right-d">
                  <p className="font-bold">
                    {/* <a href="downloadxpsqds1/61" className="ck">
                      JOINING ISTRACTION KWA WATAKAO JIUNGA NA CHUO SEP 2023/2024
                    </a> */}
                    <a href="downloadxpsqds1/61" className="font-bold text-lg">
                      {item.title}
                    </a>
                  </p>

                  <p className="text-2xl">
                    <a href="/news" className="font-semibold text-base ">
                      {item.description}
                    </a>
                    {/* <a href="downloadxpsqds/61" className="ck">
                      JOINING ISTRACTION KWA WATAKAO JIUNGA NA CHUO SEP 2023/2024
                    </a> */}
                  </p>
                  <p className="ck1">Placed : 2023-07-01</p>
                </div>
              </div>
            ))}

          </div>

          <div className="more">
            <a href="News-and-events">More Downloads</a>
          </div>
        </div>
        
        </div>

      <Footer />
    </>
  );
}

export default News;
