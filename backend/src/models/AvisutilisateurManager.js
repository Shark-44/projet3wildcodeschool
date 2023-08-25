const AbstractManager = require("./AbstractManager")

class AvisutilisateurManager extends AbstractManager {
  constructor() {
    super({ table: "avis_utilisateur" })
  }

  insert(avisutilisateur) {
    return this.database.query(
      `insert into ${this.table} (Utilisiateur_id, Utilisateur_id1, avis_createur, date_avis) values (?,?,?,?)`,
      [
        avisutilisateur.Utilisateur_id,
        avisutilisateur.Utilisateur_id1,
        avisutilisateur.avis_createur,
        avisutilisateur.date_avis,
      ]
    )
  }

  update(avisutilisateur) {
    return this.database.query(
      `update ${this.table} set Utilisateur_id = ?, Utilisateur_id1 =? avis_createur = ?, date_avis = ? where id = ?`,
      [
        avisutilisateur.Utilisateur_id,
        avisutilisateur.Utilisateur_id1,
        avisutilisateur.avis_createur,
        avisutilisateur.date_avis,
      ]
    )
  }
}

module.exports = AvisutilisateurManager
