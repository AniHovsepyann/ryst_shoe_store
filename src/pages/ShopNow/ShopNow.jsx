import styles from './ShopNow.module.scss'

export default function ShopNow() {
  return (
    <section>
      <div className={styles.header}>
        <div className={styles.location}>
          <span>Home</span>
          <i className="bi bi-chevron-right"></i>
          <span>All Products</span>
        </div>
        <span className={styles.category}>All Products</span>
      </div>
      <div className={styles.main}>
        <div className={styles["filter-pt"]}>
          <div className={`${styles.by} ${styles.browse}`}>
            <div className={styles.name}>
              <p>Browse by</p>
            </div>
            <div className={styles.categories}>
              <span>All Products</span>
              <span>Best Sellers</span>
              <span>Limited Edition</span>
              <span>Performance Series</span>
              <span>Kids Collection</span>
            </div>
          </div>
          <div className={`${styles.by} ${styles.filter}`}>
            <div className={styles.name}>
              <p>Filter by</p>
            </div>
          </div>
        </div>
        <div className={styles.products}>
          <div className={styles.top}>
            <span>4 products</span>
            <div className={`${styles.dropdown} ${styles.sortDropdown}`}id="sortDropdown">
              <div className={`${styles["dropdown-toggle"]} ${styles.selectedOption}`}>
                <p>Sort By: <span>Recommended</span></p>
                <div className={styles.after}>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    </path>
                  </svg>
                </div>
              </div>
              <div className={styles["dropdown-menu"]} >
                <div className={styles["sort-product"]} data-value="recommended">Recommended</div>
                <div className={styles["sort-product"]} data-value="newest">Newest</div>
                <div className={styles["sort-product"]} data-value="price-low-high">Price (low to high)</div>
                <div className={styles["sort-product"]} data-value="price-high-low">Price (high to low)</div>
                <div className={styles["sort-product"]} data-value="a-z">Name A-Z</div>
                <div className={styles["sort-product"]} data-value="z-a">Name Z-A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
