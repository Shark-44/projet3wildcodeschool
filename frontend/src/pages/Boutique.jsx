import AlterwordAPI from "../services/AlterwordAPI"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Boutique.css"
import CardB from "../components/CardB"
import FiltreBoutiquecreateur from "../components/FiltreBoutiquecreateur"
import FiltreBoutiquecategorie from "../components/FiltreBoutiquecategorie"

function Boutique() {
  const [objets, setObjets] = useState([])
  const [prenom, setPrenom] = useState()
  const [idCategorie, setidCategorie] = useState()

  useEffect(() => {
    if (!prenom && !idCategorie) {
      AlterwordAPI.get("/objets").then((res) => setObjets(res.data))
    } else if (prenom !== undefined && idCategorie !== undefined) {
      AlterwordAPI.get(`/utilisateur/with/objets?prenom=${prenom}`).then(
        (res) => setObjets(res.data)
      )
    } else if (!prenom && idCategorie !== undefined) {
      AlterwordAPI.get(`/objets/with/categorie?type=${idCategorie}`).then(
        (res) => setObjets(res.data)
      )
    } else if (prenom !== undefined && !idCategorie) {
      AlterwordAPI.get(`/utilisateur/with/objets?prenom=${prenom}`).then(
        (res) => setObjets(res.data)
      )
    }
  }, [prenom || idCategorie])

  const onclick = () => {
    setPrenom(undefined)
    setidCategorie(undefined)
  }
  function toggleFilterVisibility() {
    const renduA = document.querySelector(".renduA")
    renduA.classList.toggle("hidden-responsive")
    renduA.classList.toggle("visible-responsive")
  }

  return (
    <div className="container Boutique">
      <h1>Votre boutique</h1>
      <div className="rendu">
        <div className="renduA hidden-responsive">
          <h3> les filtres</h3>
          <FiltreBoutiquecategorie
            idCategorie={idCategorie}
            setidCategorie={setidCategorie}
          />
          <FiltreBoutiquecreateur prenom={prenom} setPrenom={setPrenom} />
          <button id="bdt-filtre" onClick={onclick}>
            Reset
          </button>
        </div>
        <button id="showFilter" onClick={toggleFilterVisibility}>
          F <br />
          I <br />
          L <br />
          T <br />
          R <br />
          E <br />
        </button>
        <div className="renduB">
          {objets.map((objet) => (
            <Link className="link" key={objet.id} to={`/Boutique/${objet.id} `}>
              <CardB
                key={objet.id}
                nomObjet={objet.nomObjet}
                photo1={objet.photo1}
              />
              <div className="blanc"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Boutique
