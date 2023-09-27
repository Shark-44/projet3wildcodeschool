import axios from "axios"
import "./ObjetID.css"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import Cardloupe from "../components/Cardloupe"
import Stars from "../components/Stars"

function ObjetsID({ onlogin, setAddpanier, addpanier }) {
  const params = useParams()

  const [objets, setObjets] = useState([])
  const [createur, setCreateur] = useState([])
  const [avis, setAvis] = useState([])
  const [isShowZoom, setIsShowZoom] = useState(true)

  useEffect(() => {
    axios
      .get(`http://localhost:4242/objets/${params.id}`)
      .then((res) => setObjets(res.data))
    axios
      .get(`http://localhost:4242/utilisateur/avec/objets?id=${params.id}`)
      .then((res) => setCreateur(res.data))
    axios
      .get(`http://localhost:4242/avisurobjetparid?id=${params.id}`)
      .then((res) => setAvis(res.data))
  }, [params.id])

  const handleAdd = () => {
    // pour ajouter au panier
    const UtilisateurId = localStorage.getItem("UtilisateurId")
    const ObjetsId = objets.id
    const quantitePanier = 1
    axios.post("http://localhost:4242/panier", {
      UtilisateurId,
      ObjetsId,
      quantitePanier,
    })
    setAddpanier(addpanier + 1)
  }
  const handlezoom = () => {
    setIsShowZoom((isShowZoom) => !isShowZoom)
  }

  return (
    <div className="container cardObjet">
      <div className="descriptionObjet">
        <img
          src={`http://localhost:4242/${objets.photo1}`}
          alt={objets.nomObjet}
        />
        <p onClick={handlezoom}>zoom</p>
        <h1>{objets.nomObjet}</h1>
        <h2>Prix: {objets.prix} €</h2>
        <h2>Quantité restante : {objets.quantite}</h2>
        <button className="bdtadpan" onClick={handleAdd}>
          Ajouter au panier
        </button>
      </div>
      <Cardloupe
        isShowZoom={isShowZoom}
        handlezoom={handlezoom}
        params={params.id}
      />
      <div className="infoAutre">
        <div className="infoCreateur">
          <h2>Ce createur est</h2>
          {createur.map((auteur) => (
            <div key={auteur.id} className="cadrecreateur">
              <Link className="link" to={`/Createurs/${auteur.id} `}>
                <img
                  src={`http://localhost:4242/assets/images/avatar/${auteur.photo}`}
                  alt={auteur.nom}
                />
              </Link>
              <h1>{auteur.prenom}</h1>
            </div>
          ))}
        </div>
        <div className="avisutilisateur">
          {avis.map((avis) => (
            <div key={avis.id}>
              <h2>{avis.avisObjet}</h2>
              <img
                src={`http://localhost:4242/assets/images/avatar/${avis.photo}`}
                alt={avis.prenom}
              />
            </div>
          ))}
        </div>
        <div className="notation">
          <h2>Notez cet objet : </h2>
          <Stars />
        </div>
        <div className="votreavis">
          <h2>Laissez votre avis</h2>
          <input type="text" className="avisuser" />
        </div>
      </div>
    </div>
  )
}

export default ObjetsID
