import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.scss"
import { NavLink } from "react-router-dom";
import { SHOPNOW } from "../../../routes";

export default function HeroSection() {
  const sectionRef = useRef(null)

  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = scrollY * 0.05; // շատ փոքր շարժում
      sectionRef.current.style.backgroundPosition = `center ${-offset}px`;

    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);
  return (
    <section ref={sectionRef} className={styles["hero-section"]}>
      <div className={styles["left-top"]}>
        <h2>Step-up Your Stride</h2>
        <p>Premium Athletic Footwear</p>
        <NavLink to={SHOPNOW}>SHOP NOW</NavLink>
      </div>
      <div className={styles['right-bottom']}>
        <div className={styles["img-container"]}>
          <img src="https://static.wixstatic.com/media/c837a6_f4b16c06d8b5449c954a72eb34be2b4b~mv2.jpg/v1/fill/w_347,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f4b16c06d8b5449c954a72eb34be2b4b~mv2.jpg" alt="shoe" />
        </div>
        <div className={styles["product-data"]}></div>
      </div>
    </section>
  )
}
