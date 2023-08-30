import "./Card.css"
const Card = (createur) => {
  return (
    <div className="Card">
      <div key={createur.id}>
        <img
          src={`http://localhost:4242/assets/images/avatar/${createur.photo}`}
          alt={createur.nom}
        />
        <p>{createur.nom}</p>
        <p>{createur.prenom}</p>
      </div>
    </div>
  )
}
export default Card
