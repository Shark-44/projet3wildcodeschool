const AbstractManager = require("./AbstractManager")

class AvisobjetManager extends AbstractManager {
  constructor() {
    super({ table: "avisobjet" })
  }

  insert(avisobjet) {
    return this.database.query(
      `insert into ${this.table} (UtilisateurId, ObjetsId, avisObjet, dateavisObjet) values (?,?,?,?)`,
      [
        avisobjet.UtilisateurId,
        avisobjet.ObjetsId,
        avisobjet.avisObjet,
        avisobjet.dateavisObjet,
      ]
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
}

module.exports = AvisobjetManager
