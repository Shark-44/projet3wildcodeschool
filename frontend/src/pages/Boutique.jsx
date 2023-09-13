import axios from "axios"
import { useEffect, useState } from "react"
import "./Boutique.css"
import CardB from "../components/CardB"
import FiltreBoutiquecreateur from "../components/FiltreBoutiquecreateur"

function Boutique() {
  const [objets, setObjets] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4242/objets").then((res) => setObjets(res.data))
  }, [])

  return (
    <div className="contenaireB">
      <h1>Votre boutique</h1>
      <div className="rendu">
        <div className="renduA">
          <div> les filtres</div>
          <div className="filtreA">
            <FiltreBoutiquecreateur />
          </div>
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
