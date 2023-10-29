import React, { useCallback, useEffect, useRef, useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"

function SlideShow() {
  const slides = [
    {
      url: require("../../assets/kamcollege/pihasBuild.jpg")
    },
    {
      url: require("../../assets/kamcollege/library1.jpg")
    },
    {
      url: require("../../assets/kamcollege/labo1.jpg")
    },
    {
      url: require("../../assets/kamcollege/library4.jpg")
    },
  ];

  // const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
    return setCurrentIndex(newIndex);
  }

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    return setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  // useEffect(() => {
  //   if(timerRef.current){
  //     clearTimeout(timerRef.current);
  //   }
  //   timerRef.current = setTimeout(() => {
  //     nextSlide();
  //   }, 2000);

  //   return () => clearTimeout(timerRef.current);
  // }), [nextSlide];

  // useEffect(() => {

  //  setTimeout(() => {
  //     nextSlide();
  //   }, 2000);

  // }), [nextSlide];

  return (
    <div className="max-w-[100%] h-[500px] w-full m-auto py-2 px-2 relative group">
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`, backgroundSize:"cover", backgroundRepeat: "no-repeat"}} className="w-full h-full rounded-2xl bg-center duration-500"></div>

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
