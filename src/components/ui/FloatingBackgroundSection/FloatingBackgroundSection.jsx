import { useEffect, useRef } from "react";
import styles from "./FloatingBackgroundSection.module.scss"
import { NavLink } from "react-router-dom";
import { PRODUCT, SHOPNOW } from "../../../routes";

export default function FloatingBackgroundSection({sectionRef, left_topRef, parentStyles, image_1}) {

  return (
    // <section ref={sectionRef} className={`${styles["floating-background-section"]} ${parentStyles["floating-background-section"]}`}>
    //   <div ref={left_topRef} className={styles["left-top"]}>
    //     <h2>Step-up Your Stride</h2>
    //     <p>Premium Athletic Footwear</p>
    //     <NavLink to={SHOPNOW}>SHOP NOW</NavLink>
    //   </div>
    //   <div className={styles['right-bottom']}>
    //     <NavLink to={PRODUCT} className={styles["img-container"]}>
    //       <button className={styles.sale}>SALE</button>
    //       <img className={styles["image-1"]} src={image_1} alt="shoe" />
    //       <img className={styles["image-2"]} src="https://static.wixstatic.com/media/c837a6_60f18667fe64458eb7ab6a131d3354d4~mv2.jpg/v1/fill/w_347,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_60f18667fe64458eb7ab6a131d3354d4~mv2.jpg" alt="shoe" />
    //     </NavLink>
    //     <div className={styles["product-data"]}>
    //       <NavLink to={PRODUCT} className={styles["name-and-price"]}>
    //         <h4>MARATHON MASTER</h4>
    //         <span className={styles["price-pt"]}>
    //           <ins>$140.00</ins>
    //           <del>$160.00</del>
    //         </span>
    //       </NavLink>
    //       <button className={styles.add}>
    //         ADD TO CART
    //       </button>
    //     </div>
    //   </div>
    // </section>
    <></>
  )
}
