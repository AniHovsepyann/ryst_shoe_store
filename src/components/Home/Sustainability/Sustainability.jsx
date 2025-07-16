import { useEffect, useRef } from "react";
import styles from "./Sustainability.module.scss"
import { NavLink } from "react-router-dom";
import { ABOUTUS, PRODUCT, SHOPNOW } from "../../../routes";
import FloatingBackgroundSection from '../../ui/FloatingBackgroundSection/FloatingBackgroundSection'


export default function Sustainability() {
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

      const rect = section.getBoundingClientRect();

      // scroll down → միշտ շարժվի
      if (delta > 0) {
        currentOffset += delta * 0.4;
      }

      // scroll up → շարժվի միայն եթե ներքևը >= window.innerHeight
      if (delta < 0 && rect.bottom >= window.innerHeight) {
        currentOffset += delta * 0.05;
      }

      // սահմանափակում
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
      <div ref={sectionRef} className={`${styles["floating-background-section"]} ${styles["floating-background-section"]}`}>
        <div ref={left_topRef} className={styles["left-top"]}>
          <h2>Committed to Sustainability</h2>
        </div>
        <div className={styles['right-bottom']}>
          {/* <NavLink to={PRODUCT} className={styles["img-container"]}>
            <button className={styles.sale}>SALE</button>
            <img className={styles["image-1"]} src={"https://static.wixstatic.com/media/c837a6_936329eced864c0abedbf89844390c72~mv2.jpg/v1/fill/w_347,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_936329eced864c0abedbf89844390c72~mv2.jpg"} alt="shoe" />
            <img className={styles["image-2"]} src="https://static.wixstatic.com/media/c837a6_60f18667fe64458eb7ab6a131d3354d4~mv2.jpg/v1/fill/w_347,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_60f18667fe64458eb7ab6a131d3354d4~mv2.jpg" alt="shoe" />
          </NavLink> */}
          {/* <div className={styles["product-data"]}>
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
          </div> */}
          <div className={styles.text}>
            <h4>WALK WITH US TOWARDS A GREENER PLANET, ONE STEP AT A TIME</h4>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
          <NavLink to={ABOUTUS}>READ MORE</NavLink>
        </div>
      </div>
  )
}
