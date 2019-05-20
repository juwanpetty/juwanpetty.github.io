import React, { useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, showMenu: !state.showMenu }
    case "TOGGLE_SEARCH":
      return { ...state, showSearch: !state.showSearch }
    default:
      return state
  }
}

const initialState = { showMenu: false, showSearch: false }
const ContextState = React.createContext(initialState)

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ContextState.Provider value={{ state, dispatch }}>
      {children}
    </ContextState.Provider>
  )
}

export { ContextProvider, ContextState }
