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
  const [type, setType] = useState()

  useEffect(() => {
    if (!prenom && !type) {
      AlterwordAPI.get("/objets").then((res) => setObjets(res.data))
    } else if (prenom !== undefined && type !== undefined) {
      AlterwordAPI.get(`/utilisateur/with/objets?prenom=${prenom}`).then(
        (res) => setObjets(res.data)
      )
    } else if (!prenom && type !== undefined) {
      AlterwordAPI.get(`/objets/with/categorie?type=${type}`).then((res) =>
        setObjets(res.data)
      )
    } else if (prenom !== undefined && !type) {
      AlterwordAPI.get(`/utilisateur/with/objets?prenom=${prenom}`).then(
        (res) => setObjets(res.data)
      )
    }
  }, [prenom || type])

  const onclick = () => {
    setPrenom(undefined)
    setType(undefined)
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
          <FiltreBoutiquecategorie type={type} setType={setType} />
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Boutique
