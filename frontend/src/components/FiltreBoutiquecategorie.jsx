import { useEffect, useState } from "react"
import AlterwordAPI from "../services/AlterwordAPI"
import "./FiltreBoutiquecreateur.css"

const FiltreBoutiquecategorie = ({ idCategorie, setidCategorie }) => {
  const [filtreCreateur, setFiltrecreateur] = useState([])
  const [selectedOption, setSelectedOption] = useState()

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
    setidCategorie((idCategorie = event.target.value))
  }

  useEffect(() => {
    AlterwordAPI.get("/categorie").then((res) => setFiltrecreateur(res.data))
  }, [])

  return (
    <div className="containerfiltre">
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Categorie</option>
        {filtreCreateur.map((filtre) => (
          <option key={filtre.id} value={filtre.id}>
            {filtre.type}
          </option>
        ))}
      </select>
    </div>
  )
}
export default FiltreBoutiquecategorie
