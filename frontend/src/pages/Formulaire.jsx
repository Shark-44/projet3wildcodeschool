import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import "./Formulaire.css"

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
  const [verify, setVerify] = useState(false)
  // pour img
  const [image, setImage] = useState("./src/assets/avatar.png")
  // pour soumettre a la bdd
  const { register, handleSubmit } = useForm()
  // eslint-disable-next-line no-unused-vars
  const handlevalided = () => {
    // eslint-disable-next-line no-restricted-syntax
    console.log("je suis la")
    if (createur === "0") {
      // eslint-disable-next-line no-restricted-syntax
      console.log("axios en cours")
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
      // eslint-disable-next-line no-restricted-syntax
      console.log("pas normal")
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
  // Affiche ou nom section createur
  const handleOptionChange = (event) => {
    setCreateur(event.target.value)
  }
  // Selection categorie pour createur
  const handleSelect = (event) => {
    setCategorieID(event.target.value)
  }

  // Permet de previsualiser l'image
  const uploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]))
      setVerify(true)
    }
  }
  const cancelImage = (e) => {
    e.preventDefault()
    setImage("./src/assets/avatar.png")
    setVerify(false)
  }
  // .................
  const onSubmit = (data) => {
    const formData = new FormData()
    formData.append("myfile", data.myfile[0])
    const fileInput = data.myfile[0] // Récupérer le premier élément du tableau, qui est le fichier
    setPhoto(fileInput.name) // Obtenir le nom du fichier

    fetch("http://localhost:4242/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .catch((err) => console.error(err))
  }
  // eslint-disable-next-line no-restricted-syntax
  console.log(verify)
  return (
    <div className="contenair">
      <h1>Formulaire d'enregistrement</h1>
      valide nom photo :{photo}
      valide image : {image}
      <div className="general">
        <div className="partiegenerale">
          <div className="formulaireclass">
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
          </div>
          <div className="importimg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <img className="icone" src={image} alt="avatar" />
              <label htmlFor="file" className="label-file">
                Choisir une image
              </label>
              <input
                className="input-file"
                {...register("myfile")}
                type="file"
                accept="image/*"
                onChange={uploadImage}
              />
              <button onClick={cancelImage}>Annuler</button>
            </form>
          </div>
        </div>
        <div className="selectioncreateur">
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
            <input
              type="radio"
              value={1}
              name="style"
              onChange={handleSelect}
            />
            Graphique
            <input
              type="radio"
              value={2}
              name="style"
              onChange={handleSelect}
            />
            Mode
            <input
              type="radio"
              value={3}
              name="style"
              onChange={handleSelect}
            />
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
        <input type="button" value="Submit" onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  )
}

export default Formulaire
