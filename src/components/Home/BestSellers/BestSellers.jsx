import { NavLink } from "react-router-dom"
import styles from "./BestSellers.module.scss"
import { PRODUCT, SHOPNOW } from "../../../routes"

export default function BestSellers() {
  return (
    <section className={styles["Best-sellers"]}>
      <div className={styles["lil-section-name"]}>
        <h2>BEST SELLERS</h2>
        <NavLink to={SHOPNOW}>VIEW ALL</NavLink>
      </div>
      <div className={styles.products}>
        <div className={styles.product}>
          <NavLink to={PRODUCT} className={styles["img-container"]}>
            <img className={styles["image-1"]} src="https://static.wixstatic.com/media/c837a6_a9b28eeb2641483ab21505b3b575a752~mv2.jpg/v1/fill/w_450,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a9b28eeb2641483ab21505b3b575a752~mv2.jpg" alt="first pic" />
            <img className={styles["image-2"]} src="https://static.wixstatic.com/media/c837a6_368addd3225e4019b4ef4d4741d451ea~mv2.jpg/v1/fill/w_450,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_368addd3225e4019b4ef4d4741d451ea~mv2.jpg" alt="second pic" />
            <button>BEST SELLER</button>
          </NavLink>
          <div className={styles["name-price"]}>
            <h3>SUSTAINABLE STRIDER</h3>
            <div className={styles["price-pt"]}>
              <ins>$140.00</ins> <del>$160.00</del>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <NavLink to={PRODUCT} className={styles["img-container"]}>
            <img className={styles["image-1"]} src="https://static.wixstatic.com/media/c837a6_a9b28eeb2641483ab21505b3b575a752~mv2.jpg/v1/fill/w_450,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a9b28eeb2641483ab21505b3b575a752~mv2.jpg" alt="first pic" />
            <img className={styles["image-2"]} src="https://static.wixstatic.com/media/c837a6_368addd3225e4019b4ef4d4741d451ea~mv2.jpg/v1/fill/w_450,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_368addd3225e4019b4ef4d4741d451ea~mv2.jpg" alt="second pic" />
            <button>BEST SELLER</button>
          </NavLink>
          <div className={styles["name-price"]}>
            <h3>SUSTAINABLE STRIDER</h3>
            <div className={styles["price-pt"]}>
              <ins>$140.00</ins> <del>$160.00</del>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <NavLink to={PRODUCT} className={styles["img-container"]}>
            <img className={styles["image-1"]} src="https://static.wixstatic.com/media/c837a6_a9b28eeb2641483ab21505b3b575a752~mv2.jpg/v1/fill/w_450,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a9b28eeb2641483ab21505b3b575a752~mv2.jpg" alt="first pic" />
            <img className={styles["image-2"]} src="https://static.wixstatic.com/media/c837a6_368addd3225e4019b4ef4d4741d451ea~mv2.jpg/v1/fill/w_450,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_368addd3225e4019b4ef4d4741d451ea~mv2.jpg" alt="second pic" />
            <button>BEST SELLER</button>
          </NavLink>
          <div className={styles["name-price"]}>
            <h3>SUSTAINABLE STRIDER</h3>
            <div className={styles["price-pt"]}>
              <ins>$140.00</ins> <del>$160.00</del>
            </div>
          </div>
        </div>
        <div className={styles.product}>
          <NavLink to={PRODUCT} className={styles["img-container"]}>
            <img className={styles["image-1"]} src="https://static.wixstatic.com/media/c837a6_a9b28eeb2641483ab21505b3b575a752~mv2.jpg/v1/fill/w_450,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a9b28eeb2641483ab21505b3b575a752~mv2.jpg" alt="first pic" />
            <img className={styles["image-2"]} src="https://static.wixstatic.com/media/c837a6_368addd3225e4019b4ef4d4741d451ea~mv2.jpg/v1/fill/w_450,h_599,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_368addd3225e4019b4ef4d4741d451ea~mv2.jpg" alt="second pic" />
            <button>BEST SELLER</button>
          </NavLink>
          <div className={styles["name-price"]}>
            <h3>SUSTAINABLE STRIDER</h3>
            <div className={styles["price-pt"]}>
              <ins>$140.00</ins> <del>$160.00</del>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

