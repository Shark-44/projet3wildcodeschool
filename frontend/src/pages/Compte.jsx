import "./Compte.css"
import Cookies from "js-cookie"
import { useState, useEffect } from "react"
import AlterwordAPI from "../services/AlterwordAPI"
import Edit from "../assets/iconeedit.png"

function Compte() {
  const UtilisateurId = Cookies.get("UtilisateurId")
  const [info, setInfo] = useState([])
  const [histoc, setHistoc] = useState([])

  useEffect(() => {
    AlterwordAPI.get(`/utilisateur/${UtilisateurId}`).then((res) =>
      setInfo(res.data)
    )
  }, [])
  useEffect(() => {
    AlterwordAPI.get(`/histocommande?UtilisateurId=${UtilisateurId}`).then(
      (res) => setHistoc(res.data)
    )
  })

  return (
    <div className="test">
      <h2>Votre compte</h2>
      <div className="top">
        <div className="detail">
          <img src={`AlterwordAPI/assets/images/avatar/${info.photo}`} alt="" />
          <h2 id="bienvenu">
            Bienvenu et contant de vous revoir {info.prenom}
          </h2>
        </div>
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
        <img className="edit" src={Edit} alt="" />
      </div>
      <div className="histachat">
        <h2>Historique de vos achats</h2>
        {histoc.map((histo) => (
          <div key={histo.id} className="histo">
            <h4> Numero de commande : {histo.numero}</h4>{" "}
            <h4>date de la commande : {histo.dateCommande} </h4>
            <h4>objet commandé : {histo.nomObjet}</h4>
            <h4>qté commandé {histo.quantiteCommande} </h4>
            <h4> pour un prix total {histo.prixTotal} €</h4>
          </div>
        ))}
      </div>
      <div className="favoris">
        <h2>Vos vendeurs favoris</h2>
      </div>
    </div>
  )
}
export default Compte
