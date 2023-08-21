const AbstractManager = require("./AbstractManager")

class AvisobjetManager extends AbstractManager {
  constructor() {
    super({ table: "avis_objet" })
  }

  insert(avisobjet) {
    return this.database.query(
      `insert into ${this.table} (Utilisateur_id, Objet_id, description, date) values (?,?,?,?)`,
      [
        avisobjet.Utilisateur_id,
        avisobjet.Objet_id,
        avisobjet.description,
        avisobjet.date,
      ]
    )
  }

  update(avisobjet) {
    return this.database.query(
      `update ${this.table} set Utilisateur_id = ?, Objet_id =? description = ?, date = ? where id = ?`,
      [
        avisobjet.Utilisateur_id,
        avisobjet.Objet_id1,
        avisobjet.description,
        avisobjet.date,
      ]
    )
  }
}

module.exports = AvisobjetManager
