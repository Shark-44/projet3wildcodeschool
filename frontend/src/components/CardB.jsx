import "./Card.css"
const CardB = (objet) => {
  const API_URL = import.meta.env.VITE_BACKEND_URL
  return (
    <div className="Card">
      <div key={objet.id}>
        <img
          className="imageCard"
          src={API_URL + objet.photo1}
          alt={objet.nomObjet}
        />
        <p>{objet.nomObjet}</p>
      </div>
    </div>
  )
}
export default CardB
