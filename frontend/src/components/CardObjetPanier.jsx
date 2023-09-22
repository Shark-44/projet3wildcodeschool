import "./CardObjetPanier.css"

function CardObjetPanier({ objet, handleAdd }) {
  const handleSub = () => {}
  const handledel = () => {}
  return (
    <div className="cardObjetpanier">
      <img
        src={`http://localhost:4242/${objet?.photo1}`}
        alt={objet?.nomObjet}
      />
      Nom : {objet?.nomObjet}
      Prix : {objet?.prix}
      Quantité:{objet.quantitePanier}
      <div className="btn">
        <button onClick={() => handleAdd(objet.id)}>ajouter + 1</button>
        <button onClick={() => handleSub(objet.id)}>Oter - 1</button>
        <button onClick={handledel}></button>
      </div>
    </div>
  )
}
export default CardObjetPanier
