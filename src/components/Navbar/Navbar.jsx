import styles from "./Navbar.module.scss"
import { Link } from 'react-router-dom'
import { ABOUT, BLOG, HOME, LOGIN, SEARCHRESULTS } from '../../routes'

export default function Navbar() {
  return (
    <header>
      <div className={styles["marquee-container"]}>
        <div className={styles["marquee-track"]}>
          <ul className={styles["running-line"]}>
            {
              Array(7).fill().map((_, i) => (
                <li key={`1-${i}`}>FREE SHIPPING ON ALL INTL. ORDERS OVER $50</li>
              ))
            }
          </ul>
          <ul className={styles["running-line"]}>
            {
              Array(7).fill().map((_, i) => (
                <li key={`2-${i}`}>FREE SHIPPING ON ALL INTL. ORDERS OVER $50</li>
              ))
            }
          </ul>
        </div>
      </div>
      <nav className={styles["header-menu"]}>
        <ul>
          <li className={styles.ryst}>
            <Link to={HOME}>Ryst.</Link>
          </li>
          <li className={styles["right"]}>
            <div className={styles.search}>
              <Link to={SEARCHRESULTS}>
                <i className="bi bi-search"></i>
              </Link>
            </div>
            <div className={styles.signs}>
              <i className="bi bi-heart"></i>
              <i className="bi bi-cart"></i>
            </div>
            <div className={styles.buttons}>
              <Link to={LOGIN} className={styles.login}>LOG IN</Link>
              <button className={styles.menu}>MENU</button>
            </div>
            {/* <Link to={ABOUT}>ABOUT</Link> */}
          </li>
          {/* <li>
            <Link to={BLOG}>BLOG</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

