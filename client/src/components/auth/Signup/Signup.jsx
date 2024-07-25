import React, { useEffect, useState } from "react";
import Page from "./Page";
import image1 from "../../../images/image1.jpeg";


import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./ImageSlider.css";

function Signup() {
  const image3 = 'https://i.ibb.co/hVPdCSd/89b53753c442ffcf7593f5ca1fe0f269.jpg'
  const image2 = 'https://i.ibb.co/yX1tGqG/d893ded3ac8f1dc107e1f6e83e1e23ed.jpg'
  const images = [image2, image3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 3000
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="flex transition-all w-full  h-full">
     
          {/* <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="imageChanger rounded-3xl ease-out  inset-0 w-1/3 h-full object-cover "
          /> */}
      
      <Page />
    </div>
  );
}
export default Signup;
