import AlterwordAPI from "../services/AlterwordAPI"
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
    AlterwordAPI.get("/utilisateur/with/categorie").then((res) =>
      setCreateurs(res.data)
    )
  }, [])

  function toggleFilterVisibility() {
    const renduA = document.querySelector(".renduFiltre")
    renduA.classList.toggle("hidden-responsive")
    renduA.classList.toggle("visible-responsive")
  }

  return (
    <div className="container Createur">
      <h1> Nos createurs</h1>
      <div className="rendu">
        <div className="renduFiltre hidden-responsive">
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
        </div>
        <button id="showFilter" onClick={toggleFilterVisibility}>
          F <br />
          I <br />
          L <br />
          T <br />
          R <br />
          E <br />
        </button>
        <div className="renduCreateur">
          {tableFiltre.map((createur) => (
            <Link
              key={createur.id}
              to={`/Createurs/${createur.id}`}
              style={{ textDecoration: `none` }}
            >
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
