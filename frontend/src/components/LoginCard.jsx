import axios from "axios"
import { useState } from "react"
import "./LoginCard.css"

const LoginCard = ({ isShowLogin, handleLoginClick, onlogin, setOnlogin }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = () => {
    if (email === undefined) {
      alert("votre email !!!")
    } else if (password === undefined) {
      alert(" votre password !!!")
    } else {
      handleLoginClick()
      axios
        .post("http://localhost:4242/utilisateurconnexion", {
          email,
          password,
        })
        .then((res) => console.info(res.data))
        .then((res) => setOnlogin(res.data.utilisateur))
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <label htmlFor="login-input">Password</label>
            <input
              type="password"
              className="login-box"
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
        </div>
      </div>
    </div>
  )
}

export default LoginCard
