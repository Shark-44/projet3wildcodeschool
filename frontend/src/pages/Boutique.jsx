import axios from "axios"
import { useEffect, useState } from "react"
import "./Boutique.css"

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
          <div key={objet.id}>
            <img
              src={`http://localhost:4242${objet.photo_1}`}
              alt={objet.nom_objet}
            />
            <p>{objet.nom_objet}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Boutique
