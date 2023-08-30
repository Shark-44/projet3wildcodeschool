import axios from "axios"
import { useEffect, useState } from "react"
import "./Boutique.css"
import CardB from "../components/CardB"

function Boutique() {
  const [objets, setObjets] = useState([])
  useEffect(() => {
    axios.get("http://localhost:4242/objets").then((res) => setObjets(res.data))
  }, [])
  return (
    <div className="contenaireB">
      <h1>Je suis dans la Boutique</h1>
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
  )
}
export default Boutique
