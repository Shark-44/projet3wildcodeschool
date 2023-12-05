import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import AlterwordAPI from "../services/AlterwordAPI"
import Cookies from "js-cookie"
import "./Ajoutobjet.css"

const API_URL = import.meta.env.VITE_BACKEND_URL

function Ajoutobjet() {
  const [formData, setFormData] = useState({
    nomObjet: "",
    prix: "",
    quantite: "",
    photo1: "",
    photo2: "",
    descriptionObjet: "",
    UtilisateurId: "",
    CategorieId: "",
  })
  // eslint-disable-next-line no-unused-vars
  const { register } = useForm()
  const [visuel1, setVisuel1] = useState("./src/assets/iconeobjet.png")
  const [visuel2, setVisuel2] = useState("./src/assets/iconeobjet.png")
  const [image, setImage] = useState()
  const [image2, setImage2] = useState()
  const UtilisateurId = Cookies.get("UtilisateurId")
  const [categorie, setCategorie] = useState("")
  // Pour adapter la bdd et les dossiers images
  let dossier = "default"
  if (categorie.id === 1) {
    dossier = "map"
  } else if (categorie.id === 2) {
    dossier = "mode"
  } else if (categorie.id === 3) {
    dossier = "print"
  }
  console.info("UtilisateurId:", UtilisateurId)
  // Les fonctions
  useEffect(() => {
    AlterwordAPI.get(`/categriebyuser?UtilisateurId=${UtilisateurId}`).then(
      (res) => setCategorie(res.data)
    )
  }, [UtilisateurId])
  // gestion des inputs
  const handleChange = (e) => {
    const { name, value } = e.target // Utilisez name au lieu de nomObjet
    setFormData({
      ...formData,
      [name]: value,
      UtilisateurId,
      CategorieId: categorie.id,
    })
  }

  // gestion des images
  const uploadImage = (e, photoNumber) => {
    const file = e.target.files[0]
    if (file) {
      const objectURL = URL.createObjectURL(file)
      const fileName = file.name
      if (photoNumber === 1) {
        setVisuel1(objectURL)
        setImage(file)
        setFormData((prevFormData) => ({
          ...prevFormData,
          photo1: fileName,
        }))
      } else if (photoNumber === 2) {
        setVisuel2(objectURL)
        setImage2(file)
        setFormData((prevFormData) => ({
          ...prevFormData,
          photo2: fileName,
        }))
      }
    }
  }
  const cancelImage1 = (photoNumber) => {
    if (photoNumber === 1) {
      setVisuel1("./src/assets/iconeobjet.png")
      setFormData((prevFormData) => ({
        ...prevFormData,
        photo1: "",
      }))
    } else {
      console.info("1")
    }
  }
  const cancelImage2 = (photoNumber) => {
    if (photoNumber === 2) {
      setVisuel2("./src/assets/iconeobjet.png")
      setFormData((prevFormData) => ({
        ...prevFormData,
        photo2: "",
      }))
    } else {
      console.info("2")
    }
  }
  // l'enregistrement
  const handleSubmit = async (e) => {
    e.preventDefault()
    formData.UtilisateurId = Number(UtilisateurId)
    formData.CategorieId = categorie.id
    try {
      if (image) {
        const formPayload = new FormData()
        formPayload.append("myfile", image)
        const uploadUrl = `${API_URL}/upload/${dossier}`
        fetch(uploadUrl, {
          method: "POST",
          body: formPayload,
        })
      }
      if (image2) {
        const formPayload = new FormData()
        formPayload.append("myfile", image2)

        const uploadUrl = `${API_URL}/upload/${dossier}`
        fetch(uploadUrl, {
          method: "POST",
          body: formPayload,
        })
      }
      const formDataUpload = "/objetbycreateur"
      await AlterwordAPI.post(formDataUpload, formData)
    } catch (error) {
      console.error("Error submitting form:", error)
    }

    console.info(`Form submitted with data:`, formData)
  }

  return (
    <div className="contenairaddcollection">
      <form onSubmit={handleSubmit} className="Positionformulaire">
        <label htmlFor="character">Nom de l'objet</label>
        <input
          type="text"
          name="nomObjet"
          value={formData.nomObjet}
          className="imputobjet"
          onChange={handleChange}
        />
        <label htmlFor="character">Prix</label>
        <input
          type="text"
          name="prix"
          value={formData.prix}
          className="imputobjet"
          onChange={handleChange}
        />
        <label htmlFor="character">Stock</label>
        <input
          type="text"
          name="quantite"
          value={formData.quantite}
          className="imputobjet"
          onChange={handleChange}
        />
        <label htmlFor="character">Description de l'objet</label>
        <input
          type="text"
          name="descriptionObjet" // Utilisez le même nom que dans l'état initial
          className="imputobjet"
          size="35"
          onChange={handleChange}
        />
        <button id="enregistreobjet" type="submit">
          Enregistrer
        </button>
      </form>
      <div className="imporimage">
        <h4>Importez au moins 1 photo</h4>
        <form className="importimg">
          <img className="objetimg" src={visuel1} alt="avatar" />
          <label htmlFor="file" className="label-file">
            Choisir photo 1
          </label>
          <input
            className="input-file"
            type="file"
            accept="image/*"
            id="fileInput1"
            onChange={(e) => uploadImage(e, 1)}
          />
          <button type="button" onClick={() => cancelImage1(1)}>
            Annuler la 1
          </button>
        </form>
        <form className="importimg">
          <img className="objetimg" src={visuel2} alt="avatar" />
          <label htmlFor="file" className="label-file">
            Choisir photo 2
          </label>
          <input
            className="input-file"
            type="file"
            accept="image/*"
            id="fileInput2"
            onChange={(e) => uploadImage(e, 2)}
          />
          <button type="button" onClick={() => cancelImage2(2)}>
            Annuler la 2
          </button>
        </form>
      </div>
    </div>
  )
}

export default Ajoutobjet
