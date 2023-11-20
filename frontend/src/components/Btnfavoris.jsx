import AlterwordAPI from "../services/AlterwordAPI"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import favoris from "../assets/favorison.png"
import nofavoris from "../assets/favorisoff.png"
import "./Btnfavoris.css"

const Btnfavoris = ({ params }) => {
  const [favorites, setFavorites] = useState(0)
  const imageSrc = favorites ? favoris : nofavoris
  const UtilisateurID = Cookies.get("UtilisateurId")
  const UtilisateurID1 = params
  // const UtilisateurID = 1
  // const UtilisateurID1 = 2

  useEffect(() => {
    if (favorites === 0) {
      AlterwordAPI.get(
        `/favoris?UtilisateurID=${UtilisateurID}&UtilisateurID1=${UtilisateurID1}`
      )
        .then((res) => {
          if (
            res.data &&
            res.data.length > 0 &&
            res.data[0].favoris !== undefined
          ) {
            const favoritesData = res.data[0].favoris
            setFavorites(favoritesData)
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des favoris:", error)
        })
    }
  }, [favorites, UtilisateurID, UtilisateurID1])

  const handleFavoriteClick = () => {
    if (favorites === 1) {
      AlterwordAPI.delete(
        `/favoris?UtilisateurID=${UtilisateurID}&UtilisateurID1=${UtilisateurID1}`
      )
        .then(() => {
          setFavorites((favorites) => 1 - favorites)
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression des favoris:", error)
        })
    } else {
      AlterwordAPI.post(
        `/favoris?UtilisateurID=${UtilisateurID}&UtilisateurID1=${UtilisateurID1}&favoris=1`
      )
        .then(() => {
          setFavorites((favorites) => 1 + favorites)
        })
        .catch((error) => {
          console.error("Erreur lors de la suppression des favoris:", error)
        })
    }
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
