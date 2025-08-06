// import React, { Component } from "react";
// import Slider from "react-slick";
// import "./Slider.scss"

// export default function SimpleSlider({ product, styles }) {
//   const settings = {
//     dots: true,
//     fade: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     waitForAnimate: false
//   };
//   return (
//     <section className="slider-container-product">
//       <div className={styles["product-data-in-slider"]}>
//         <h3>{product.title}</h3>
//         <p className={styles.sku}>SKU: <span>{product.sku}</span></p>
//         <div className="price-pt"><ins>${product.price}</ins> <del>${product.old_price ?? ""}</del></div>
//         <div className={styles["quantity-pt"]}>
//           <label>Quantity</label>
//           <div className={styles["input-container"]}>
//             <input value="1" type="number" className={styles.input} />
//             <div className={styles.spinner}>
//               <button type="button" className={`${styles.up} ${styles.button}`}>
//                 <i className={`bi bi-dash-lg ${styles.black}`}></i>
//               </button>
//               <button type="button" className={`${styles.down} ${styles.button}`}>
//                 <i className={`bi bi-plus-lg ${styles.black}`}></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Slider {...settings}>
//         <div>
//           <img src={product.images.product_show[0]} alt={product.title} />
//         </div>
//         <div>
//           <img src={product.images.product_show[1]} alt={product.title} />
//         </div>
//       </Slider>
//       {/* <Slider {...settings}>
//         {product.images.product_show.map((img, index) => (
//           <div key={index}>
//             <img src={img} alt={`${product.title} ${index + 1}`} />
//           </div>
//         ))}
//       </Slider> */}

//     </section>
//   );
// }


import React, { useState } from "react";
import Slider from "react-slick";
import "./Slider.scss";

export default function SimpleSlider({ product, styles }) {
  const [quantity, setQuantity] = useState(1);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    if (val === "-" || parseInt(val) < 1) {
      setQuantity(1);
    } else {
      setQuantity(parseInt(val));
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <section className="slider-container-product">
      <div className={styles["product-data-in-slider"]}>
        <h3>{product.title}</h3>
        <p className={styles.sku}>
          SKU: <span>{product.sku}</span>
        </p>
        <div className="price-pt">
          <ins>${product.price}</ins>{" "}
          <del>${product.old_price ?? ""}</del>
        </div>

        <div className={styles["quantity-pt"]}>
          <label>Quantity</label>
          <div className={styles["input-container"]}>
            <input
              type="number"
              className={styles.input}
              value={quantity}
              onChange={handleInputChange}
              min={1}
            />
            <div className={styles.spinner}>
              <button
                type="button"
                className={`${styles.up} ${styles.button}`}
                onClick={handleDecrement}
                disabled={quantity <= 1}
              >
                <i className={`bi bi-dash-lg ${styles.black}`}></i>
              </button>
              <button
                type="button"
                className={`${styles.down} ${styles.button}`}
                onClick={handleIncrement}
              >
                <i className={`bi bi-plus-lg ${styles.black}`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Slider {...settings}>
        <div>
          <img
            src={product.images.product_show[0]}
            alt={product.title}
          />
        </div>
        <div>
          <img
            src={product.images.product_show[1]}
            alt={product.title}
          />
        </div>
      </Slider>

      {/* Եթե ուզում ես բոլոր նկարները ցիկլով ավելացնել՝ այս մեկն ակտիվացրու */}
      {/*
      <Slider {...settings}>
        {product.images.product_show.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`${product.title} ${index + 1}`} />
          </div>
        ))}
      </Slider>
      */}
    </section>
  );
}
