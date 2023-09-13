import axios from "axios"
import { useEffect, useState } from "react"
import "./Boutique.css"
import CardB from "../components/CardB"

function Boutique() {
  const [objets, setObjets] = useState([])
  const [filtreA, setFiltreA] = useState([])
  useEffect(() => {
    axios.get("http://localhost:4242/objets").then((res) => setObjets(res.data))
  }, [])
  useEffect(() => {
    axios
      .get("http://localhost:4242/utilisateur/with/objets")
      .then((res) => setFiltreA(res.data))
  }, [])
  // eslint-disable-next-line no-restricted-syntax
  console.log(filtreA)
  return (
    <div className="contenaireB">
      <h1>Votre boutique</h1>
      <div className="rendu">
        <div className="renduA">
          <div> les filtres</div>
          <div className="filtreA"></div>
        </div>
        <div className="renduB">
          {objets.map((objet) => (
            <CardB
              key={objet.id}
              nomObjet={objet.nomObjet}
              photo1={objet.photo1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Boutique
