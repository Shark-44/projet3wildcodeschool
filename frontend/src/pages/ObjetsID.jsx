import AlterwordAPI from "../services/AlterwordAPI"
import "./ObjetID.css"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Cardloupe from "../components/Cardloupe"
import Stars from "../components/Stars"
import Cookies from "js-cookie"

function ObjetsID({ setAddpanier, addpanier }) {
  const params = useParams()

  const [objets, setObjets] = useState([])
  const [createur, setCreateur] = useState([])
  const [avis, setAvis] = useState([])
  const [isShowZoom, setIsShowZoom] = useState(true)
  const [avisObjet, setAvisObjet] = useState("")
  const API_URL = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    AlterwordAPI.get(`/objets/${params.id}`).then((res) => setObjets(res.data))
    AlterwordAPI.get(`/utilisateur/avec/objets?id=${params.id}`).then((res) =>
      setCreateur(res.data)
    )
    AlterwordAPI.get(`/avisurobjetparid?id=${params.id}`).then((res) =>
      setAvis(res.data)
    )
  }, [params.id])

  const handleAdd = () => {
    // pour ajouter au panier
    const UtilisateurId = Cookies.get("UtilisateurId")
    const ObjetsId = objets.id
    const quantitePanier = 1
    AlterwordAPI.post("/panier", {
      UtilisateurId,
      ObjetsId,
      quantitePanier,
    })
    setAddpanier(addpanier + 1)
  }
  const handlezoom = () => {
    setIsShowZoom((isShowZoom) => !isShowZoom)
  }
  const handlevalide = (event) => {
    const UtilisateurId = Cookies.get("UtilisateurId")
    const ObjetsId = objets.id
    const dateObj = new Date()

    const annee = dateObj.getFullYear()
    const mois = ("0" + (dateObj.getMonth() + 1)).slice(-2)
    const jour = ("0" + dateObj.getDate()).slice(-2)
    // Former la date au format souhaité (AAAA-MM-JJ)
    const dateavisObjet = annee + "-" + mois + "-" + jour
    if (event.target.value.includes(">") || event.target.value.includes("<")) {
      return
    }
    AlterwordAPI.post("/avisobjet", {
      UtilisateurId,
      ObjetsId,
      avisObjet,
      dateavisObjet,
    })
  }
  return (
    <div className="container-cardObjet">
      <div className="cardObjetgeneral">
        <div className="descriptionObjet">
          <img src={API_URL + objets.photo1} alt={objets.nomObjet} />
          <p onClick={handlezoom}>zoom</p>
          <h1>{objets.nomObjet}</h1>
          <h2>Prix: {objets.prix} €</h2>
          <h2>Quantité restante : {objets.quantite}</h2>
          <button className="bdtadpan" onClick={handleAdd}>
            Ajouter au panier
          </button>
        </div>
        <div className="infoAutre">
          <div className="infoCreateur">
            <h2>Ce produit est fabriqué par :</h2>
            {createur.map((auteur) => (
              <div key={auteur.id} className="cadrecreateur">
                <Link className="link" to={`/Createurs/${auteur.id} `}>
                  <img
                    src={API_URL + "/assets/images/avatar/" + auteur.photo}
                    alt={auteur.nom}
                  />
                </Link>
                <h1>{auteur.prenom}</h1>
              </div>
            ))}
          </div>
          <div className="positiondepart">
            <Cardloupe
              isShowZoom={isShowZoom}
              handlezoom={handlezoom}
              params={params.id}
            />
          </div>
          <div className="avisutilisateur">
            <div className="titreavis">
              <h3>Des avis</h3>
            </div>
            <div className="blockavisObjet">
              {avis.map((avis, index) => (
                <div key={index}>
                  <div className="avisrecadre">
                    <h2>{avis.avisObjet}</h2>
                    <img
                      src={API_URL + "/assets/images/avatar/" + avis.photo}
                      alt={avis.prenom}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="notation">
            <h2>Notez cet objet : </h2>
            <Stars />
          </div>
          <div className="votreavis">
            <h2>Laissez votre avis</h2>
            <input
              type="text"
              className="avisuser"
              value={avisObjet}
              onChange={(event) => {
                if (
                  event.target.value.includes(">") ||
                  event.target.value.includes("<")
                ) {
                  return
                }
                setAvisObjet(event.target.value)
              }}
            />
            <div className="placeinput">
              <input
                type="image"
                className="validebtn"
                onClick={handlevalide}
                src={API_URL + "/assets/images/autre/validationbtn.jpg"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="complement"></div>
    </div>
  )
}

export default ObjetsID
