import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import Home from "./pages/Home"
import Boutique from "./pages/Boutique"
import ObjetID from "./pages/ObjetsID"
import Formulaire from "./pages/Formulaire"
import NavBar from "./components/Navbar"
import Test from "./pages/Test"
import Createurs from "./pages/Createurs"
import CreateurID from "./pages/CreateurID"
import Login from "./pages/Login"
import LoginCard from "./components/LoginCard"
import "./App.css"

function App() {
  const [isShowLogin, setIsShowLogin] = useState(true)
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin)
  }
  return (
    <div className="App">
      <NavBar handleLoginClick={handleLoginClick} />
      <LoginCard
        isShowLogin={isShowLogin}
        handleLoginClick={handleLoginClick}
      />
      <div className="lesroutes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Boutique" element={<Boutique />} />
          <Route path="/Boutique/:id" element={<ObjetID />} />
          <Route path="/Createurs" element={<Createurs />} />
          <Route path="/Createurs/:id" element={<CreateurID />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Formulaire" element={<Formulaire />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
