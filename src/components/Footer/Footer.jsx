import { NavLink } from 'react-router-dom'
import styles from './Footer.module.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { boolean, object, string } from 'yup'

export default function Footer() {
  const initialValues = {
    email: "",
    confirm: false
  }

  const validationSchema = object({
    email: string().email("ⓘ Enter an email address like example@mysite.com.").required("ⓘ Enter an email address like example@mysite.com."),
    confirm: boolean().oneOf([true], "ⓘ Check the box to continue.")
  })
  const handleSubmit = (value) => {
    // console.log(value);

  }

  return (
    <footer>
      <div className={styles.top}>
        <NavLink to="#">Ryst.</NavLink>
      </div>
      <div className={styles.content}>
        <div className={styles.yellow}>
          <p className={styles["yellow-header"]}>Stay updated, sign up to receive exclusive updates and offers</p>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
            <Form>
              <div className={styles.field}>
                <label htmlFor="email">EMAIL *</label>
                <Field type="email" id='email' name='email' />
                <ErrorMessage component={"p"} name='email' className={styles['error-message']} />
              </div>
              <div className={styles.bottom}>
                <div className={styles.confirm}>
                  <div className={styles["input-label"]}>
                    <Field type="checkbox" name="confirm" id="confirm" />
                    <label htmlFor="confirm">Yes, subscribe me to your newsletter. *</label>
                  </div>
                  <ErrorMessage component={"p"} name='confirm' className={styles['error-message']} />
                </div>
                <input type="submit" value={"SUBMIT"} />
              </div>
            </Form>
          </Formik>
        </div>
        <div className={styles.black}>
          <table>
            <thead>
              <tr>
                <th colSpan={3}>CONTACT</th>
                <th colSpan={3}>LEGAL</th>
                <th colSpan={3}>SHOP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3}>info@mysite.com</td>
                <td colSpan={3}>Terms & Conditions</td>
                <td colSpan={3}>All Products</td>
              </tr>
              <tr>
                <td colSpan={3}>123-456-7890</td>
                <td colSpan={3}>Privacy Policy</td>
                <td colSpan={3}>Best Sellers</td>
              </tr>
              <tr>
                <td colSpan={3}>500 Terry Francine St.SA, CA 9415</td>
                <td colSpan={3}>Shipping Policy</td>
                <td colSpan={3}>Performance Series</td>
              </tr>
              <tr>
                <td className={styles.white} colSpan={3}>SOCIAL MEDIA</td>
                <td colSpan={3}>Refund Policy</td>
                <td colSpan={3}>Limited Edition</td>
              </tr>
              <tr>
                <td><a href="https://www.instagram.com/wix" target='_blank'>IG</a></td>
                <td><a href="https://www.facebook.com/wix" target='_blank'>FB</a></td>
                <td><a href="https://www.tiktok.com/@wix" target='_blank'>TKTK</a></td>
                <td colSpan={3}>Accessibility Statement</td>
                <td colSpan={3}>Kids Collection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.end}>
        <p>© 2035 by Ryst. Powered and secured by <a href="https://www.wix.com/?utm_campaign=vir_created_with">Wix</a></p>
      </div>
    </footer>
  )
}
