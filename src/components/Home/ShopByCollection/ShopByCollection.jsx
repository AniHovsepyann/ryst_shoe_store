import { NavLink } from 'react-router-dom'
import styles from './ShopByCollection.module.scss'
import { useEffect, useRef, useState } from 'react';

export default function ShopByaCollection() {
  const eachRef = useRef(null);
  const prevScrollY = useRef(window.scrollY);
  const [scale, setScale] = useState(1); // Սկսում ա փոքր

  useEffect(() => {
    const handleScroll = () => {
      const each = eachRef.current;
      if (!each) return;

      const rect = each.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const currentScrollY = window.scrollY;

      const scrollingUp = currentScrollY < prevScrollY.current;
      if (rect.bottom > windowHeight && scrollingUp) {
        setScale((prev) => prev + 0.02);
      } else if (rect.bottom <= windowHeight) {
        setScale(1);
      } else {
        setScale((prev) => Math.max(prev - 0.02, 1));
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <section className={styles.ShopByCollection}>
      <div className={styles["lil-section-name"]}>
        <h2>BEST SELLERS</h2>
      </div>
      <div className={styles.collections}>
        {/* <div className={styles.each}>
          <NavLink>PREFORMENCE  SERIES</NavLink>
          <img src="https://static.wixstatic.com/media/c837a6_7407d6560448416a996712cac8ce5c9c~mv2.jpg/v1/fill/w_615,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_7407d6560448416a996712cac8ce5c9c~mv2.jpg" alt="image" />
        </div>
        <div className={styles.each}>
          <NavLink>PREFORMENCE  SERIES</NavLink>
          <img src="https://static.wixstatic.com/media/c837a6_7407d6560448416a996712cac8ce5c9c~mv2.jpg/v1/fill/w_615,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_7407d6560448416a996712cac8ce5c9c~mv2.jpg" alt="image" />
        </div> */}
        <div className={styles.each} ref={eachRef}>
          <NavLink>PREFORMENCE SERIES</NavLink>
          <img
            src="https://static.wixstatic.com/media/c837a6_7407d6560448416a996712cac8ce5c9c~mv2.jpg/v1/fill/w_615,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_7407d6560448416a996712cac8ce5c9c~mv2.jpg"
            alt="image"
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.1s ease-out",
            }}
          />
        </div>
        <div className={styles.each} ref={eachRef}>
          <NavLink>PREFORMENCE SERIES</NavLink>
          <img
            src="https://static.wixstatic.com/media/c837a6_7407d6560448416a996712cac8ce5c9c~mv2.jpg/v1/fill/w_615,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_7407d6560448416a996712cac8ce5c9c~mv2.jpg"
            alt="image"
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.1s ease-out",
            }}
          />
        </div>
        <div className={styles.each} ref={eachRef}>
          <NavLink>PREFORMENCE SERIES</NavLink>
          <img
            src="https://static.wixstatic.com/media/c837a6_7407d6560448416a996712cac8ce5c9c~mv2.jpg/v1/fill/w_615,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_7407d6560448416a996712cac8ce5c9c~mv2.jpg"
            alt="image"
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.1s ease-out",
            }}
          />
        </div>
      </div>
    </section>
  )
}
