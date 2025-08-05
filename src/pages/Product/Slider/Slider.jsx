import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.scss"

export default function SimpleSlider({ product }) {
  const settings = {
   dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <section className="slider-container-product">
      <div id="product-data-in-slider">
        <h3>{product.title}</h3>
      </div>
      <Slider {...settings}>
        <div>
          <img src={product.images.product_show[0]} alt={product.title} />
        </div>
        <div>
          <img src={product.images.product_show[1]} alt={product.title} />
        </div>
      </Slider>
      {/* <Slider {...settings}>
        {product.images.product_show.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`${product.title} ${index + 1}`} />
          </div>
        ))}
      </Slider> */}

    </section>
  );
}


