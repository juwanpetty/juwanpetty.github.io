import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterLinks}>
        <Link to="/">Twitter</Link>
        <Link to="/">Instagram</Link>
        <Link to="/">Github</Link>
        <Link to="/">Dribbble</Link>
      </div>
      <p>Made with love by Juwan Petty. &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
