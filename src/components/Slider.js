import React, { useState } from 'react';

const images = [
  '/images/ethan.jpg',
  '/images/roman.jpg',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button onClick={prevSlide}>Previous</button>
      <img src={images[currentIndex]} alt="slide" />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
