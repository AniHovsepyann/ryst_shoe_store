import React, { useState } from "react";
import Slider from "react-slick";
import "./Slider.scss"

function DynamicSlides() {
  const [slides, setSlides] = useState([
    { header: "“A MUST-HAVE FOR EVERY ATHLETE“", text: "“I'm a review. Click to edit me and add text from a critic who has evaluated you and your work.”", name: "NAME", key: 1 },
    { header: "“A MUST-HAVE FOR EVERY ATHLETE“", text: "“I'm a review. Click to edit me and add text from a critic who has evaluated you and your work.”", name: "NAME", key: 2 },
    { header: "“A MUST-HAVE FOR EVERY ATHLETE“", text: "“I'm a review. Click to edit me and add text from a critic who has evaluated you and your work.”", name: "NAME", key: 3 },
    { header: "“A MUST-HAVE FOR EVERY ATHLETE“", text: "“I'm a review. Click to edit me and add text from a critic who has evaluated you and your work.”", name: "NAME", key: 4 }]);
  const handleClick = () => {
    setSlides(
      slides.length === 6 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : [1, 2, 3, 4, 5, 6]
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
  return (
    <div className="slider-container">
      {/* <button className="button" onClick={handleClick}>
        Click to change slide count
      </button> */}
      <Slider {...settings}>
        {slides.map(slide => {
          return (
            <div className="each" key={slide.key}>
              <div className="header-text">
                <h3>{slide.header}</h3>
                <blockquote>{slide.text}</blockquote>
              </div>
              <span>{slide.name}</span>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default DynamicSlides;
