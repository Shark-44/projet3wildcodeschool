import "./Paiement.css"
import Cartes from "../assets/cartes.jpg"
import Carte from "../assets/carte.jpg"
import Paypal from "../assets/paypal.png"
import { useState } from "react"
import { Link } from "react-router-dom"
const mois = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
]
const annee = [
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
]
function Paiement() {
  const [selectedOption, setSelectedOption] = useState()
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  return (
    <div className="Containerpaid">
      <div className="paiement">
        <img className="Cartes" src={Cartes} alt="" />
        <div className="parcarte">
          <input type="checkbox" />
          <img id="cartepaid" src={Carte} alt="" />
          <div className="formulairepaid">
            <div className="zonesaisie">
              <label htmlFor="character">Numero de carte bancaire</label>
              <input type="text" />
            </div>
            <div className="zonesaisie">
              <label htmlFor="character">Date d'expiration</label>
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Mois</option>
                {mois.map((mo) => (
                  <option key={mo.id} value={mo}>
                    {mo}
                  </option>
                ))}
              </select>
              <p id="separateur">/</p>
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Année</option>
                {annee.map((an) => (
                  <option key={an.id} value={an}>
                    {an}
                  </option>
                ))}
              </select>
            </div>
            <div className="zonesaisie">
              <label htmlFor="character">Code de verification</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="paypal">
          <input type="checkbox" />
          <img id="iconepaypal" src={Paypal} alt="" />
        </div>
      </div>
      <div id="centrage">
        <Link to="/">
          <button className="btnpayer">PAYER</button>
        </Link>
      </div>
    </div>
  )
}
export default Paiement
