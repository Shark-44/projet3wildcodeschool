import axios from "axios"
import { useState } from "react"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    axios
      .post("http://localhost:4242/utilisateurconnexion", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("usersId", res.data.user.usersId)
        setUser(res.data.user)
        console.info(res.data)
      })
  }

  return (
    <div className="contenairLogin">
      <label htmlFor="character">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="character">Mot de passe:</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="button" value="Soumettre" onClick={handleSubmit} />
    </div>
  )
}

export default Login
