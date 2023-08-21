const AbstractManager = require("./AbstractManager")

class UtilisateurobjetsManager extends AbstractManager {
  constructor() {
    super({ table: "utilisateur_has_objets" })
  }

  insert(utilisateurobjets) {
    return this.database.query(
      `insert into ${this.table} ( Utilisateur_id, Objets_id) values (?,?)`,
      [utilisateurobjets.Utilisateur_id, utilisateurobjets.Objets_id]
    )
  }

  update(utilisateurobjets) {
    return this.database.query(
      `update ${this.table} set  Utilisateur_id = ? Objets_id = ? where id = ?`,
      [utilisateurobjets.Utilisateur_id, utilisateurobjets.Objets_id]
    )
  }
}

module.exports = UtilisateurobjetsManager
