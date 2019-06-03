import React, { useEffect } from "react"

import { Footer } from "../Footer/"
import { Header } from "../Header"
import { ContextProvider } from "../Context/Context"
import { initCanvas, initHovers } from "../Cursor/cursor"

import styles from "./Layout.module.scss"
import "../Cursor/cursor.scss"

const Layout = ({ children }) => {
  useEffect(() => {
    initCanvas()
    initHovers()
  })

  return (
    <>
      <canvas class="canvas" data-paper-resize />
      <ContextProvider>
        <div className={styles.Container}>
          <Header />
          {children}
          <Footer />
        </div>
      </ContextProvider>
    </>
  )
}

export default Layout
