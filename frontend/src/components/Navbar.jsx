import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = ({ handleLoginClick }) => {
  const handleClick = () => {
    handleLoginClick()
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
          <NavLink className="navlink" to="/Formulaire">
            Formulaire
          </NavLink>
          <NavLink className="navlink" to="/Test">
            Test
          </NavLink>
          <NavLink className="navlink" to="/Login">
            login
          </NavLink>
        </ul>
        <div className="buttonContainer">
          <button onClick={handleClick} className="loginicon log">
            Login
          </button>
          <button onClick={handleClick} className="loginicon sig">
            Sign up
          </button>
        </div>
      </nav>
    </>
  )
}

export default NavBar
