import axios from "axios"
import { useState, useEffect } from "react"
import "./Panier.css"

function Panier() {
  const [objetspanier, setObjetspanier] = useState([])
  const UtilisateurId = localStorage.getItem("UtilisateurId")

  const handleAdd = (index) => {
    const newObjetpanier = [...objetspanier]
    newObjetpanier[index].quantitePanier += 1
    setObjetspanier(newObjetpanier)
  }
  const handleSub = (index) => {
    const newObjetpanier = [...objetspanier]
    newObjetpanier[index].quantitePanier -= 1
    setObjetspanier(newObjetpanier)
  }
  useEffect(() => {
    axios
      .get(`http://localhost:4242/objetpanier?UtilisateurId=${UtilisateurId}`)
      .then((res) => setObjetspanier(res.data))
  }, [])

  return (
    <div className="containerPanier">
      <div className="descriptionPanier">
        {objetspanier.map((objet, index) => (
          <div className="cardetail" key={index}>
            <img
              src={`http://localhost:4242/${objet?.photo1}`}
              alt={objet?.nomObjet}
            />
            <div className="resumepanier">
              <p> Nom : {objet?.nomObjet}</p>
              <p> Prix : {objet?.prix} €</p>
              <div className="quantitedetail">
                <p> Quantité:{objet.quantitePanier}</p>
                <div className="btn">
                  <button
                    className="btnpanier"
                    onClick={() => handleAdd(index)}
                  >
                    +
                  </button>
                  <button
                    className="btnpanier"
                    onClick={() => handleSub(index)}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="calcultotal">
                <p>Prix Total :{objet?.prix * objet.quantitePanier} €</p>
              </div>
            </div>
            <div className="deletebtn">
              <img
                className="Imgdelete"
                src="http://localhost:4242/assets/images/autre/delete.png"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <div className="validation">
        <button className="validationbtn">validation commande</button>
      </div>
    </div>
  )
}

export default Panier
