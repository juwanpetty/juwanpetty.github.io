import React from "react"
import { Moon } from "react-feather"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <button className={styles.Button} data-cursor>
        <Moon size={20} />
      </button>
    </footer>
  )
}

export default Footer
