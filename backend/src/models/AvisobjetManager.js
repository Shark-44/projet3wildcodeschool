const AbstractManager = require("./AbstractManager")

class AvisobjetManager extends AbstractManager {
  constructor() {
    super({ table: "avis_objet" })
  }

  insert(avisobjet) {
    return this.database.query(
      `insert into ${this.table} (Utilisateur_id, Objet_id, avis_objet, date_avis_objet) values (?,?,?,?)`,
      [
        avisobjet.Utilisateur_id,
        avisobjet.Objet_id,
        avisobjet.avis_objet,
        avisobjet.date_avis_objet,
      ]
    )
  }

  update(avisobjet) {
    return this.database.query(
      `update ${this.table} set Utilisateur_id = ?, Objet_id =? avis_objet = ?, date_avis_objet = ? `,
      [
        avisobjet.Utilisateur_id,
        avisobjet.Objet_id1,
        avisobjet.avis_objet,
        avisobjet.date_avis_objet,
      ]
    )
  }
}

module.exports = AvisobjetManager
