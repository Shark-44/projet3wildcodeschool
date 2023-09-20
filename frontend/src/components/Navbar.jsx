import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = ({ handleLoginClick, onlogin }) => {
  const handleClick = () => {
    handleLoginClick()
  }
  const buttonColor = onlogin ? "#A2FF86" : "#2bc6ff"
  // eslint-disable-next-line no-restricted-syntax
  console.log(onlogin)
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
          <a href="/Panier">
            <img
              src="http://localhost:4242/assets/images/autre/panier.png"
              alt=""
            />
          </a>
        </div>
        <div className="buttonContainer">
          <button
            onClick={handleClick}
            className="loginicon log"
            style={{ backgroundColor: buttonColor }}
          >
            Login
          </button>
          <a href="/Formulaire">
            <button className="loginicon sig">Sign up</button>
          </a>
        </div>
      </nav>
    </>
  )
}

export default NavBar
