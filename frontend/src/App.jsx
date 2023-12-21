import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import Home from "./pages/Home"
import Boutique from "./pages/Boutique"
import ObjetID from "./pages/ObjetsID"
import Formulaire from "./pages/Formulaire"
import NavBar from "./components/Navbar"
import Createurs from "./pages/Createurs"
import CreateurID from "./pages/CreateurID"
import Panier from "./pages/Panier"
import Commande from "./pages/Commande"
import LoginCard from "./components/LoginCard"
import PDFvu from "./pages/PDFvu"
import Paiement from "./pages/Paiement"
// import Test from "./pages/Test"
import "./App.css"
import Cookies from "js-cookie"
// import { useAuthContext } from "./contexts/authContexts"
import ProtectedRoute from "./components/ProtectedRoute"
import Compte from "./pages/Compte"
import AlterwordAPI from "./services/AlterwordAPI"
import Footer from "./components/Footer"
import HappyEnd from "./pages/HappyEnd"
import Ajoutobjet from "./components/Ajoutobjet"

function App() {
  const [isShowLogin, setIsShowLogin] = useState(true)
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin)
  }
  // const [danspanier, setDanspanier] = useState([])
  const [onlogin, setOnlogin] = useState()
  const [addpanier, setAddpanier] = useState()
  const user = Cookies.get("UtilisateurId")
  // const { user } = useAuthContext()

  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        setAddpanier(0)
      } else {
        const response = await AlterwordAPI.get(
          `/objetpanier?UtilisateurId=${user}`
        )
        setAddpanier(response.data.length)
      }
    }

    fetchData()
  }, [user, setAddpanier])

  return (
    <div className="App">
      <NavBar
        handleLoginClick={handleLoginClick}
        addpanier={addpanier}
        onlogin={onlogin}
        setOnlogin={setOnlogin}
        user={user}
      />

      <LoginCard
        isShowLogin={isShowLogin}
        handleLoginClick={handleLoginClick}
        onlogin={onlogin}
        setOnlogin={setOnlogin}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Boutique" element={<Boutique />} />
        <Route path="/Createurs" element={<Createurs />} />
        <Route path="/Createurs/:id" element={<CreateurID />} />
        <Route path="/Formulaire" element={<Formulaire />} />
        <Route path="/HappyEnd" element={<HappyEnd />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route
            path="/Boutique/:id"
            element={
              <ObjetID setAddpanier={setAddpanier} addpanier={addpanier} />
            }
          />
          <Route
            path="/Panier"
            element={
              <Panier setAddpanier={setAddpanier} addpanier={addpanier} />
            }
          />
          <Route path="/Commande" element={<Commande />} />
          <Route path="/PDFvu/:id" element={<PDFvu />} />
          <Route
            path="/Paiement"
            element={
              <Paiement setAddpanier={setAddpanier} addpanier={addpanier} />
            }
          />
          <Route path="/Compte" element={<Compte />} />
          <Route path="/Ajoutobjet" element={<Ajoutobjet />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
