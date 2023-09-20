import axios from "axios"
import { useState, useEffect } from "react"
function Panier({ onlogin }) {
  const [quantitePanier, setQuantitéPanier] = useState()
  const [objets, setObjets] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4242/panier").then((res) => setObjets(res.data))
  })
  const handleAdd = () => {
    setQuantitéPanier(quantitePanier + 1)
  }
  const handleSub = () => {
    setQuantitéPanier(quantitePanier - 1)
  }
  const handledel = () => {
    setQuantitéPanier(null)
  }
  return (
    <div className="containerPanier">
      <div className="descriptionObjet">
        {objets.map((objet) => (
          <div key={objet.id}>
            <img
              src={`http://localhost:4242/${objet.photo1}`}
              alt={objet.nom}
            />
            Nom : {objet.nom}
            Prix :{objet.prix}
            Quantité: {quantitePanier}
          </div>
        ))}
        <div className="btn">
          <button onClick={handleAdd}>ajouter + 1</button>
          <button onClick={handleSub}>Oter - 1</button>
          <button onClick={handledel}></button>
        </div>
      </div>
      <div className="validation">
        <button>validation</button>
      </div>
    </div>
  )
}

export default Panier
