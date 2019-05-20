import React, { useContext } from "react"
import { Menu } from "../Menu"
import { Search } from "../Search"
import { ContextState } from "../Context/Context"
import styles from "./Header.module.scss"
import { Search as SearchIcon, Grid } from "react-feather"

const Header = () => {
  const { state, dispatch } = useContext(ContextState)

  return (
    <>
      <Menu open={state.showMenu} />
      <Search open={state.showSearch} />
      <div className={styles.Header}>
        <button
          className={styles.Button}
          onClick={() => dispatch({ type: "TOGGLE_MENU" })}
          data-cursor
        >
          <Grid className={styles.GridIcon} size={20} />
        </button>
        <button
          className={styles.Button}
          onClick={() => dispatch({ type: "TOGGLE_SEARCH" })}
          data-cursor
        >
          <SearchIcon size={20} />
        </button>
      </div>
    </>
  )
}

export default Header
