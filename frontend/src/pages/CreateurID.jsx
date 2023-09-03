import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function CreateurID() {
  // eslint-disable-next-line no-unused-vars
  const params = useParams()
  // eslint-disable-next-line no-unused-vars
  const [createurs, setCreateurs] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:4242/utilisateur/${params.id}`)
      .then((res) => setCreateurs(res.data))
  }, [params.id])

  return (
    <div>
      <img
        src={`http://localhost:4242/assets/images/avatar/${createurs.photo}`}
        alt={createurs.nom}
      />
      <h2>{createurs.prenom}</h2>
    </div>
  )
}

export default CreateurID
