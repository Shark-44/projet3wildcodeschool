import "./Compte.css"
import Cookies from "js-cookie"
import { useState, useEffect } from "react"
import AlterwordAPI from "../services/AlterwordAPI"
import Edit from "../assets/iconeedit.png"
import CarddesFavoris from "../components/CarddesFavoris"
function Compte() {
  const UtilisateurId = Cookies.get("UtilisateurId")
  const [info, setInfo] = useState([])
  const [histoc, setHistoc] = useState([])
  const API_URL = import.meta.env.VITE_BACKEND_URL
  useEffect(() => {
    AlterwordAPI.get(`/utilisateur/${UtilisateurId}`).then((res) =>
      setInfo(res.data)
    )
  }, [])
  useEffect(() => {
    AlterwordAPI.get(`/histocommande?UtilisateurId=${UtilisateurId}`).then(
      (res) => setHistoc(res.data)
    )
  }, [UtilisateurId])
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" }
    return new Date(dateString).toLocaleDateString("fr-FR", options)
  }
  return (
    <div className="containerCompte">
      <h2>Votre compte</h2>
      <div className="top">
        <div className="detail">
          <img src={API_URL + "/assets/images/avatar/" + info.photo} alt="" />
          <h2 id="bienvenu">
            Bienvenu et content de vous revoir {info.prenom}
          </h2>
        </div>
        <div className="blockcoor">
          <div className="coordonnees">
            <h2>Vos coordonnées :</h2>
            <h4 className="detailcoor">
              {info.nom} {info.prenom}
            </h4>
            <h4 className="detailcoor">
              Adresse : {info.adresse} {info.codePostal} {info.ville}
            </h4>
            <h4 className="detailcoor">Email : {info.email}</h4>
          </div>
          <div className="editbt">
            <img className="edit" src={Edit} alt="" />
          </div>
        </div>
      </div>
      <div className="histachat">
        <h2>Historique de vos achats</h2>
        {histoc.map((histo) => (
          <div key={histo.id} className="histo">
            <h4> Numero de commande : {histo.numero}</h4>{" "}
            <h4>date de la commande : {formatDate(histo.dateCommande)} </h4>
            <h4>objet commandé : {histo.nomObjet}</h4>
            <h4>qté commandé {histo.quantiteCommande} </h4>
            <h4> pour un prix total {histo.prixTotal} €</h4>
          </div>
        ))}
      </div>
      <div className="favoris">
        <h2>Vos vendeurs favoris</h2>
        <CarddesFavoris />
      </div>
      <div className="complement"></div>
    </div>
  )
}
export default Compte
