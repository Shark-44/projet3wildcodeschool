import { useEffect, useState } from "react"
import axios from "axios"
import "./FiltreBoutiquecreateur.css"

const FiltreBoutiquecreateur = ({ prenom, setPrenom }) => {
  const [filtreCreateur, setFiltrecreateur] = useState([])
  const [selectedOption, setSelectedOption] = useState()

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
    setPrenom((prenom = event.target.value))
  }

  useEffect(() => {
    axios
      .get("http://localhost:4242/utilisateur/with/categorie")
      .then((res) => setFiltrecreateur(res.data))
  }, [])

  return (
    <div className="containerfiltre">
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Createurs</option>
        {filtreCreateur.map((filtre) => (
          <option key={filtre.id} value={filtre.prenom}>
            {filtre.prenom}
          </option>
        ))}
      </select>
    </div>
  )
}
export default FiltreBoutiquecreateur
