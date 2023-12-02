import React, { useState, useEffect } from "react"
import AlterwordAPI from "../services/AlterwordAPI"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons"
import "./Formulaire.css"
import zxcvbn from "zxcvbn"
import Progressbar from "../components/Progressbar"

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
  // Partie enregistrement
  const { register, handleSubmit, setValue } = useForm()
  const navigate = useNavigate()

  // Pour construire la complexité du password
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [password, setPassword] = useState("")
  const [hasUppercase, setHasUppercase] = useState(false)
  const [hasLowercase, setHasLowercase] = useState(false)
  const [hasDigit, setHasDigit] = useState(false)
  const [isLengthValid, setIsLengthValid] = useState(false)
  const [selectedOption, setSelectedOption] = useState(0)

  useEffect(() => {
    register("myfile") // Pour enregistrer une image
  }, [register])
  // pour choix d'un joueur ou createur
  const handleOptionChange = (event) => {
    setFormData({
      ...formData,
      createur: String(event.target.value),
    })
    setSelectedOption(parseInt(event.target.value, 10))
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
  const isEmailExists = async (email) => {
    try {
      const response = await AlterwordAPI.get(
        `/utilisateuremailexists?email=${email}`
      )
      const status = response.status
      if (status === 200) {
        return
      } else if (status === 401) {
        console.info("401")
      } else {
        throw new Error(`Unexpected HTTP status: ${status}`)
      }
    } catch (error) {
      alert("Cette email existe déjà")
      if (error.response) {
        console.error("Error status:", error.response.status)
      }
      throw error
    }
  }
  const onSubmit = async () => {
    try {
      const emailExists = await isEmailExists(formData.email)
      console.info("je suis la")
      if (emailExists) {
        alert("Your file is being uploaded!")
        // Handle the case where the email already exists
        console.error("Email already exists")
        return
      }
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
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
    setFormData({
      ...formData,
      password: newPassword,
    })

    const uppercaseRegex = /[A-Z]/
    const lowercaseRegex = /[a-z]/
    const digitRegex = /\d/

    setHasUppercase(uppercaseRegex.test(newPassword))
    setHasLowercase(lowercaseRegex.test(newPassword))
    setHasDigit(digitRegex.test(newPassword))
    setIsLengthValid(newPassword.length >= 8)

    const result = zxcvbn(newPassword) // Valide la complexité du password
    setPasswordStrength(result.score)
    // eslint-disable-next-line no-unused-vars
    const passwordStrength = Math.min(
      result.score, // Zxcvbn score
      hasUppercase,
      hasLowercase,
      hasDigit,
      isLengthValid
    )
  }
  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    })
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
              onChange={(e) => handleInputChange("nom", e.target.value)}
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
                type={formData.visiblePW ? "text" : "password"}
                className="formulairebase"
                placeholder="!-m-M-1 et plus de 8 caracteres"
                onChange={(e) => handlePasswordChange(e)}
              />
              <div
                onClick={() => handleChange("visiblePW", !formData.visiblePW)}
                id="btPW"
              >
                {formData.visiblePW ? (
                  <EyeOutlined />
                ) : (
                  <EyeInvisibleOutlined />
                )}
              </div>
            </div>
            <div className="Pourprogressbar">
              <Progressbar
                value={passwordStrength}
                max="4"
                passwordStrength={passwordStrength}
              ></Progressbar>
            </div>

            {password && (
              <div className="Condition">
                {hasUppercase && hasLowercase && hasDigit && isLengthValid ? (
                  <h6>condition remplies</h6>
                ) : (
                  <div>
                    {hasUppercase ? "✅" : "❌"} Au moins une majuscule
                    {hasLowercase ? "✅" : "❌"} Au moins une minuscule
                    {hasDigit ? "✅" : "❌"} Au moins un chiffre
                    {isLengthValid ? "✅" : "❌"} Et plus de 10 caractères
                  </div>
                )}
              </div>
            )}
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
          <div
            className={`selectionne ${selectedOption === 0 ? "selected" : ""}`}
          >
            <input
              type="radio"
              value={0}
              name="type"
              onChange={handleOptionChange}
            />
            Joueur
          </div>
          <div
            className={`selectionne ${selectedOption === 1 ? "selected" : ""}`}
          >
            <input
              type="radio"
              value={1}
              name="type"
              onChange={handleOptionChange}
            />
            Createur
          </div>

          <br />
        </div>
        {formData.createur === "1" && (
          <div className="createur">
            <div className="selection">
              <h3>Votre domaine est : </h3>
              <div className="choixcreateur">
                <input
                  type="radio"
                  value={1}
                  name="style"
                  onChange={handleSelect}
                />
                Graphique
              </div>
              <div className="choixcreateur">
                <input
                  type="radio"
                  value={2}
                  name="style"
                  onChange={handleSelect}
                />
                Mode
              </div>
              <div className="choixcreateur">
                <input
                  type="radio"
                  value={3}
                  name="style"
                  onChange={handleSelect}
                />
                Print 3D
              </div>
              <br />
              <div className="reponse">
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
