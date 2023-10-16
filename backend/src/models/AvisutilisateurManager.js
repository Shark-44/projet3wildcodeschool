const AbstractManager = require("./AbstractManager")

class AvisutilisateurManager extends AbstractManager {
  constructor() {
    super({ table: "avisutilisateur" })
  }

  insert(avisutilisateur) {
    return this.database.query(
      `insert into ${this.table} (Utilisateur_id, Utilisateur_id1, avisCreateur, dateAvis) values (?,?,?,?)`,
      [
        avisutilisateur.Utilisateur_id,
        avisutilisateur.Utilisateur_id1,
        avisutilisateur.avisCreateur,
        avisutilisateur.dateAvis,
      ]
    )
  }

  update(avisutilisateur) {
    return this.database.query(
      `update ${this.table} set Utilisateur_id = ?, Utilisateur_id1 =? avisCreateur = ?, dateAvis = ? where id = ?`,
      [
        avisutilisateur.Utilisateur_id,
        avisutilisateur.Utilisateur_id1,
        avisutilisateur.avisCreateur,
        avisutilisateur.dateAvis,
      ]
    )
  }

  cherchecreateur(UtilisateurId1) {
    return this.database.query(
      `select utilisateur.prenom, avisutilisateur.avisCreateur, avisutilisateur.Utilisateur_id1 from utilisateur join ${this.table} on utilisateur.id = avisutilisateur.Utilisateur_id where Utilisateur_id1= ?`,
      [UtilisateurId1]
    )
  }
}

module.exports = AvisutilisateurManager
