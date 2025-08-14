// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
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
        <div className={styles.top}>
          <h3>{product.title}</h3>
          <p className={styles.sku}>
            SKU: <span>{product.sku}</span>
          </p>
          <div className={styles["price-pt"]}>
            <ins>${product.price}</ins>{" "}
            <del>{product.old_price ? `$${product.old_price}` : ""}</del>
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
                  className={`${styles.down} ${styles.button}`}
                  onClick={handleIncrement}
                >
                  <i className={`bi bi-plus-lg ${styles.black}`}></i>
                </button>
                <button
                  type="button"
                  className={`${styles.up} ${styles.button}`}
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                >
                  <i className={`bi bi-dash-lg ${styles.black}`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles["addtocard-or-addtofavorites"]}>
            <button className={styles['add-to-cart']}>ADD TO CART</button>
            <button className={styles['add-to-favs']}>
              <i className="bi bi-heart fs-5"></i>
            </button>
          </div>
          <button className={styles['buy-now']}>BUY NOW</button>
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

    </section>
  );
}
