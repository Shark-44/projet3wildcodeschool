import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Boutique from "./pages/Boutique"
import Formulaire from "./pages/Formulaire"
import NavBar from "./components/Navbar"
import Test from "./pages/Test"
import Createurs from "./pages/Createurs"
import CreateurID from "./pages/CreateurID"
import Login from "./pages/Login"
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Boutique" element={<Boutique />} />
          <Route path="/Formulaire" element={<Formulaire />} />
          <Route path="/Createurs" element={<Createurs />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/Createurs/:id" element={<CreateurID />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
