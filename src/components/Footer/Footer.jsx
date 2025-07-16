import { Form, NavLink } from 'react-router-dom'
import styles from './Footer.module.scss'
import { ErrorMessage, Formik } from 'formik'

export default function Footer() {
  return (
    <footer>
      <div className={styles.top}>
        <NavLink to="#">Ryst.</NavLink>
      </div>
      <div className={styles.content}>
        <div className={styles.yellow}>
          <p className={styles["yellow-header"]}>Stay updated, sign up to receive exclusive updates and offers</p>
          <Formik>
            <Form>
              <div className={styles.field}>
                <label htmlFor="email">EMAIL *</label>
                <input type="email" id='email' />
              </div>
              <div className={styles.bottom}>
                <div className={styles.confirm}>
                  <div className={styles["input-label"]}>
                    <input type="checkbox" name="confirm" id="confirm" />
                    <label htmlFor="confirm">Yes, subscribe me to your newsletter. *</label>
                  </div>
                  <ErrorMessage component={"p"} name='confirm' className={styles['error-message']} />
                </div>
                <input type="submit" value={"SUBMIT"} />
              </div>
            </Form>
          </Formik>
        </div>
        <div className={styles.black}></div>
      </div>
      <div className={styles.bottom}>
        <p>© 2035 by Ryst. Powered and secured by <a href="https://www.wix.com/?utm_campaign=vir_created_with">Wix</a></p>
      </div>
    </footer>
  )
}
