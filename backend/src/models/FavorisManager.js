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

  lirefavorisuser(utilisateurId) {
    return this.database.query(
      `select favoris.Utilisateur_id, favoris.Utilisateur_id1, favoris.favoris, utilisateur.prenom, utilisateur.photo from ${this.table} join utilisateur on favoris.Utilisateur_id1 = utilisateur.id WHERE Utilisateur_id = ?`,
      [utilisateurId]
    )
  }
}
module.exports = FavorisManager
