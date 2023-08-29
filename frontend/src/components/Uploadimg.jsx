import { useForm } from "react-hook-form"
import { useState } from "react"
import "./Uploadimg.css"

const Uploadimg = () => {
  const { register, handleSubmit } = useForm()
  const [image, setImage] = useState("./src/assets/avatar.png")
  const [sonom, setSonom] = useState("")
  // Permet de previsualiser l'image
  const uploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
  }
  const cancelImage = (e) => {
    e.preventDefault()
    setImage("./src/assets/avatar.png")
  }
  const onSubmit = (data) => {
    // eslint-disable-next-line no-restricted-syntax
    console.log(data)
    const formData = new FormData()
    formData.append("myfile", data.myfile[0])
    const fileInput = data.myfile[0] // Récupérer le premier élément du tableau, qui est le fichier
    setSonom(fileInput.name) // Obtenir le nom du fichier

    fetch("http://localhost:4242/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .catch((err) => console.error(err))
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className="icone" src={image} alt="avatar" />
        <input
          {...register("myfile")}
          type="file"
          accept="image/*"
          onChange={uploadImage}
        />
        <button title="submit">Submit</button>
        <button onClick={cancelImage}>Annuler</button>
        {sonom}
      </form>
      {setSonom}
    </>
  )
}
export default Uploadimg
