import axios from 'axios';
import styles from "./Product.module.scss"
import { useLoaderData, useParams } from 'react-router-dom'
import SimpleSlider from './Slider/Slider';
import Reviews from './ReviewSlider/ReviewSlider';
import { useRef, useState } from 'react';

export default function Product() {
  const product = useLoaderData()
  const averageRate = product.review.reduce((sum, review) => sum + Number(review.rate), 0) / product.review.length;

  const [openIndex, setOpenIndex] = useState(null); // Մեկ բաց div-ի ինդեքսը
  const textRefs = useRef([]); // div-երի refs պահելու համար

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <div className={`header ${styles.header}`}>
        <div className={styles.location}>
          <span>Home</span>
          /
          <span>All Products</span>
          /
          <span className={styles.gray}>{product.title}</span>
        </div>
        {/* <span className={styles.category}>All Products</span> */}
      </div>
      <SimpleSlider product={product} styles={styles} />
      {/* <section className={styles["product-info-section"]}>
        <ul className={styles.content}>
          <li>
            <div className={styles["data-name"]}>
              <span>PRODUCT INFO</span>
              <button><i className="bi bi-plus-lg"></i></button>
            </div>
            <div className={styles.text}>
              <ul>
                <li>
                  I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={styles["data-name"]}>
              <span>RETURN & REFUND POLICY</span>
              <button><i className="bi bi-plus-lg"></i></button>
            </div>
            <div className={styles.text}>
              <ul>
                <li>
                  I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className={styles["data-name"]}>
              <span>SHIPPING INFO</span>
              <button><i className="bi bi-plus-lg"></i></button>
            </div>
            <div className={styles.text}>
              <ul>
                <li>
                  I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </section> */}
      <section className={styles["product-info-section"]}>
        <ul className={styles.content}>
          {["PRODUCT INFO", "RETURN & REFUND POLICY", "SHIPPING INFO"].map(
            (title, index) => (
              <li key={index}>
                <div
                  className={styles["data-name"]}
                  onClick={() => toggle(index)}
                >
                  <span>{title}</span>
                  <button>
                    <i className="bi bi-plus-lg"></i>
                  </button>
                </div>
                <div
                  ref={(el) => (textRefs.current[index] = el)}
                  className={styles.text}
                  style={{
                    height:
                      openIndex === index
                        ? `${textRefs.current[index]?.scrollHeight}px`
                        : "0px",
                    overflow: "hidden",
                    transition: "height 0.3s ease",
                  }}
                >
                  <ul>
                    <li>
                      {index === 0 &&
                        "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item."}
                      {index === 1 &&
                        "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence."}
                      {index === 2 &&
                        "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence."}
                    </li>
                  </ul>
                </div>
              </li>
            )
          )}
        </ul>
      </section>
      {
        String(product?.review) ?
          <>
            <section className={styles["review-section"]}>
              <div className={styles["review-summary"]}>
                <div className={styles["average-rate"]}>
                  <div className={styles["top"]}>
                    <h3>Reviews</h3>
                    <div className={styles.stars}>
                      <div className={styles.icons}>
                        {[1, 2, 3, 4, 5].map((star, index) => {
                          let iconClass = "bi bi-star fs-3";
                          if (averageRate >= star) {
                            iconClass = "bi bi-star-fill fs-3";
                          } else if (averageRate > star - 1 && averageRate < star) {
                            iconClass = "bi bi-star-half fs-3";
                          }
                          return <i key={index} className={iconClass}></i>;
                        })}

                      </div>

                      {averageRate.toFixed(1)}</div>
                    <p>Based on {product.review.length} reviews</p>
                  </div>
                  <button className={styles["leave-review"]}>Leave a Review</button>
                </div>
                {/* <div className={styles["rate-counts"]}>
                  {[5, 4, 3, 2, 1].map(star => {
                    const count = product.review.filter(r => Number(r.rate) === star).length;
                    const percent = (count / product.review.length) * 100;

                    return (
                      <div key={star} className={styles["rating-row"]}>
                        <span>{star} stars</span>
                        <div className={styles.bar}>
                          <div
                            className={styles.fill}
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <span>{count}</span>
                      </div>
                    );
                  })}
                </div> */}
                <div className={styles["rate-counts"]}>
                  {[5, 4, 3, 2, 1].map(star => {
                    const count = product.review.filter(r => Number(r.rate) === star).length;
                    const percent = (count / product.review.length) * 100;

                    return (
                      <div key={star} className={styles["rating-row"]}>
                        <span>{star} stars</span>
                        <div className={styles.bar}>
                          <div
                            className={styles.fill}
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <span>{count}</span>
                      </div>
                    );
                  })}
                </div>

              </div>
              <div className={styles["count-and-filter"]}>
                <span className={styles.count}>{product.review.length} review</span>
                <div className={styles.sorts}>
                </div>
              </div>
              <Reviews reviews={product.review} />
              {/* <div className={styles.reviews}>
              {
                product.review.map((elm, ind, arr) => {
                  return (
                      <div className={styles.review}>

                      </div>
                  )
                })
              }
              </div> */}
            </section>
          </>
          : "chka"
      }
    </>
  )
}

export const getProduct = async ({ params: { id } }) => {
  return (await axios(`http://localhost:3000/products/${id}`)).data;
}