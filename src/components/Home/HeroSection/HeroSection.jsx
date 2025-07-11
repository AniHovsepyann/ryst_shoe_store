import FloatingBackgroundSection from '../../ui/FloatingBackgroundSection/FloatingBackgroundSection'
import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.scss"
import { NavLink } from "react-router-dom";
import { PRODUCT, SHOPNOW } from "../../../routes";

export default function HeroSection() {
  // const sectionRef = useRef(null);
  const left_topRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    const section = sectionRef.current;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = scrollY * 0.3; // կարգավորի՝ որքան ուժեղ շարժվի նկարը
      section.style.backgroundPosition = `center calc(50% - ${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <FloatingBackgroundSection sectionRef={sectionRef} left_topRef={left_topRef} parentStyles={styles} image_1={}/>
    <section ref={sectionRef} className={`${styles["floating-background-section"]} ${styles["floating-background-section"]}`}>
      <div ref={left_topRef} className={styles["left-top"]}>
        <h2>Step-up Your Stride</h2>
        <p>Premium Athletic Footwear</p>
        <NavLink to={SHOPNOW}>SHOP NOW</NavLink>
      </div>
      <div className={styles['right-bottom']}>
        <NavLink to={PRODUCT} className={styles["img-container"]}>
          <button className={styles.sale}>SALE</button>
          <img className={styles["image-1"]} src={"https://static.wixstatic.com/media/c837a6_f4b16c06d8b5449c954a72eb34be2b4b~mv2.jpg/v1/fill/w_347,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f4b16c06d8b5449c954a72eb34be2b4b~mv2.jpg"} alt="shoe" />
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
    </section>
  )
}