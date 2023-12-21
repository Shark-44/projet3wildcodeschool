import AlterwordAPI from "../services/AlterwordAPI"
import "./Paiement.css"
// eslint-disable-next-line no-unused-vars
import Cartes from "../assets/cartes.jpg"
// eslint-disable-next-line no-unused-vars
import Carte from "../assets/carte.jpg"
// eslint-disable-next-line no-unused-vars
import Paypal from "../assets/paypal.png"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"
// eslint-disable-next-line no-unused-vars
const mois = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
]
// eslint-disable-next-line no-unused-vars
const annee = [
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
]
function Paiement() {
  // eslint-disable-next-line no-unused-vars
  const [selectedOption, setSelectedOption] = useState()
  const UtilisateurId = Cookies.get("UtilisateurId")
  const [lastId, setLastId] = useState()
  const [objetspanier, setObjetspanier] = useState([])

  const valeur = { lastId }
  const etat = valeur.lastId
  const nombre = etat + 1
  const numero = nombre.toString().padStart(6, "0")

  useEffect(() => {
    AlterwordAPI.get(`/commandelastID`)
      .then((res) => {
        const lastId = res.data.last_id
        setLastId(lastId)
      })
      .catch((err) => {
        console.error("Error fetching lastId", err)
      })
  }, [])
  useEffect(() => {
    AlterwordAPI.get(`/objetpanier?UtilisateurId=${UtilisateurId}`).then(
      (res) => setObjetspanier(res.data)
    )
  }, [])

  // eslint-disable-next-line no-unused-vars
  const prixTotal = objetspanier.reduce((somme, a) => {
    return somme + a.prix * a.quantite_panier
  }, 0)
  // eslint-disable-next-line no-unused-vars
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  const handlevalide = () => {
    const postPromises = objetspanier.map((objet, index) => {
      const date = new Date()
      const dateCommande = date.toLocaleDateString("fr-FR")

      const data = {
        numero,
        UtilisateurId,
        prixTotal,
        ObjetsId: objet.objets_id,
        quantiteCommande: objet.quantite_panier,
        dateCommande,
      }
      console.info(data)
      return AlterwordAPI.post(`/commandeandobjet/${index}`, data)
        .then((response) => {
          console.info(`Commande pour l'objet ${index} réussie!`)
        })
        .catch((error) => {
          console.error(
            `Erreur lors de la commande pour l'objet ${index}:`,
            error
          )
        })
    })

    Promise.all(postPromises)
      .then(() => {
        return AlterwordAPI.delete(`/panier?UtilisateurId=${UtilisateurId}`)
      })
      .then(() => {
        console.info("Suppression du panier réussie!")
      })
      .catch((error) => {
        console.error("Une erreur s'est produite:", error)
      })
  }

  return (
    <div className="Containerpaid">
      <div className="paiement">
        <img className="Cartes" src={Cartes} alt="" />
        <div className="parcarte">
          <input type="checkbox" />
          <img id="cartepaid" src={Carte} alt="" />
          <div className="formulairepaid">
            <div className="zonesaisie">
              <label htmlFor="character">Numero de carte bancaire</label>
              <input type="text" />
            </div>
            <div className="zonesaisie">
              <label htmlFor="character">Date d'expiration</label>
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Mois</option>
                {mois.map((mo, index) => (
                  <option key={index} value={mo}>
                    {mo}
                  </option>
                ))}
              </select>
              <p id="separateur">/</p>
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Année</option>
                {annee.map((an) => (
                  <option key={an.id} value={an}>
                    {an}
                  </option>
                ))}
              </select>
            </div>
            <div className="zonesaisie">
              <label htmlFor="character">Code de verification</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="paypal">
          <input type="checkbox" />
          <img id="iconepaypal" src={Paypal} alt="" />
        </div>
      </div>

      <div id="centrage">
        <Link to="/">
          <button className="btnpayer" onClick={handlevalide}>
            PAYER
          </button>
        </Link>
      </div>
      <div className="ajustement"></div>
    </div>
  )
}
export default Paiement
