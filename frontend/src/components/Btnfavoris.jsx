import { useState, useEffect } from "react"
import favoris from "../assets/favorison.png"
import nofavoris from "../assets/favorisoff.png"
import "./Btnfavoris.css"

const Btnfavoris = () => {
  const [favorites, setFavorites] = useState(false)
  const imageSrc = favorites ? favoris : nofavoris

  useEffect(() => {
    setFavorites()
  }, [])

  const handleFavoriteClick = () => {
    setFavorites((favorites) => !favorites)
  }

  return (
    <div className="Container-favoris">
      <h3>Ajouter aux favoris</h3>
      <input
        type="image"
        id="btnfavoris"
        onClick={handleFavoriteClick}
        src={imageSrc}
        alt=""
      ></input>
    </div>
  )
}

export default Btnfavoris
