import axios from "axios"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Createurs.css"
import FilterButton from "../components/FilterButton"
import Card from "../components/Card"

function Createurs() {
  const [createurs, setCreateurs] = useState([])
  const [filter, setFilter] = useState("all")
  const tableFiltre =
    filter === "all"
      ? createurs
      : createurs.filter((createur) => createur.type === filter)

  useEffect(() => {
    axios
      .get("http://localhost:4242/utilisateur/with/categorie")
      .then((res) => setCreateurs(res.data))
  }, [])

  return (
    <div className="containerCreateur">
      <h1> Nos createurs</h1>
      <div className="resultat">
        <div className="filtre">
          <h3>Les filtres</h3>
          <FilterButton
            label="Tous"
            onClick={() => setFilter("all")}
            active={filter === "all"}
          />
          <FilterButton
            label="Graphique"
            onClick={() => setFilter("Graphisme")}
            active={filter === "Graphisme"}
          />
          <FilterButton
            label="Mode"
            onClick={() => setFilter("Mode")}
            active={filter === "Mode"}
          />
          <FilterButton
            label="3D-Print"
            onClick={() => setFilter("3DPrint")}
            active={filter === "3DPrint"}
          />
          <br />
        </div>
        <div className="renduCreateur">
          {tableFiltre.map((createur) => (
            <Link key={createur.id} to={`/Createurs/${createur.id}`}>
              <Card
                key={createur.id}
                nom={createur.nom}
                prenom={createur.prenom}
                photo={createur.photo}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Createurs
