import AlterwordAPI from "../services/AlterwordAPI"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Panier.css"
import Cookies from "js-cookie"

function Panier() {
  const [objetspanier, setObjetspanier] = useState([])
  const UtilisateurId = Cookies.get("UtilisateurId")

  const handleAdd = (index) => {
    const newObjetpanier = [...objetspanier]
    newObjetpanier[index].quantitePanier += 1
    setObjetspanier(newObjetpanier)
    AlterwordAPI.put(
      `/panier?UtilisateurId=${UtilisateurId}&ObjetsId=${objetspanier[index].ObjetsId}&quantitePanier=${objetspanier[index].quantitePanier}`
    )
  }
  const handleSub = (index) => {
    const newObjetpanier = [...objetspanier]
    newObjetpanier[index].quantitePanier -= 1
    setObjetspanier(newObjetpanier)
    AlterwordAPI.put(
      `/panier?UtilisateurId=${UtilisateurId}&ObjetsId=${objetspanier[index].ObjetsId}&quantitePanier=${objetspanier[index].quantitePanier}`
    ).catch((err) => {
      console.error("Error update", err)
    })
  }
  const handleDel = (index) => {
    const Deleteid = objetspanier[index].id
    AlterwordAPI.delete(
      `/panier?UtilisateurId=${UtilisateurId}&ObjetsId=${Deleteid}`
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
    AlterwordAPI.get(`/objetpanier?UtilisateurId=${UtilisateurId}`).then(
      (res) => setObjetspanier(res.data)
    )
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
              <input
                type="image"
                className="btndelete"
                onClick={() => handleDel(index)}
                src={`http://localhost:4242/assets/images/autre/delete.png`}
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
    </div>
  )
}

export default Panier
