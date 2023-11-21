import AlterwordAPI from "../services/AlterwordAPI"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import "./CreateurID.css"
import CardB from "../components/CardB"
import imageback from "../assets/background2.png"
import Likebtn from "../components/Likebtn"
import Btnfavoris from "../components/Btnfavoris"

function CreateurID() {
  const params = useParams()
  const [createurs, setCreateurs] = useState([])
  const [objets, setObjets] = useState([])

  // Pour les avis
  const [lecavis, setLecavis] = useState([])
  const API_URL = import.meta.env.VITE_BACKEND_URL
  useEffect(() => {
    AlterwordAPI.get(`/utilisateur/${params.id}`).then((res) =>
      setCreateurs(res.data)
    )
  }, [params.id])
  useEffect(() => {
    AlterwordAPI.get(
      `/utilisateur/with/objets?prenom=${createurs.prenom}`
    ).then((res) => setObjets(res.data))
  }, [createurs])
  useEffect(() => {
    AlterwordAPI.get(`/avislaisse?UtilisateurId1=${params.id}`).then((res) =>
      setLecavis(res.data)
    )
  })
  return (
    <div className="container Createur">
      <div className="partiepresentation">
        <img
          src={
            createurs && createurs.photo
              ? API_URL + "/assets/images/avatar/" + createurs.photo
              : ""
          }
          alt={createurs.nom}
        />
        <h2 className="nomcreateur">
          {createurs.nom} {createurs.prenom}
        </h2>
        <div className="zonefin">
          <div className="zonetext">
            <img className="imagebackground" src={imageback} alt="" />
            <p className="zoneptext">{createurs.descriptionCreateur}</p>*
          </div>
          <Likebtn />
          <input type="hidden" id="custId" name="custId" value="3487" />
        </div>
        <Btnfavoris params={params} />
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
              <div className="placeavis">
                <p id="prenom">{avis.prenom} : </p>
                <p>{avis.avisCreateur}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="complement"></div>
    </div>
  )
}

export default CreateurID
