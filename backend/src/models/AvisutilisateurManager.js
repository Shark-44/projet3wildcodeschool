const AbstractManager = require("./AbstractManager")

class AvisutilisateurManager extends AbstractManager {
  constructor() {
    super({ table: "avis_utilisateur" })
  }

  insert(avisutilisateur) {
    return this.database.query(
      `insert into ${this.table} (Utilisiateur_id, Utilisateur_id1, description, date) values (?,?,?,?)`,
      [
        avisutilisateur.Utilisateur_id,
        avisutilisateur.Utilisateur_id1,
        avisutilisateur.description,
        avisutilisateur.date,
      ]
    )
  }

  update(avisutilisateur) {
    return this.database.query(
      `update ${this.table} set Utilisateur_id = ?, Utilisateur_id1 =? description = ?, date = ? where id = ?`,
      [
        avisutilisateur.Utilisateur_id,
        avisutilisateur.Utilisateur_id1,
        avisutilisateur.description,
        avisutilisateur.date,
      ]
    )
  }
}

module.exports = AvisutilisateurManager
