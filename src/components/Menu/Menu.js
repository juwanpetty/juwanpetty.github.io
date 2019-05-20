import React, { useRef, useEffect, useContext } from "react"
import { ContextState } from "../Context/Context"
import { TimelineMax } from "gsap/TweenMax"
import { X } from "react-feather"
import styles from "./Menu.module.scss"

const Menu = ({ open }) => {
  const { dispatch } = useContext(ContextState)

  let timeLine
  const contentFirstRef = useRef()
  const contentMoveRef = useRef()
  const contentReverseRef = useRef()
  const angle = -35

  const hiddenStyle = open ? null : { pointerEvents: "none" }

  useEffect(() => {
    init()

    if (open) {
      animate()
    }
  })

  const init = () => {
    const contentFirst = contentFirstRef.current
    const contentMove = contentMoveRef.current
    const contentReverse = contentReverseRef.current

    contentMove.style.width = `calc(100vw * ${Math.abs(
      Math.cos((angle * Math.PI) / 180)
    )} + 100vh * ${Math.abs(Math.sin((angle * Math.PI) / 180))})`

    contentMove.style.height = `calc(100vw * ${Math.abs(
      Math.sin((angle * Math.PI) / 180)
    )} + 100vh * ${Math.abs(Math.cos((angle * Math.PI) / 180))})`

    contentFirst.style.transform = `rotate3d(0,0,1,${angle}deg)`
    contentReverse.style.transform = `translate(0%, 100%) rotate3d(0,0,1,${Math.abs(
      angle
    )}deg)`
  }

  const animate = () => {
    const contentMove = contentMoveRef.current
    const contentReverse = contentReverseRef.current

    // const ease = Expo.easeInOut;
    const duration = 1

    timeLine = new TimelineMax()
      .to(
        contentMove,
        duration,
        {
          // ease: ease,
          y: "0%",
        },
        0
      )
      .to(
        contentReverse,
        duration,
        {
          // ease: ease,
          y: "0%",
        },
        0
      )
  }

  return (
    <div
      className={styles.ContentFirst}
      style={hiddenStyle}
      ref={contentFirstRef}
    >
      <div className={styles.ContentMove} ref={contentMoveRef}>
        <div className={styles.ContentReverse} ref={contentReverseRef}>
          <div className={styles.Content}>
            <div className={styles.Header}>
              <button
                className={styles.Button}
                onClick={() => {
                  timeLine && timeLine.reverse()
                  dispatch({ type: "TOGGLE_MENU" })
                }}
                data-cursor
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
