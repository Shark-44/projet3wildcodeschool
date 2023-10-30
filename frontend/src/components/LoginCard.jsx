import AlterwordAPI from "../services/AlterwordAPI"
import { useState } from "react"
import "./LoginCard.css"
import Cookies from "js-cookie"
import { useAuthContext } from "../contexts/authContexts"
import CookieConsent from "./CookieConsent"

const LoginCard = ({ isShowLogin, handleLoginClick, setOnlogin, cookies }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { setUser } = useAuthContext()
  const handleSubmit = () => {
    if (email === undefined) {
      alert("votre email !!!")
    } else if (password === undefined) {
      alert(" votre password !!!")
    } else {
      handleLoginClick()
      AlterwordAPI.post("/utilisateurconnexion", {
        email,
        password,
      }).then((res) => {
        Cookies.set("UtilisateurId", JSON.stringify(res.data.utilisateur.id), {
          expires: 0.5,
          sameSite: "strict",
        })
        Cookies.set("Prenom", JSON.stringify(res.data.utilisateur.prenom), {
          expires: 0.5,
          sameSite: "strict",
        })
        setUser(res.data)
        setOnlogin(res.data.utilisateur.id)
        console.info(res.data)
      })
    }
  }
  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Identifiez-vous</h1>
            <label htmlFor="login-input">Email</label>
            <input
              type="email"
              className="login-box"
              value={email}
              placeholder="xxx@xxx.xx"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <label htmlFor="login-input">Password</label>
            <input
              type="password"
              className="login-box"
              placeholder="Password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <input
              type="button"
              value="LOGIN"
              onClick={handleSubmit}
              className="login-btn"
            />
          </form>
          <CookieConsent />
        </div>
      </div>
    </div>
  )
}

export default LoginCard
