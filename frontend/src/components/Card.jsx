import "./Card.css"
const Card = (createur) => {
  const API_URL = import.meta.env.VITE_BACKEND_URL
  return (
    <div className="Card">
      <div key={createur.id}>
        <img
          src={API_URL + "/assets/images/avatar/" + createur.photo}
          alt={createur.nom}
        />
        <p>{createur.nom}</p>
        <p>{createur.prenom}</p>
      </div>
    </div>
  )
}
export default Card
