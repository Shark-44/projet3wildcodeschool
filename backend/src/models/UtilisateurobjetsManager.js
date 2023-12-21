const AbstractManager = require("./AbstractManager")

class UtilisateurobjetsManager extends AbstractManager {
  constructor() {
    super({ table: "utilisateur_has_objets" })
  }

  insert(UtilisateurId, ObjetsId) {
    return this.database.query(
      `insert into ${this.table} (utilisateur_id, Objets_id) values (?,?)`,
      [UtilisateurId, ObjetsId]
    )
  }
}

module.exports = UtilisateurobjetsManager
