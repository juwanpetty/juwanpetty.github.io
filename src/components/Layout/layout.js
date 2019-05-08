import React from "react"

import Header from "../Header/header"
import Footer from "../Footer/footer"

import styles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
