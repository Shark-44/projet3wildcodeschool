import axios from "axios"
import { useState } from "react"
import "./Formulaire.css"
import Uploadimg from "../components/Uploadimg"

function Formulaire() {
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [adresse, setAdresse] = useState("")
  const [codePostal, setCodepostal] = useState("")
  const [ville, setVille] = useState("")
  const [createur, setCreateur] = useState(0) // pour cacher les elements joueur/createur
  const [CategorieID, setCategorieID] = useState(null) // definir une categorie
  const [descriptionCreateur, setDescriptionCreateur] = useState("")
  const [photo, setPhoto] = useState("")

  const handleSubmit = () => {
    if (createur === "0") {
      axios.post("http://localhost:4242/utilisateur", {
        nom,
        prenom,
        email,
        password,
        adresse,
        codePostal,
        ville,
        createur,
        photo,
      })
    } else {
      axios.post("http://localhost:4242/utilisateur/with/categorie", {
        nom,
        prenom,
        email,
        password,
        adresse,
        codePostal,
        ville,
        createur,
        photo,
        descriptionCreateur,
        CategorieID,
      })
    }
  }
  const handleOptionChange = (event) => {
    setCreateur(event.target.value)
  }
  // Selection categorie pour createur
  const handleSelect = (event) => {
    setCategorieID(event.target.value)
  }
  const handlechargeChange = (newCharge) => {
    setPhoto(newCharge)
  }
  return (
    <div className="contenair">
      <h1>Formulaire d'enregistrement</h1>
      {photo}
      {createur}
      <div className="general">
        <label htmlFor="character">Nom:</label>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <br />
        <label htmlFor="character">Prenom:</label>
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <br />
        <label htmlFor="character">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="character">Mot de passe:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label htmlFor="character">Adresse:</label>
        <input
          type="text"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
        />
        <br />
        <label htmlFor="character">Code Postal:</label>
        <input
          type="number"
          value={codePostal}
          onChange={(event) => {
            const newValue = event.target.value
            if (!isNaN(newValue)) {
              setCodepostal(newValue)
            }
          }}
        />
        <br />
        <label htmlFor="character">Ville :</label>
        <input
          type="text"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />
        {photo}
        <Uploadimg nomphotoChange={handlechargeChange} />
        Serez vous? :
        <input
          type="radio"
          value={0}
          name="type"
          onChange={handleOptionChange}
        />
        Joueur
        <input
          type="radio"
          value={1}
          name="type"
          onChange={handleOptionChange}
        />
        Createur
        <br />
      </div>
      {createur === "1" && (
        <div className="createur">
          Votre domaine est :
          <input type="radio" value={1} name="style" onChange={handleSelect} />
          Graphique
          <input type="radio" value={2} name="style" onChange={handleSelect} />
          Mode
          <input type="radio" value={3} name="style" onChange={handleSelect} />
          Print 3D
          <br />
          {CategorieID}
          <label htmlFor="character">Description personnel</label>
          <input
            type="text"
            className="description"
            value={descriptionCreateur}
            size="35"
            onChange={(e) => setDescriptionCreateur(e.target.value)}
          />
        </div>
      )}
      <input type="button" value="Soumettre" onClick={handleSubmit} />
    </div>
  )
}

export default Formulaire
