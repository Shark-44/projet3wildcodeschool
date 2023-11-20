const AbstractManager = require("./AbstractManager")

class FavorisManager extends AbstractManager {
  constructor() {
    super({ table: "favoris" })
  }

  lirereqfavoris(utilisateurId, utilisateurId1) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE Utilisateur_id = ? AND Utilisateur_id1 = ?`,
      [utilisateurId, utilisateurId1]
    )
  }

  ajoutreqfavoris(utilisateurId, utilisateurId1) {
    return this.database.query(
      `INSERT into ${this.table} (Utilisateur_id, Utilisateur_id1, favoris) values (?,?,1)`,
      [utilisateurId, utilisateurId1]
    )
  }

  supreqfavoris(utilisateurId, utilisateurId1) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE Utilisateur_id = ? AND Utilisateur_id1 = ?`,
      [utilisateurId, utilisateurId1]
    )
  }
}
module.exports = FavorisManager
