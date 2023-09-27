import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import "./CreateurID.css"
import CardB from "../components/CardB"
import imageback from "../assets/background2.png"

function CreateurID() {
  const params = useParams()

  const [createurs, setCreateurs] = useState([])
  const [objets, setObjets] = useState([])
  // eslint-disable-next-line no-unused-vars
  const Byprenom = createurs.nom
  // Pour les avis
  const [lecavis, setLecavis] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:4242/utilisateur/${params.id}`)
      .then((res) => setCreateurs(res.data))
  }, [params.id])
  useEffect(() => {
    axios
      .get(
        `http://localhost:4242/utilisateur/with/objets?prenom=${createurs.prenom}`
      )
      .then((res) => setObjets(res.data))
  }, [createurs])
  useEffect(() => {
    axios
      .get(`http://localhost:4242/avislaisse?UtilisateurId1=${params.id}`)
      .then((res) => setLecavis(res.data))
  })
  console.info(objets)
  return (
    <div className="container Createur">
      <div className="partiepresentation">
        <img
          src={`http://localhost:4242/assets/images/avatar/${createurs.photo}`}
          alt={createurs.nom}
        />
        <h2 className="nomcreateur">
          {createurs.nom} {createurs.prenom}
        </h2>
        <div className="zonetext">
          <img className="imagebackground" src={imageback} alt="" />
          <p className="zoneptext">{createurs.descriptionCreateur}</p>*
        </div>
      </div>
      <h2 className="titrecollection">Collection :</h2>
      <div className="collection">
        {objets.map((objet) => (
          <Link className="link" key={objet.id} to={`/Boutique/${objet.id} `}>
            <CardB
              key={objet.id}
              nomObjet={objet.nomObjet}
              photo1={objet.photo1}
            />
          </Link>
        ))}
      </div>
      <div className="lesavis">
        <h2 className="titrecollection">les avis :</h2>
        <div className="lesavis">
          {lecavis.map((avis, index) => (
            <div
              className="mapavis"
              key={index}
              style={{
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                marginLeft: index % 2 === 0 ? "-30%" : "30%",
              }}
            >
              <div className="placeavis">{avis.avisCreateur}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CreateurID
