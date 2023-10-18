import Cookies from "js-cookie"
import "./NavBar.css"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useAuthContext } from "../contexts/authContexts"
import AlterwordAPI from "../services/AlterwordAPI"

const NavBar = ({ handleLoginClick, addpanier, onlogin, setOnlogin }) => {
  const navigate = useNavigate()
  const { user, setUser } = useAuthContext()
  // const user = Cookies.get("UtilisateurId")
  const prenom = Cookies.get("Prenom")
  const API_URL = import.meta.env.VITE_BACKEND_URL
  const handleClick = () => {
    handleLoginClick()
  }

  const buttonColor = onlogin ? "#A2FF86" : "#2bc6ff"
  const logout = () => {
    AlterwordAPI.get("/utilisateurconnexion").then(
      () => setOnlogin(false),
      setUser(null),
      navigate("/")
    )
  }
  return (
    <>
      <nav className="navGlobal">
        <ul className="liste">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/Boutique">
            Boutique
          </NavLink>
          <NavLink className="navlink" to="/Createurs">
            Createurs
          </NavLink>
        </ul>
        <img
          className="imagelogo"
          src={API_URL + "/assets/images/autre/AlterWord.PNG"}
          alt=""
        />
        <div className="onview"></div>

        {user ? (
          <div className="panier">
            <NavLink id="liencompte" to="/Test">
              Compte : {prenom.replace(/"/g, "")}
            </NavLink>
            <Link to="/Panier">
              <img src={API_URL + "/assets/images/autre/panier.png"} alt="" />
              {addpanier > 0 && <span className="badge">{addpanier}</span>}
            </Link>
            <input
              type="image"
              className="logout"
              onClick={logout}
              src={API_URL + "/assets/images/autre/deconnexion.png"}
            />
          </div>
        ) : (
          <div className="buttonContainer">
            <button
              onClick={handleClick}
              className="loginicon log"
              style={{ backgroundColor: buttonColor }}
            >
              Login
            </button>
            <Link to="/Formulaire" style={{ textDecoration: `none` }}>
              <button className="loginicon sig">Sign up</button>
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}

export default NavBar
