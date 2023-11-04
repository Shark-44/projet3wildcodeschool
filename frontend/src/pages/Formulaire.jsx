import AlterwordAPI from "../services/AlterwordAPI"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
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
  const [photo, setPhoto] = useState("") // nom de la photo
  const [verify, setVerify] = useState(false)
  // pour img
  const [image, setImage] = useState("./src/assets/avatar.png")
  const [visuel, setVisuel] = useState("./src/assets/avatar.png")

  // pour soumettre a la bdd
  const { register } = useForm()

  const navigate = useNavigate()

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
    setImage(e.target.files[0])
    setVisuel(URL.createObjectURL(e.target.files[0]))
    setVerify(true)
    setPhoto(e.target.files[0].name)
  }
  const cancelImage = (e) => {
    e.preventDefault()
    setVisuel("./src/assets/avatar.png")
    setVerify(false)
    setPhoto("")
  }
  // .................
  const handleSubmit = (data) => {
    if (verify) {
      const formData = new FormData()
      formData.append("myfile", image)
      fetch("http://localhost:4242/upload", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .catch((err) => console.error(err))
        .then((data) => {
          if (createur === "0") {
            AlterwordAPI.post("/utilisateur", {
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
            AlterwordAPI.post("/utilisateur/with/categorie", {
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
        })
    } else {
      if (createur === "0") {
        AlterwordAPI.post("/utilisateur", {
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
        AlterwordAPI.post("/utilisateur/with/categorie", {
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
    navigate("/")
  }

  return (
    <div className="contenairformulaire">
      <h1>Formulaire d'enregistrement</h1>
      {photo}
      <div className="general">
        <div className="partiegenerale">
          <div className="formulaireclass">
            <label htmlFor="character">Nom:</label>
            <input
              type="text"
              value={nom}
              className="formulairebase"
              onChange={(e) => setNom(e.target.value)}
            />
            <br />
            <label htmlFor="character">Prenom:</label>
            <input
              type="text"
              value={prenom}
              className="formulairebase"
              onChange={(e) => setPrenom(e.target.value)}
            />
            <br />
            <label htmlFor="character">Email:</label>
            <input
              type="email"
              value={email}
              className="formulairebase"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="character">Mot de passe:</label>
            <input
              type="text"
              value={password}
              className="formulairebase"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label htmlFor="character">Adresse:</label>
            <input
              type="text"
              value={adresse}
              className="formulairebase"
              onChange={(e) => setAdresse(e.target.value)}
            />
            <br />
            <label htmlFor="character">Code Postal:</label>
            <input
              type="number"
              value={codePostal}
              className="formulairebase"
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
              className="formulairebase"
              value={ville}
              onChange={(e) => setVille(e.target.value)}
            />
          </div>
          <div className="importimg">
            <form>
              <img className="icone" src={visuel} alt="avatar" />
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
          <h3>Vous êtes ?</h3>
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
            <div className="selection">
              <h3>Votre domaine est : </h3>
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
              <label htmlFor="character">Description personnel</label>
              <input
                type="text"
                className="description"
                value={descriptionCreateur}
                size="35"
                onChange={(e) => setDescriptionCreateur(e.target.value)}
              />
            </div>
          </div>
        )}
        <input
          type="button"
          title="submit"
          value="Soumettre"
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default Formulaire
