import { useEffect, useState } from "react"
import axios from "axios"

const FiltreBoutiquecreateur = () => {
  const [filtreCreateur, setFiltrecreateur] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:4242/utilisateur/with/objets")
      .then((res) => setFiltrecreateur(res.data))
  }, [])
  // eslint-disable-next-line no-restricted-syntax
  console.log(filtreCreateur)
  return (
    <div className="containerfiltre">
      {filtreCreateur.map((filtre) => (
        <li key={filtre.prenom}>{filtre.prenom}</li>
      ))}
    </div>
  )
}
export default FiltreBoutiquecreateur
