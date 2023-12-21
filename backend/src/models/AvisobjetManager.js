const AbstractManager = require("./AbstractManager")

class AvisobjetManager extends AbstractManager {
  constructor() {
    super({ table: "avis_objet" })
  }

  insert(avisobjet) {
    return this.database.query(
      `insert into ${this.table} (avisObjet, date_avis, utilisateur_id) values (?,?,?)`,
      [avisobjet.avisObjet, avisobjet.dateavisObjet, avisobjet.UtilisateurId]
    )
  }

  update(avisobjet) {
    return this.database.query(
      `update ${this.table} set UtilisateurId = ?, ObjetsId =? avisObjet = ?, dateavisObjet = ? `,
      [
        avisobjet.UtilisateurId,
        avisobjet.Objet_id1,
        avisobjet.avisObjet,
        avisobjet.dateavisObjet,
      ]
    )
  }

  readavisuser() {
    return this.database.query(
      `SELECT avis_objet.avisObjet, utilisateur.photo from ${this.table} join utilisateur on  avis_objet.utilisateur_id = utilisateur.id`
    )
  }

  readavisobjetid(id) {
    return this.database.query(
      `select utilisateur.photo, utilisateur.prenom, avis_objet.avisObjet from ${this.table} join utilisateur on avis_objet.utilisateur_id = utilisateur.id join avis_objet_has_objets
      on avis_objet_has_objets.avis_objet_id_avisobjet = avis_objet.id_avisobjet where objets_id=1`,
      [id]
    )
  }
}

module.exports = AvisobjetManager
