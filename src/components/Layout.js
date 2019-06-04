import React, { useEffect } from "react"
import { Link } from "gatsby"
import { initCanvas, initHovers } from "./Cursor/cursor"

import styles from "./Layout.module.scss"
import "./Cursor/cursor.scss"

const Layout = ({ children }) => {
  useEffect(() => {
    // initCanvas()
    // initHovers()
  })

  return (
    <>
      <canvas class="canvas" resize />
      <div className={styles.Container}>
        <div className={styles.Header}>
          <div className={styles.Contact}>
            <p>+1 (470) 234 7709</p>
            <a href="mailto: jchpetty@gmail.com">jchpetty@gmail.com</a>
          </div>
        </div>
        {children}
        <footer className={styles.Footer}>
          <Link to="/about" data-cursor className={styles.FooterLink}>
            About
          </Link>
          <Link to="/work" data-cursor className={styles.Archive}>
            Archive <span>23</span>
          </Link>
        </footer>
      </div>
    </>
  )
}

export default Layout
