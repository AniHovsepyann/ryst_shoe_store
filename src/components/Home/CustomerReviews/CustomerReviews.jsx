import styles from './CustomerReviews.module.scss'
import DynamicSlides from './Slider/Slider'

export default function CustomerReviews() {
  return (
    <section className={styles.CustomerReviews}>
      <div className={styles["lil-section-name"]}>
        <h2>CUSTOMER REVIEWS</h2>
      </div>
      <DynamicSlides />
    </section>
  )
}
