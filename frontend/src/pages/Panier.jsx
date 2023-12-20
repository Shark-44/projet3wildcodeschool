import AlterwordAPI from "../services/AlterwordAPI"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Panier.css"
import Cookies from "js-cookie"

function Panier() {
  const [objetspanier, setObjetspanier] = useState([])
  const UtilisateurId = Cookies.get("UtilisateurId")
  const API_URL = import.meta.env.VITE_BACKEND_URL
  const handleAdd = (index) => {
    const newObjetpanier = [...objetspanier]
    newObjetpanier[index].quantite_panier += 1
    setObjetspanier(newObjetpanier)
    AlterwordAPI.put(
      `/panier?utilisateur_id=${UtilisateurId}&objets_id=${objetspanier[index].objets_id}&quantite_panier=${objetspanier[index].quantite_panier}`
    ).catch((err) => {
      console.error("Error update", err)
    })
  }
  const handleSub = (index) => {
    const newObjetpanier = [...objetspanier]
    newObjetpanier[index].quantite_panier -= 1
    setObjetspanier(newObjetpanier)
    AlterwordAPI.put(
      `/panier?utilisateur_id=${UtilisateurId}&objets_id=${objetspanier[index].objets_id}&quantite_panier=${objetspanier[index].quantite_panier}`
    ).catch((err) => {
      console.error("Error update", err)
    })
  }
  const handleDel = (index) => {
    const Deleteid = objetspanier[index].objets_id
    AlterwordAPI.delete(
      `/panier?utilisateur_id=${UtilisateurId}&objets_id=${Deleteid}`
    )
      .then((res) => {
        const newObjetpanier = [...objetspanier]
        newObjetpanier.splice(index, 1)
        setObjetspanier(newObjetpanier)
      })
      .catch((err) => {
        console.error("Error delete", err)
      })
  }
  useEffect(() => {
    AlterwordAPI.get(`/objetpanier?UtilisateurId=${UtilisateurId}`)
      .then((res) => setObjetspanier(res.data))
      .catch((err) => {
        console.error("Error lead", err)
      })
  }, [])
  return (
    <div className="containerPanier">
      <div className="descriptionPanier">
        {objetspanier.map((objet, index) => (
          <div className="cardetail" key={index}>
            <img
              className="imgpanier"
              src={API_URL + objet?.photo1}
              alt={objet?.nomObjet}
            />
            <div className="resumepanier">
              <p> Nom : {objet?.nomObjet}</p>
              <p> Prix : {objet?.prix} €</p>
              <div className="quantitedetail">
                <p> Quantité:{objet.quantite_panier}</p>
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
                <p>Prix Total :{objet?.prix * objet.quantite_panier} €</p>
              </div>
            </div>
            <div className="deletebtn">
              <input
                type="image"
                className="btndelete"
                onClick={() => handleDel(index)}
                src={API_URL + "/assets/images/autre/delete.png"}
              ></input>
            </div>
          </div>
        ))}
      </div>
      <div className="validation">
        <Link to="/Commande">
          <button className="validationbtn">validation commande</button>
        </Link>
      </div>
      <div className="complement"></div>
    </div>
  )
}

export default Panier
