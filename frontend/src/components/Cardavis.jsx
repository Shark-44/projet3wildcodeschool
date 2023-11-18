import AlterwordAPI from "../services/AlterwordAPI"
import { useEffect, useState } from "react"
import "./Cardavis.css"

const Cardavis = () => {
  const [avisuser, setAvisuser] = useState([])
  const API_URL = import.meta.env.VITE_BACKEND_URL
  /* le 18/11 modification du code pour une fonction avec un objet itérable
   const newarrayAvisobjet = () => {
    const randomAvisObjet1 =
      avisuser[Math.floor(Math.random() * avisuser.length)]
    const randomAvisObjet2 =
      avisuser[Math.floor(Math.random() * avisuser.length)]
    const randomAvisObjet3 =
      avisuser[Math.floor(Math.random() * avisuser.length)]

    const newArray = [randomAvisObjet1, randomAvisObjet2, randomAvisObjet3]

    return newArray
  } */
  const getRandomAvisObjet = () =>
    Array.from(
      { length: 3 },
      () => avisuser[Math.floor(Math.random() * avisuser.length)]
    )
  // eslint-disable-next-line no-restricted-syntax
  console.log(getRandomAvisObjet)
  useEffect(() => {
    AlterwordAPI.get("/avisurobjet").then((res) => setAvisuser(res.data))
  }, [])
  // les conditions ligne 20 s'assure que "avisuser" est bien chargé ainsi que la ligne 24 */
  return (
    <div className="renduAvis">
      {avisuser.length > 0 &&
        getRandomAvisObjet().map((randomAvis, index) => (
          <div key={`${randomAvis?.id}-${index}`} className="cardavis">
            <h2>{randomAvis?.avisObjet}</h2>
            {randomAvis && (
              <img
                src={`${API_URL}/assets/images/avatar/${randomAvis.photo}`}
                alt={randomAvis.prenom}
              />
            )}
          </div>
        ))}
    </div>
  )
}

export default Cardavis
