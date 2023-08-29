import axios from "axios"
import { useState } from "react"
import "./Formulaire.css"
import Uploadimg from "../components/Uploadimg"

function Formulaire() {
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [createur, setCreateur] = useState(false) // pour cacher les elements joueur/createur
  const [selectCategorie, setSelectCategorie] = useState(null) // definir une categorie
  const [description, setDescription] = useState("")

  const handleSubmit = () => {
    axios.post("http://localhost:4242/utilisateur", {
      nom,
      prenom,
      email,
      password,
      createur,
    })
  }
  const handleOptionChange = (event) => {
    setCreateur(event.target.value)
  }
  // Selection categorie pour createur
  const handleSelect = (event) => {
    setSelectCategorie(event.target.value)
  }

  return (
    <div className="contenair">
      {createur}
      <h1>Formulaire d'enregistrement</h1>
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
          type="text"
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
        <Uploadimg />
        Serez vous? :{selectCategorie}
        <input
          type="radio"
          value={false}
          name="type"
          onChange={handleOptionChange}
        />
        Joueur
        <input
          type="radio"
          value={true}
          name="type"
          onChange={handleOptionChange}
        />
        Createur
        <br />
      </div>
      {createur === "true" && (
        <div className="createur">
          Votre domaine est :
          <input
            type="radio"
            value="Graphisme"
            name="style"
            onChange={handleSelect}
          />{" "}
          Graphique
          <input
            type="radio"
            value="Mode"
            name="style"
            onChange={handleSelect}
          />{" "}
          Mode
          <input
            type="radio"
            value="3DPrint"
            name="style"
            onChange={handleSelect}
          />{" "}
          Print 3D
          <br />
          <label htmlFor="character">Description personnel</label>
          <input
            type="text"
            className="description"
            value={description}
            size="35"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      )}
      <input type="button" value="Soumettre" onClick={handleSubmit} />
    </div>
  )
}

export default Formulaire
