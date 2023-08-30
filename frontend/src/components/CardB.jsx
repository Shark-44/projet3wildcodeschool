import "./Card.css"
const CardB = (objet) => {
  return (
    <div className="Card">
      <div key={objet.id}>
        <img
          src={`http://localhost:4242${objet.photo1}`}
          alt={objet.nomObjet}
        />
        <p>{objet.nomObjet}</p>
      </div>
    </div>
  )
}
export default CardB
