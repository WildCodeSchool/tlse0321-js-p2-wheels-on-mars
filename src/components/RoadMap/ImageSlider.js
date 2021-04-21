import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import React, { useState, SliderData } from './SliderData';

const ImageSlider = ({ slide }) => {
  const [current, setCurrent] = useState(0);
  const { lenght } = slide;

  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slide) || slide.lenght <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => (
        <div className={index === current ? 'slide-active' : 'slide'} key={index}>
          {index === current && (<img src={slide.image} alt="Road map rover" className="image" />)}

        </div>
      ))}
    </section>
  );
};

export default ImageSlider;
