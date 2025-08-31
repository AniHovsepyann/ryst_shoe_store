import axios from 'axios';
import styles from "./Product.module.scss"
import { useLoaderData, useParams } from 'react-router-dom'
import SimpleSlider from './Slider/Slider';
import Reviews from './ReviewSlider/ReviewSlider';

export default function Product() {
  const product = useLoaderData()
  console.log(product);

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
      <section className={styles["product-info-section"]}>
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
      </section>
      {
        String(product?.review) ?
          <>
            <section className={styles["review-section"]}>
              <div className="count-and-filter">
                <span className={styles.count}>{product.review.length} review</span>
                <div className={styles.sorts}>

                </div>
              </div>
              <Reviews reviews={product.review}/>
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