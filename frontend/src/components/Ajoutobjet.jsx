import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import "./Ajoutobjet.css"

const API_URL = import.meta.env.VITE_BACKEND_URL

function Ajoutobjet() {
  const [formData, setFormData] = useState({
    nomObjet: "",
    prix: "",
    quantite: "",
    descriptionObjet: "",
    photo1: "",
    photo2: "",
  })
  // eslint-disable-next-line no-unused-vars
  const { register } = useForm()
  const [visuel1, setVisuel1] = useState("./src/assets/iconeobjet.png")
  const [visuel2, setVisuel2] = useState("./src/assets/iconeobjet.png")
  const [image, setImage] = useState()
  // eslint-disable-next-line no-unused-vars
  const [image2, setImage2] = useState()
  const saveImages = async () => {
    try {
      if (image) {
        const formPayload = new FormData()
        formPayload.append("myfile", image)

        fetch(API_URL + "/upload", {
          method: "POST",
          body: formPayload,
        })
      }
      if (image2) {
        const formPayload = new FormData()
        formPayload.append("myfile", image2)

        fetch(API_URL + "/upload", {
          method: "POST",
          body: formPayload,
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      // Gérer les erreurs de manière appropriée
    }
  }
  useEffect(() => {
    saveImages()
  }, [formData])
  const handleChange = (e) => {
    const { name, value } = e.target // Utilisez name au lieu de nomObjet
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    saveImages()

    console.info(`Form submitted with data:`, formData)
  }
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
  const cancelImage = (photoNumber) => {
    if (photoNumber === 1) {
      setVisuel1("./src/assets/iconeobjet.png")
      setFormData((prevFormData) => ({
        ...prevFormData,
        photo1: "",
      }))
    } else if (photoNumber === 2) {
      setVisuel2("./src/assets/iconeobjet.png")
      setFormData((prevFormData) => ({
        ...prevFormData,
        photo2: "",
      }))
    }
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
            onChange={(e) => uploadImage(e, 1)}
          />
          <button onClick={() => cancelImage(1)}>Annuler</button>
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
            onChange={(e) => uploadImage(e, 2)}
          />
          <button onClick={() => cancelImage(2)}>Annuler</button>
        </form>
      </div>
    </div>
  )
}

export default Ajoutobjet
