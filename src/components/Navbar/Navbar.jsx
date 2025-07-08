import styles from "./Navbar.module.scss"
import { NavLink } from 'react-router-dom'
import { ABOUT, BLOG, HOME, SEARCHRESULTS } from '../../routes'

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
            <NavLink to={HOME}>Ryst.</NavLink>
          </li>
          <li className={styles["right"]}>
            <div className="search">
              <NavLink to={SEARCHRESULTS}>
                <i className="bi bi-search"></i>
              </NavLink>
            </div>
            <div className="signs">
              
            </div>
            <div className="buttons"></div>
            <NavLink to={ABOUT}>ABOUT</NavLink>
          </li>
          {/* <li>
            <NavLink to={BLOG}>BLOG</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

