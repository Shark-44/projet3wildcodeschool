import AlterwordAPI from "../services/AlterwordAPI"
import { useEffect, useState } from "react"
import "./Cardavis.css"

const Cardavis = () => {
  const [avisuser, setAvisuser] = useState([])
  const API_URL = import.meta.env.VITE_BACKEND_URL
  const newarrayAvisobjet = () => {
    const randomAvisObjet1 =
      avisuser[Math.floor(Math.random() * avisuser.length)]
    const randomAvisObjet2 =
      avisuser[Math.floor(Math.random() * avisuser.length)]
    const randomAvisObjet3 =
      avisuser[Math.floor(Math.random() * avisuser.length)]

    const newArray = [randomAvisObjet1, randomAvisObjet2, randomAvisObjet3]

    return newArray
  }

  useEffect(() => {
    AlterwordAPI.get("/avisurobjet").then((res) => setAvisuser(res.data))
  }, [])
  return (
    <div className="renduAvis">
      {newarrayAvisobjet().map((randomAvis) => (
        <div key={randomAvis?.id} className="cardavis">
          <h2>{randomAvis?.avisObjet}</h2>
          <img
            src={API_URL + "/assets/images/avatar/" + randomAvis?.photo}
            alt={randomAvis?.prenom}
          />
        </div>
      ))}
    </div>
  )
}
export default Cardavis
