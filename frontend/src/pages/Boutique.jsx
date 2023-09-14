import axios from "axios"
import { useEffect, useState } from "react"
import "./Boutique.css"
import CardB from "../components/CardB"
import FiltreBoutiquecreateur from "../components/FiltreBoutiquecreateur"
import FiltreBoutiquecategorie from "../components/FiltreBoutiquecategorie"

function Boutique() {
  const [objets, setObjets] = useState([])
  const [prenom, setPrenom] = useState()
  const [type, setType] = useState()

  useEffect(() => {
    if (prenom === undefined && type === undefined) {
      axios
        .get("http://localhost:4242/objets")
        .then((res) => setObjets(res.data))
    } else if (prenom !== undefined && type === undefined) {
      axios
        .get(`http://localhost:4242/utilisateur/with/objets?prenom=${prenom}`)
        .then((res) => setObjets(res.data))
    } else if (prenom === undefined && type !== undefined) {
      axios
        .get(`http://localhost:4242/objets/with/categorie?type=${type}`)
        .then((res) => setObjets(res.data))
    }
  }, [prenom, type])
  // eslint-disable-next-line no-restricted-syntax
  console.log(objets)

  return (
    <div className="contenaireB">
      <h1>Votre boutique</h1>
      {type}
      <div className="rendu">
        <div className="renduA">
          <div> les filtres</div>
          <div className="filtreA">
            <FiltreBoutiquecreateur prenom={prenom} setPrenom={setPrenom} />
            <FiltreBoutiquecategorie type={type} setType={setType} />
          </div>
        </div>
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
    </div>
  )
}
export default Boutique
