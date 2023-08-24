import axios from "axios"
import { useState } from "react"
import "./Formulaire.css"

function Formulaire() {
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [imageUrl, setImageUrl] = useState("./src/assets/avatar.png") // definir une image icone user
  const [joueur, setJoueur] = useState(null) // definir si le user est un acheteur ou createur
  const [isVisible, setIsVisible] = useState(false) // pour cacher les elements joueur/createur
  const [selectCategorie, setSelectCategorie] = useState(null) // definir une categorie
  const [description, setDescription] = useState("")

  const handleSubmit = () => {
    axios.post("http://localhost:4242/utilisateur", {
      nom,
      prenom,
      email,
      password,
    })
  }
  // Chargement d'image ou delete
  const uploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageUrl(URL.createObjectURL(e.target.files[0]))
    }
  }
  const cancelImage = (e) => {
    e.preventDefault()
    setImageUrl("./src/assets/avatar.png")
  }
  // Selection joueur ou createur + affichage detail createur
  // eslint-disable-next-line no-restricted-syntax
  console.log(joueur)
  const handleOptionChange = (event) => {
    setJoueur(event.target.value === "true")
    if (joueur === true) {
      // eslint-disable-next-line no-restricted-syntax
      console.log(isVisible)
      setIsVisible(!isVisible)
    }
  }
  // Selection categorie pour createur
  const handleSelect = (event) => {
    setSelectCategorie(event.target.value)
    // eslint-disable-next-line no-restricted-syntax
    console.log(selectCategorie)
  }

  return (
    <div className="contenair">
      <h1>Je suis sur la page Formulaire</h1>
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
        <br />
        <label htmlFor="avatar">Avatar:</label>
        <img className="icone" src={imageUrl} alt="avatar" />
        <input type="file" accept="image/*" onChange={uploadImage} />
        <button onClick={cancelImage}>Annuler</button>
        <br />
        Serez vous? :
        <input
          type="radio"
          value="false"
          name="type"
          checked={joueur === false}
          onChange={handleOptionChange}
        />
        Joueur
        <input
          type="radio"
          value="true"
          name="type"
          checked={joueur === true}
          onChange={handleOptionChange}
        />
        Createur
        <br />
      </div>
      {isVisible && (
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
