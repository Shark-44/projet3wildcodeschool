import { createContext, useContext, useState } from "react"
import Cookies from "js-cookie"

const CurrentUserContext = createContext()

export const useAuthContext = () => useContext(CurrentUserContext)

export const CurrentUserContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.stringify(Cookies.get("UtilisateurId")))
  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}
