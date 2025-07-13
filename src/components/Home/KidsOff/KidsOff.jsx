import { useEffect, useRef } from "react";
import styles from "./KidsOff.module.scss"
import { NavLink } from "react-router-dom";
import { PRODUCT, SHOPNOW } from "../../../routes";
import FloatingBackgroundSection from '../../ui/FloatingBackgroundSection/FloatingBackgroundSection'


export default function KidsOff() {
  const left_topRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let lastScrollY = window.scrollY;
    let currentOffset = -10; // Սկզբնական բարձրություն
    const movementRange = 30; // Max px շարժ

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;

      // scroll down → positive delta → նկարը իջնի
      // scroll up → negative delta → նկարը բարձրանա
      currentOffset += delta * 0.2; // speed factor

      // սահմանափակում, որ չփախնի
      currentOffset = Math.max(-10 - movementRange, Math.min(-10 + movementRange, currentOffset));

      section.style.setProperty(
        'background-position',
        `center ${currentOffset}px`,
        'important'
      );

      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    // <FloatingBackgroundSection sectionRef={sectionRef} parentStyles={styles} image_1={"https://static.wixstatic.com/media/c837a6_936329eced864c0abedbf89844390c72~mv2.jpg/v1/fill/w_347,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_936329eced864c0abedbf89844390c72~mv2.jpg"}/>
    <section>
      <div ref={sectionRef} className={`${styles["floating-background-section"]} ${styles["floating-background-section"]}`}>
        <div ref={left_topRef} className={styles["left-top"]}>
          <h2>Step-up Your Stride</h2>
          <p>Premium Athletic Footwear</p>
          <NavLink to={SHOPNOW}>SHOP NOW</NavLink>
        </div>
        <div className={styles['right-bottom']}>
          <NavLink to={PRODUCT} className={styles["img-container"]}>
            <button className={styles.sale}>SALE</button>
            <img className={styles["image-1"]} src={"https://static.wixstatic.com/media/c837a6_936329eced864c0abedbf89844390c72~mv2.jpg/v1/fill/w_347,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_936329eced864c0abedbf89844390c72~mv2.jpg"} alt="shoe" />
            <img className={styles["image-2"]} src="https://static.wixstatic.com/media/c837a6_60f18667fe64458eb7ab6a131d3354d4~mv2.jpg/v1/fill/w_347,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_60f18667fe64458eb7ab6a131d3354d4~mv2.jpg" alt="shoe" />
          </NavLink>
          <div className={styles["product-data"]}>
            <NavLink to={PRODUCT} className={styles["name-and-price"]}>
              <h4>MARATHON MASTER</h4>
              <span className={styles["price-pt"]}>
                <ins>$140.00</ins>
                <del>$160.00</del>
              </span>
            </NavLink>
            <button className={styles.add}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className={styles["marquee-container"]}>
        <div className={styles["marquee-track"]}>
          <ul className={styles["running-line"]}>
            {
              Array(7).fill().map((_, i) => (
                <li key={`1-${i}`}>NEW ENERGY, SAME HIGH QUALITY</li>
              ))
            }
          </ul>
          <ul className={styles["running-line"]}>
            {
              Array(7).fill().map((_, i) => (
                <li key={`2-${i}`}>NEW ENERGY, SAME HIGH QUALITY</li>
              ))
            }
          </ul>
        </div>
      </div>
    </section>
  )
}
