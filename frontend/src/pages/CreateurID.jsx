import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import CardB from "../components/CardB"

function CreateurID() {
  const params = useParams()

  const [createurs, setCreateurs] = useState([])
  const [objets, setObjets] = useState([])
  // eslint-disable-next-line no-unused-vars
  const Byprenom = createurs.nom

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
  console.info(objets)
  return (
    <div className="container Createur">
      <img
        src={`http://localhost:4242/assets/images/avatar/${createurs.photo}`}
        alt={createurs.nom}
      />
      <h2>
        {createurs.nom} {createurs.prenom}
      </h2>
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
    </div>
  )
}

export default CreateurID
