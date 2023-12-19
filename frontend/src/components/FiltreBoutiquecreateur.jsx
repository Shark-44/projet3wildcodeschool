import { useEffect, useState } from "react"
import AlterwordAPI from "../services/AlterwordAPI"
import "./FiltreBoutiquecreateur.css"

const FiltreBoutiquecreateur = ({ prenom, setPrenom }) => {
  const [filtreCreateur, setFiltrecreateur] = useState([])
  const [selectedOption, setSelectedOption] = useState()

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
    setPrenom(event.target.value)
  }

  useEffect(() => {
    AlterwordAPI.get("/utilisateur/with/categorie").then((res) =>
      setFiltrecreateur(res.data)
    )
  }, [prenom])

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
