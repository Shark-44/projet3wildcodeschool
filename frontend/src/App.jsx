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
import Test from "./pages/Test"
import "./App.css"
import Cookies from "js-cookie"
// import { useAuthContext } from "./contexts/authContexts"
import ProtectedRoute from "./components/ProtectedRoute"
import Compte from "./pages/Compte"
import AlterwordAPI from "./services/AlterwordAPI"
import Footer from "./components/Footer"

function App() {
  const [isShowLogin, setIsShowLogin] = useState(true)
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin)
  }
  const [danspanier, setDanspanier] = useState([])
  const [onlogin, setOnlogin] = useState()
  const [addpanier, setAddpanier] = useState(danspanier)
  const user = Cookies.get("UtilisateurId")
  // const { user } = useAuthContext()
  useEffect(() => {
    if (!user) {
      setAddpanier(0)
    } else {
      AlterwordAPI.get(`/objetpanier?UtilisateurId=${user}`).then((res) =>
        setDanspanier(res.data)
      )
      setAddpanier(danspanier.length)
    }
  }, [user])

  return (
    <div className="App">
      <NavBar
        handleLoginClick={handleLoginClick}
        addpanier={addpanier}
        onlogin={onlogin}
        setOnlogin={setOnlogin}
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
        <Route path="/Test" element={<Test />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route
            path="/Boutique/:id"
            element={
              <ObjetID setAddpanier={setAddpanier} addpanier={addpanier} />
            }
          />
          <Route path="/Panier" element={<Panier />} />
          <Route path="/Commande" element={<Commande />} />
          <Route path="/PDFvu/:id" element={<PDFvu />} />
          <Route path="/Paiement" element={<Paiement />} />
          <Route path="/Compte" element={<Compte />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
