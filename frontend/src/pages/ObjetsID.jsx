import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ObjetsID() {
  const params = useParams()

  const [objets, setObjets] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:4242/objets/${params.id}`)
      .then((res) => setObjets(res.data))
  }, [params.id])

  return (
    <div className="container cardObjet">
      <img
        src={`http://localhost:4242/${objets.photo1}`}
        alt={objets.nomObjet}
      />
      <h2>{objets.nomObjet}</h2>
      <p>Prix: {objets.prix} €</p>
      <p>Quantité restante : {objets.quantite}</p>
    </div>
  )
}

export default ObjetsID
