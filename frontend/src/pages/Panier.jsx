import axios from "axios"
import { useState, useEffect } from "react"
import "./Panier.css"
function Panier() {
  const [quantitePanier, setQuantitéPanier] = useState()
  const [objets, setObjets] = useState([])
  const UtilisateurId = localStorage.getItem("UtilisateurId")
  const [panier, setPanier] = useState([])
  // eslint-disable-next-line no-restricted-syntax
  console.log(objets)
  useEffect(() => {
    axios
      .get(`http://localhost:4242/panieruser?UtilisateurId=${UtilisateurId}`)
      .then((res) => {
        setPanier(res.data)
        console.info(res.data)
      })
  }, [])
  useEffect(() => {
    axios
      .get(`http://localhost:4242/objetpanier?UtilisateurId=${UtilisateurId}`)
      .then((res) => {
        setObjets(res.data)
        console.info(res.data)
      })
  }, [panier])
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
      <div className="descriptionPanier">
        {objets.map((objet) => (
          <div key={objet?.id}>
            <img
              src={`http://localhost:4242/${objet?.photo1}`}
              alt={objet?.nom}
            />
            Nom : {objet?.nomObjet}
            Prix :{objet?.prix}
            Quantité:
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
