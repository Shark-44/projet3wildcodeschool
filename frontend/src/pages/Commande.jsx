import "./Commande.css"
import logo from "../assets/AlterWord.png"
import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import html2canvas from "html2canvas"
import Jspdf from "jspdf"

function Commande() {
  const date = new Date()
  const formattedDate = date.toLocaleDateString("fr-FR")

  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState(false)
  const handleValide = () => {}
  const handleAnnule = () => {}
  const printDocument = () => {
    const doc = new Jspdf("p", "mm", "a4")
    const elementHTML = document.querySelector(".actual-receipt")
    doc.html(elementHTML, {
      callback: function (doc) {
        // Save the PDF
        // doc.save("document-html.pdf")
        doc.output("dataurlnewwindow")
      },
      width: 200,
      color: "black",
    })
  }
  return (
    <div className="containerCommande">
      <div className="receipt-box">
        <div className="actual-receipt" style={{ color: "black" }}>
          <div
            className="toppage"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <img className="Imagesite" src={logo} alt="" />
            <h2 id="date">Date :{formattedDate}</h2>
          </div>
          <div className="refclient">
            <h2>Numero de Commande : </h2>
            <h2>Nom :</h2>
            <h2>Prenom :</h2>
            <h2>Adresse :</h2>
            <h2>Email :</h2>
          </div>
          <div className="detailcommande">
            <h2>Details commande :</h2>
          </div>
          <div className="totalcommande">
            <h2>Total :</h2>
          </div>
        </div>
      </div>
      <div className="btncommande">
        <button className="btncommandegenerale print" onClick={printDocument}>
          Print PDF
        </button>
        <button className="btncommandegenerale valide" onClick={handleValide}>
          PAYER
        </button>
        <button className="btncommandegenerale annule" onClick={handleAnnule}>
          Annuler
        </button>
      </div>
    </div>
  )
}

export default Commande
