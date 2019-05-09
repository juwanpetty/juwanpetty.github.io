import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

const Header = () => {
  return (
    <nav className={styles.Navigation}>
      <div className={styles.NavTitle}>
        <h1>Juwan Petty</h1>
        <p className={styles.Available}>Available for freelance</p>
      </div>

      <div className={styles.NavLinks}>
        <Link activeClassName={styles.NavItemActive} to="/">
          Browse
        </Link>
        <Link activeClassName={styles.NavItemActive} to="/blog">
          Blog
        </Link>
        <Link activeClassName={styles.NavItemActive} to="/projects">
          Projects
        </Link>
        <Link activeClassName={styles.NavItemActive} to="/videos">
          Videos
        </Link>
        <Link activeClassName={styles.NavItemActive} to="/pens">
          Pens
        </Link>

        <button>Contact</button>
      </div>
    </nav>
  )
}

export default Header
