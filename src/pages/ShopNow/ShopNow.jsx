import { useState, useEffect } from 'react';
import styles from './ShopNow.module.scss';
import SortDropdown from './SortDropdown';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../features/productsSlice';

export default function ShopNow() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [isPriceOpened, setIsPriceOpened] = useState(true);
  const data = useSelector(getAllProducts)

  console.log(data);

  // Ensure minPrice never exceeds maxPrice
  useEffect(() => {
    if (minPrice > maxPrice) {
      setMaxPrice(minPrice);
    }
  }, [minPrice]);

  // Ensure maxPrice never less than minPrice
  useEffect(() => {
    if (maxPrice < minPrice) {
      setMinPrice(maxPrice);
    }
  }, [maxPrice]);

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

            <div className={styles["filter-details"]}>
              <div
                className={`${styles["price-details-opener"]} ${isPriceOpened ? styles.opened : ''}`}
                onClick={() => setIsPriceOpened(!isPriceOpened)}
              >

                <span>Price</span>
                <svg className={styles.minus} viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                  <path fillRule="evenodd" d="M15.5,10 L15.5,11 L4.5,11 L4.5,10 L15.5,10 Z" />
                </svg>
                <svg className={styles.plus} viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                  <path fillRule="evenodd" d="M11,5 L10.999,10 L16,10 L16,11 L11,11 L11,16 L10,16 L9.999,11 L5,11 L5,10 L10,9.999 L10,5 L11,5 Z" />
                </svg>
              </div>
              <div id="app" className={styles["two-ranges"]}>
                <div className={styles["range-slider"]}>
                  <div className={styles["range-container"]}>
                    <input
                      type="range"
                      id="minSlider"
                      className={styles.minSlider}
                      min="0"
                      max="180"
                      step="1"
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                    />
                    <input
                      type="range"
                      id="maxSlider"
                      className={styles.maxSlider}
                      min="0"
                      max="180"
                      step="1"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                  </div>
                  <div className={styles.values}>
                    <div>
                      $<input
                        type="number"
                        className={styles["lower-range"]}
                        id="minInput"
                        min="0"
                        max="180"
                        step="1"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                      />
                    </div>
                    <div>
                      $<input
                        type="number"
                        className={styles["raise-range"]}
                        id="maxInput"
                        min="0"
                        max="180"
                        step="1"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.products}>
          <div className={styles.top}>
            <span>4 products</span>
            <SortDropdown />
          </div>
          <div className={styles.items}></div>
        </div>
      </div>
    </section>
  );
}
