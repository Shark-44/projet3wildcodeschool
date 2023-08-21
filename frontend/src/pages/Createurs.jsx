import axios from "axios"
import { useEffect, useState } from "react"
import "./Createurs.css"

function Createurs() {
  const [createurs, setCreateurs] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:4242/utilisateur")
      .then((res) => setCreateurs(res.data))
  }, [])
  return (
    <div className="container">
      <h1> Je suis la page createurs</h1>
      {createurs
        .filter(function (createur) {
          return createur.Createur === 1
        })
        .map((createur) => (
          <div key={createur.id}>
            <img
              src={`http://localhost:4242${createur.photo}`}
              alt={createur.nom}
            />
            <p>{createur.nom}</p>
            <p>{createur.prenom}</p>
          </div>
        ))}
    </div>
  )
}
export default Createurs
