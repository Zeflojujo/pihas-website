import React, { useEffect, useRef, useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import loading from '../../assets/100/slider/loading.gif';

function SlideShow() {
  const slides = [
    {
      url: require("../../assets/kamcollege/pihasBuild.jpg"),
      title: "PIHAS BUILDING", 
      description: "Pihas administration Block"
    },
    {
      url: require("../../assets/kamcollege/library1.jpg"),
      title: "PIHAS LIBRARY", 
      description: "Pihas administration Block "
    },
    {
      url: require("../../assets/kamcollege/labo1.jpg"),
      title: "PIHAS", 
      description: "Pihas administration Block"
    },
    {
      url: require("../../assets/kamcollege/library2.jpg"),
      title: "PIHAS BUILDING", 
      description: "Pihas administration Block"
    },
    {
      url: require("../../assets/kamcollege/library4.jpg"),
      title: "PIHAS BUILDING", 
      description: "Pihas administration Block "
    },
    {
      url: require("../../assets/kamcollege/library4.jpg"),
      title: "PIHAS BUILDING", 
      description: "Pihas administration Block "
    }
  ];

  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
    return setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    return setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if(timerRef.current){
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, 7000);

    return () => clearTimeout(timerRef.current);
  });


  return (

  
    <div className="max-w-[100%] h-[560px] w-full m-auto py-2 pb-2 sm:px-0  relative group">

        <div style={{backgroundImage: `url(${slides[currentIndex].url})`, backgroundSize:"cover",fontFamily:"times", backgroundRepeat: "no-repeat", resize:"contain"}} className="absolute flex justify-center text-gray-700 items-center m-auto w-full h-full rounded-2xl bg-center duration-700 transition-all">
          <div className="absolute p-0 flex justify-center items-center m-auto  duration-300 animate-bounce">
            {
              currentIndex===0?
                <div className="rounded-md px-5 py-5 mx-2 mb-2" style={{backgroundColor: 'white'}}>
                  <h2 className="font-semibold text-center lg:text-3xl md:text-2xl sm:text-2xl text-2xl" style={{ color: "#a19810", fontFamily:"times"}}>PIHAS BUILDING</h2>
                  <p className="font-semibold mt-3 text-center lg:text-2xl md:text-1xl">Pihas Administration Block where the Pihas Student are registered</p>
                </div>
                : currentIndex===1?
                  <div className="rounded-md px-5 py-5 mx-2 mb-2" style={{backgroundColor: 'white'}}>
                    <h2 className="font-semibold text-center lg:text-3xl md:text-2xl sm:text-2xl text-2xl" style={{ color: "#a19810", fontFamily:"times"}}>PIHAS LIBRARY</h2>
                    <p className="font-semibold mt-3 text-center lg:text-2xl md:text-1xl">Pihas Administration Block</p>
                  </div>
                  :currentIndex===2?
                    <div className="rounded-md overflow:hidden px-5 py-5 mx-2 mb-2" style={{backgroundColor: 'white'}}>
                      <h2 className="font-semibold text-center lg:text-3xl md:text-2xl sm:text-2xl text-2xl" style={{ color: "#a19810", fontFamily:"times"}}>PIHAS - PHARMACY LABORATORY</h2>
                      <p className="font-semibold mt-3 text-center lg:text-2xl md:text-1xl">Student practices their studies at Pharmaceautical pihas laboratory</p>
                    </div>
                    :currentIndex===3?
                      <div className="rounded-md px-5 py-5 mx-2 mb-2" style={{backgroundColor: 'white'}}>
                        <h1 className="font-semibold text-center lg:text-3xl md:text-2xl sm:text-2xl text-2xl" style={{ color: "#a19810", fontFamily:"times"}}>PIHAS - GRADUATION DAY</h1>
                        <p className="font-semibold mt-3 text-center text-1xl lg:text-2xl md:text-1xl">Student during graduation ceremony</p>
                      </div>
                      
                      : currentIndex===4?
                        <div className="rounded-md px-5 py-5 mx-2 mb-2" style={{backgroundColor: 'white'}}>
                          <h2 className="font-semibold text-center lg:text-3xl md:text-2xl sm:text-2xl text-2xl" style={{ color: "#a19810", fontFamily:"times"}}>PIHAS LIBRARY</h2>
                          <p className="font-semibold mt-3 text-center lg:text-2xl md:text-1xl">Pihas Student when they are in Library for self studies</p>
                        </div>
                        :currentIndex===5?
                          <div className="rounded-md px-5 py-5 mx-2 mb-2" style={{backgroundColor: 'white'}}>
                            <h2 className="font-semibold text-center lg:text-3xl md:text-2xl sm:text-2xl text-2xl" style={{ color: "#a19810", fontFamily:"times"}}>PIHAS LIBRARY</h2>
                            <p className="font-semibold mt-3 text-center lg:text-2xl md:text-1xl">Pihas Student when they are in Library for self studies</p>
                          </div>
                          :""
            }
          </div>
            
        </div>


      {/* Left arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30}/> 
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default SlideShow;
