import { useEffect, useState } from "react"
import axios from "axios"
import "./FiltreBoutiquecreateur.css"

const FiltreBoutiquecategorie = ({ type, setType }) => {
  const [filtreCreateur, setFiltrecreateur] = useState([])
  const [selectedOption, setSelectedOption] = useState()

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
    setType((type = event.target.value))
  }

  useEffect(() => {
    axios
      .get("http://localhost:4242/categorie")
      .then((res) => setFiltrecreateur(res.data))
  }, [])

  return (
    <div className="containerfiltre">
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Categorie</option>
        {filtreCreateur.map((filtre) => (
          <option key={filtre.id} value={filtre.type}>
            {filtre.type}
          </option>
        ))}
      </select>
    </div>
  )
}
export default FiltreBoutiquecategorie
