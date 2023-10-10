import Cookies from "js-cookie"
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"

const NavBar = ({ handleLoginClick, addpanier, onlogin, setOnlogin }) => {
  const handleClick = () => {
    handleLoginClick()
  }

  const buttonColor = onlogin ? "#A2FF86" : "#2bc6ff"
  const logout = () => {
    Cookies.remove("UtilisateurId")
    Cookies.remove("token")
    setOnlogin(false)
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
          <NavLink className="navlink" to="/Test">
            Test
          </NavLink>
        </ul>
        <img
          className="imagelogo"
          src="http://localhost:4242/assets/images/autre/AlterWord.PNG"
          alt=""
        />
        <div className="panier">
          <Link to="/Panier">
            <img
              src="http://localhost:4242/assets/images/autre/panier.png"
              alt=""
            />
            {addpanier > 0 && <span className="badge">{addpanier}</span>}
          </Link>
        </div>
        <div className="buttonContainer">
          <button
            onClick={handleClick}
            className="loginicon log"
            style={{ backgroundColor: buttonColor }}
          >
            Login
          </button>
          <input
            type="image"
            className="logout"
            onClick={logout}
            src="http://localhost:4242/assets/images/autre/deconnexion.png"
          />
          <Link to="/Formulaire" style={{ textDecoration: `none` }}>
            <button className="loginicon sig">Sign up</button>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar
