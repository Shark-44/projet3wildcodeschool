import "./NavBar.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
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
          <NavLink className="navlink" to="/Login">
            Login
          </NavLink>
          <NavLink className="navlink" to="/Test">
            Test
          </NavLink>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
