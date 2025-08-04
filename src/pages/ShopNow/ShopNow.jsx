import { useState, useEffect } from 'react';
import styles from './ShopNow.module.scss';
import SortDropdown from './SortDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { changePriceRange, chooseCategory, getAllProducts, getAsyncProducts } from '../../features/productsSlice';
import { NavLink } from 'react-router-dom';

export default function ShopNow() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(180);

  const [isPriceOpened, setIsPriceOpened] = useState(true);
  const dispatch = useDispatch()
  const { products, filterByPrice, rangeMax } = useSelector(getAllProducts)
  useEffect(() => {
    dispatch(getAsyncProducts())
  }, []);

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

  // useEffect(() => {
  //   setMinPrice(0);
  //   setMaxPrice(filterByPrice.max || 0);
  // }, [filterByPrice.max]);
  useEffect(() => {
    setMinPrice(0);
    setMaxPrice(rangeMax);
    dispatch(changePriceRange({ min: 0, max: rangeMax }));
  }, [rangeMax]);


  return (
    <section>
      <div className={`header ${styles.header}`}>
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
              <button onClick={() => { dispatch(chooseCategory("all")) }}>All Products</button>
              <button onClick={() => { dispatch(chooseCategory("Best Sellers")) }}>Best Sellers</button>
              <button onClick={() => { dispatch(chooseCategory("Limited Edition")) }}>Limited Edition</button>
              <button onClick={() => { dispatch(chooseCategory("Performance Series")) }}>Performance Series</button>
              <button onClick={() => { dispatch(chooseCategory("Kids Collection")) }}>Kids Collection</button>
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
                      max={rangeMax}
                      step="1"
                      value={minPrice}
                      // onChange={(e) => {
                      //   setMinPrice(Number(e.target.value));
                      //   dispatch(changePriceRange({ min: minPrice, max: maxPrice }))
                      // }}
                      onInput={(e) => {
                        const value = Number(e.target.value);
                        setMinPrice(Number(e.target.value));
                        dispatch(changePriceRange({ min: value, max: maxPrice }));
                      }}

                    />
                    <input
                      type="range"
                      id="maxSlider"
                      className={styles.maxSlider}
                      min="0"
                      max={rangeMax}
                      step="1"
                      value={maxPrice}
                      // onChange={(e) => {
                      //   setMaxPrice(Number(e.target.value));
                      //   dispatch(changePriceRange({ min: minPrice, max: maxPrice }))
                      // }}
                      onInput={(e) => {
                        const value = Number(e.target.value);
                        setMaxPrice(Number(e.target.value));
                        dispatch(changePriceRange({ min: minPrice, max: value }));
                      }}

                    />
                  </div>
                  <div className={styles.values}>
                    <div>
                      $<input
                        type="number"
                        className={styles["lower-range"]}
                        id="minInput"
                        min="0"
                        max={rangeMax}
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
                        max={rangeMax}
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
            <span>{products.length} products</span>
            <SortDropdown />
          </div>
          <div className={styles.items}>
            {
              products.length
                ?
                products.map((elm) => {
                  return (
                    <div key={elm.id} className={styles.item}>
                      <NavLink to={`${elm.id}`} className={styles["image-container"]}>
                        <img className={styles.image1} src={elm.images.shopnow[0]} alt={elm.title} />
                        <img className={styles.image2} src={elm.images.shopnow[1]} alt={elm.title} />
                      </NavLink>
                      <NavLink to={`${elm.id}`} className={styles.info}>
                        <h3>{elm.title}</h3>
                        <p className={styles["price-pt"]}>
                          <ins>${elm.price.toFixed(2)}</ins>
                          &nbsp;
                          {
                            elm.old_price ?
                              <del>${elm.old_price.toFixed(2)}</del>
                              :
                              null
                          }
                        </p>
                      </NavLink>
                    </div>
                  )
                })
                :
                <div className={styles["no-items"]}>
                  <div className={styles.text}>
                    <h2>We couldn't find any matches</h2>
                    <p>Try different filters or another category.</p>
                  </div>
                  <button>Clear Filters</button>
                </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
}
