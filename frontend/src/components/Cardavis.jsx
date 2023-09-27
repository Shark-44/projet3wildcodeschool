import axios from "axios"
import { useEffect, useState } from "react"
import "./Cardavis.css"

const Cardavis = () => {
  const [avis, setAvis] = useState([])
  const newarrayAvisobjet = () => {
    const randomAvisObjet1 = avis[Math.floor(Math.random() * avis.length)]
    const randomAvisObjet2 = avis[Math.floor(Math.random() * avis.length)]
    const randomAvisObjet3 = avis[Math.floor(Math.random() * avis.length)]

    const newArray = [randomAvisObjet1, randomAvisObjet2, randomAvisObjet3]

    return newArray
  }

  useEffect(() => {
    axios
      .get("http://localhost:4242/avisurobjet")
      .then((res) => setAvis(res.data))
  }, [])
  return (
    <div className="renduAvis">
      {newarrayAvisobjet().map((randomAvis) => (
        <div key={randomAvis?.id}>
          <h2>{randomAvis?.avisObjet}</h2>
          <img
            src={`http://localhost:4242/assets/images/avatar/${randomAvis?.photo}`}
            alt={randomAvis?.prenom}
          />
        </div>
      ))}
    </div>
  )
}
export default Cardavis
