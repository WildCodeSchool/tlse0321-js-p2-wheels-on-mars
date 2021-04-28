import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const { length } = slides;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <MdKeyboardArrowLeft className="arrow" onClick={prevSlide} />
      {slides.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={slide}
        >
          {index === current && (
            <img src={slide.image} alt="RoverMap" className="image" />
          )}
        </div>
      ))}
      <MdKeyboardArrowRight className="arrow" onClick={nextSlide} />
    </section>
  );
};

export default ImageSlider;
