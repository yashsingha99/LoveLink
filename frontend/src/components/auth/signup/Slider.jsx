import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ImageSlider.css'; // Import your custom CSS file for animations

const Slider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 console.log(images);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full">
      <TransitionGroup>
        {/* {images.map((image, index) => ( */}
          <CSSTransition
            // key={index}
            timeout={1000}
            classNames="fade"
            unmountOnExit
          >
            {/* {index === currentIndex && ( */}
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="absolute inset-0 w-full h-full object-cover "
              />
            {/* )} */}
          </CSSTransition>
        {/* ))} */}
      </TransitionGroup>
    </div>
  );
};

export default Slider;