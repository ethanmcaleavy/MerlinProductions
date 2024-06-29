import React, { useState, useEffect } from 'react';
import BanitoStill from '../../assets/images/BanitoStill.jpg';
import MMStill from '../../assets/images/MMStill.jpg';
import './Carousel.css';

const images = [
  { src: BanitoStill, alt: 'Banito Still' },
  { src: MMStill, alt: 'MM Still' }
];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 7000); // Change slide every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-carousel">
      <div className="carousel-image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
