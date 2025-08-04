import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.scss"

export default function SimpleSlider({product}) {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
    <section className="slider-container-product">
      <Slider {...settings}>
          <img src={product.images.product_show[0]} alt={product.title} />
          <img src={product.images.product_show[1]} alt={product.title} />
      </Slider>
    </section>
  );
}



{/* <section className={styles["slider-container"]}>
  <Slider {...settings}>
    <div>
      <img className={styles.image1} src={product.images.product_show[0]} alt={product.title} />
    </div>
    <div>
      <img className={styles.image2} src={product.images.product_show[1]} alt={product.title} />
    </div>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
  </Slider>
</section>  */}