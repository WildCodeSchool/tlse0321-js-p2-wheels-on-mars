import React, { useState } from 'react';
import './Roadmap.css';
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
      <MdKeyboardArrowLeft
        className="left-arrow arrHover"
        onClick={prevSlide}
      />
      {slides.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={slide}
        >
          {index === current && (
            <div>
              <h2 className="Roadmap">{slide.text}</h2>
              <img src={slide.image} alt="RoverMap" className="image" />
            </div>
          )}
        </div>
      ))}
      <MdKeyboardArrowRight
        className="right-arrow arrHover"
        onClick={nextSlide}
      />
    </section>
  );
};

export default ImageSlider;
