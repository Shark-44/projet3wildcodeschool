import React, { useState, useEffect } from "react"
import AlterwordAPI from "../services/AlterwordAPI"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons"
import "./Formulaire.css"
import zxcvbn from "zxcvbn"

const API_URL = import.meta.env.VITE_BACKEND_URL

function Formulaire() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    adresse: "",
    codePostal: "",
    ville: "",
    createur: 0,
    CategorieID: null,
    descriptionCreateur: "",
    photo: "",
  })

  const [image, setImage] = useState("./src/assets/avatar.png")
  const [visuel, setVisuel] = useState("./src/assets/avatar.png")
  const [visiblePW, setVisiblePW] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)

  const { register, handleSubmit, setValue } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    register("myfile") // Enregistrez le champ après le rendu initial
  }, [register])

  const handleOptionChange = (event) => {
    setFormData({
      ...formData,
      createur: String(event.target.value),
    })
  }

  const handleSelect = (event) => {
    setFormData({
      ...formData,
      CategorieID: String(event.target.value),
    })
  }

  const uploadImage = (e) => {
    const file = e.target.files[0]

    if (file) {
      const objectURL = URL.createObjectURL(file)
      setValue("myfile", file) // Mettez à jour la valeur du champ de fichier
      setImage(file)
      setVisuel(objectURL)
      setFormData({
        ...formData,
        photo: file.name,
      })
    }
  }

  const cancelImage = (e) => {
    e.preventDefault()
    setVisuel("./src/assets/avatar.png")
    setFormData({
      ...formData,
      photo: "",
    })
  }

  const onSubmit = async () => {
    try {
      const formPayload = new FormData()
      formPayload.append("myfile", image)

      const response = await fetch(API_URL + "/upload", {
        method: "POST",
        body: formPayload,
      })

      // eslint-disable-next-line no-unused-vars
      const data = await response.json()

      if (formData.createur === "0") {
        await AlterwordAPI.post("/utilisateur", {
          ...formData,
        })
      } else {
        await AlterwordAPI.post("/utilisateur/with/categorie", {
          ...formData,
        })
      }

      navigate("/")
    } catch (error) {
      console.error("Error submitting form:", error)
      // Gérer les erreurs de manière appropriée
    }
  }
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setFormData({
      ...formData,
      password: newPassword,
    })

    const result = zxcvbn(newPassword)
    setPasswordStrength(result.score)
  }
  return (
    <div className="contenairformulaire">
      <h1>Formulaire d'enregistrement</h1>
      <div className="general">
        <div className="partiegenerale">
          <div className="formulaireclass">
            <label htmlFor="character">Nom:</label>
            <input
              type="text"
              className="formulairebase"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  nom: e.target.value,
                })
              }
            />
            <br />
            <label htmlFor="character">Prenom:</label>
            <input
              type="text"
              className="formulairebase"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  prenom: e.target.value,
                })
              }
            />
            <br />
            <label htmlFor="character">Email:</label>
            <input
              type="email"
              className="formulairebase"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            />
            <br />
            <label htmlFor="character">Mot de passe:</label>
            <div className="cachepassword">
              <input
                type={visiblePW ? "text" : "password"}
                className="formulairebase"
                placeholder="!-m-M-1 et plus de 8 caracteres"
                onChange={handlePasswordChange}
              />
              <div onClick={() => setVisiblePW(!visiblePW)} id="btPW">
                {visiblePW ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </div>
              <div className="password-strength">
                Strength: {passwordStrength}/4
              </div>
            </div>
            <br />
            <label htmlFor="character">Adresse:</label>
            <input
              type="text"
              className="formulairebase"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  adresse: e.target.value,
                })
              }
            />
            <br />
            <label htmlFor="character">Code Postal:</label>
            <input
              type="number"
              className="formulairebase"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  codePostal: e.target.value,
                })
              }
            />
            <br />
            <label htmlFor="character">Ville :</label>
            <input
              type="text"
              className="formulairebase"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  ville: e.target.value,
                })
              }
            />
          </div>
          <div>
            <form className="importimg">
              <img className="imgavatar" src={visuel} alt="avatar" />
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
        {formData.createur === "1" && (
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
                size="35"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    descriptionCreateur: e.target.value,
                  })
                }
              />
            </div>
          </div>
        )}
        <input
          id="SoumettreF"
          type="button"
          title="submit"
          value="Soumettre"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
      <div className="blancF"></div>
    </div>
  )
}

export default Formulaire
