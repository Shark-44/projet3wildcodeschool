import "./Commande.css"
import logo from "../assets/AlterWord.png"
import { useState, useEffect } from "react"
import AlterwordAPI from "../services/AlterwordAPI"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"

function Commande() {
  const date = new Date()
  const formattedDate = date.toLocaleDateString("fr-FR")

  const [objetspanier, setObjetspanier] = useState([])
  const UtilisateurId = Cookies.get("UtilisateurId")
  const [utilisateur, setUtilisateur] = useState([])

  const sommetotal = objetspanier.reduce((somme, a) => {
    return somme + a.prix * a.quantitePanier
  }, 0)
  const TVA = ((sommetotal * 20) / 100).toFixed(2)
  const API_URL = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    AlterwordAPI.get(`/objetpanier?UtilisateurId=${UtilisateurId}`).then(
      (res) => setObjetspanier(res.data)
    )
  }, [])
  useEffect(() => {
    AlterwordAPI.get(`/utilisateur/${UtilisateurId}`).then((res) =>
      setUtilisateur(res.data)
    )
  }, [])
  return (
    <div className="containerCommande">
      <div className="receipt-box">
        <div className="actual-receipt" style={{ color: "black" }}>
          <div
            className="toppage"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img className="Imagesite" src={logo} alt="" />
            <h2 id="date">Date :{formattedDate}</h2>
          </div>
          <div className="refclient">
            <h2 className="souligne-titre">Numero de Commande : </h2>
            <h2>Nom : {utilisateur.nom}</h2>
            <h2>Prenom : {utilisateur.prenom}</h2>
            <h2>
              Adresse : {utilisateur.adresse} {utilisateur.codePostal}{" "}
              {utilisateur.ville}
            </h2>
            <h2>Email : {utilisateur.email}</h2>
          </div>
          <div className="detailcommande">
            <h2 className="souligne-titre">Details commande :</h2>
            {objetspanier.map((objetcommande, index) => {
              const somme = objetcommande.prix * objetcommande.quantitePanier
              return (
                <div key={index} className="details">
                  <img
                    className="imagecardetail"
                    src={API_URL + objetcommande.photo1}
                    alt=""
                  />
                  <div>{objetcommande.nomObjet}</div>
                  <div>prix u. {objetcommande.prix} € </div>
                  <div>Qté :{objetcommande.quantitePanier}</div>
                  <div id="sommedetail">{somme} €</div>
                </div>
              )
            })}
          </div>
          <div className="totalcommande">
            <h2 className="bordure-titre">Total :</h2>
            <h2 className="tva">( Dont TVA : {TVA} €)</h2>
            <h2 className="prixtotal">{sommetotal} €</h2>
          </div>
        </div>
      </div>
      <div className="btncommande">
        <Link to="/PDFvu/1" target="_blank">
          <button className="btncommandegenerale print">Print PDF</button>
        </Link>
        <Link to="/Paiement">
          <button className="btncommandegenerale valide">PAYER</button>
        </Link>
        <Link to="/Panier">
          <button className="btncommandegenerale annule">Annuler</button>
        </Link>
      </div>
      <div className="complement"></div>
    </div>
  )
}

export default Commande
