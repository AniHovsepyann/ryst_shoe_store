import axios from 'axios';
import styles from "./Product.module.scss"
import { useLoaderData, useParams } from 'react-router-dom'
import SimpleSlider from './Slider/Slider';

export default function Product() {
  const product = useLoaderData()
  console.log(product);

  return (
    <>
      <div className={`header ${styles.header}`}>
        <div className={styles.location}>
          <span>Home</span>
          <i className="bi bi-chevron-right"></i>
          <span>All Products</span>
        </div>
        <span className={styles.category}>All Products</span>
      </div>
      <SimpleSlider product={product} />
      <section className={styles["product-info-section"]}>
        <div className={styles.content}>

        </div>
      </section>
    </>
  )
}

export const getProduct = async ({ params: { id } }) => {
  return (await axios(`http://localhost:3000/products/${id}`)).data;
}