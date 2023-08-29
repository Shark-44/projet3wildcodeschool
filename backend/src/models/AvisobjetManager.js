const AbstractManager = require("./AbstractManager")

class AvisobjetManager extends AbstractManager {
  constructor() {
    super({ table: "avis_objet" })
  }

  insert(avisobjet) {
    return this.database.query(
      `insert into ${this.table} (Utilisateur_id, Objet_id, avisObjet, dateavisObjet) values (?,?,?,?)`,
      [
        avisobjet.Utilisateur_id,
        avisobjet.Objet_id,
        avisobjet.avisObjet,
        avisobjet.dateavisObjet,
      ]
    )
  }

  update(avisobjet) {
    return this.database.query(
      `update ${this.table} set Utilisateur_id = ?, Objet_id =? avisObjet = ?, dateavisObjet = ? `,
      [
        avisobjet.Utilisateur_id,
        avisobjet.Objet_id1,
        avisobjet.avisObjet,
        avisobjet.dateavisObjet,
      ]
    )
  }
}

module.exports = AvisobjetManager
