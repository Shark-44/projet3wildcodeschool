import "./Card.css"
const CardB = (objet) => {
  return (
    <div className="Card">
      <div key={objet.id}>
        <img
          src={`http://localhost:4242${objet.photo_1}`}
          alt={objet.nom_objet}
        />
        <p>{objet.nom_objet}</p>
      </div>
    </div>
  )
}
export default CardB
