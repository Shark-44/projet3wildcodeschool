import { useForm } from "react-hook-form"
import { useState } from "react"

function Test() {
  const { register, handleSubmit } = useForm()
  const [image, setImage] = useState("./src/assets/avatar.png")

  const uploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
  }
  const onSubmit = (data) => {
    // eslint-disable-next-line no-restricted-syntax
    console.log(data)
    const formData = new FormData()
    formData.append("myfile", data.myfile[0])

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
      </form>
    </>
  )
}
export default Test
