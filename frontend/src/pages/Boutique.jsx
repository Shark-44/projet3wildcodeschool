import axios from "axios"
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
    // eslint-disable-next-line no-restricted-syntax
    console.log(prenom)
    if (prenom === undefined && type === undefined) {
      axios
        .get("http://localhost:4242/objets")
        .then((res) => setObjets(res.data))
    } else if (prenom === undefined && type !== undefined) {
      axios
        .get(`http://localhost:4242/objets/with/categorie?type=${type}`)
        .then((res) => setObjets(res.data))
    } else if (prenom !== undefined && type === undefined) {
      axios
        .get(`http://localhost:4242/utilisateur/with/objets?prenom=${prenom}`)
        .then((res) => setObjets(res.data))
    }
  }, [prenom || type])

  const onclick = () => {
    setPrenom(undefined)
    setType(undefined)
  }

  return (
    <div className="contenaireB">
      <h1>Votre boutique</h1>
      <div className="rendu">
        <div className="renduA">
          <h3> les filtres</h3>
          <FiltreBoutiquecategorie type={type} setType={setType} />
          <FiltreBoutiquecreateur prenom={prenom} setPrenom={setPrenom} />
          <button onClick={onclick}>Reset</button>
        </div>
        <div className="renduB">
          {objets.map((objet) => (
            <Link key={objet.id} to={`/Boutique/${objet.id}`}>
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
