import Cookies from "js-cookie"
import AlterwordAPI from "../services/AlterwordAPI"
import { useState, useEffect } from "react"
import "./CarddesFavoris.css"
function CarddesFavoris() {
  const [listFavoris, setListFavoris] = useState([])
  const UtilisateurID = Cookies.get("UtilisateurId")
  const API_URL = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    AlterwordAPI.get(`/favorispouruser?UtilisateurID=${UtilisateurID}`)
      .then((res) => setListFavoris(res.data))
      .catch((err) => {
        console.error("Error lead", err)
      })
  }, [UtilisateurID])
  const handleDel = (index) => {
    const Deleteid = listFavoris[index].Utilisateur_id1
    AlterwordAPI.delete(
      `/favorispouruser?UtilisateurID=${UtilisateurID}&UtilisateurID1=${Deleteid}`
    )
      .then((res) => {
        const newListFavoris = [...listFavoris]
        newListFavoris.splice(index, 1)
        setListFavoris(newListFavoris)
      })
      .catch((err) => {
        console.error("Error delete", err)
      })
  }
  return (
    <div className="ContenairdesFavoris">
      {listFavoris.map((objet, index) => (
        <div className="Cardetailfavoris" key={index}>
          <p>{objet?.prenom}</p>
          <img
            className="imgpanier"
            src={API_URL + "/assets/images/avatar/" + objet?.photo}
            alt={objet?.nomObjet}
          />
          <div className="deletebtn">
            <input
              type="image"
              className="btndelete"
              onClick={() => handleDel(index)}
              src={API_URL + "/assets/images/autre/delete.png"}
            ></input>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CarddesFavoris
