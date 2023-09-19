import axios from "axios"
import { useState, useEffect } from "react"
function Panier() {
  const UtilisateurId = localStorage.getItem("UtilisateurId")

  // eslint-disable-next-line no-unused-vars
  const [quantitePanier, setQuantitéPanier] = useState()

  axios.post("http://localhost:4242/utilisateur", {
    UtilisateurId,
    // eslint-disable-next-line no-undef
    ObjetId,
    quantitePanier,
  })
  useEffect(() => {})
  return (
    <div className="containerPanier">
      <button>ajouter + 1</button>
      <button>Oter - 1</button>
    </div>
  )
}

export default Panier
