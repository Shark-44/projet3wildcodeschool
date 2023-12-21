const AbstractManager = require("./AbstractManager")

class AvishasobjetsManager extends AbstractManager {
  constructor() {
    super({ table: "avis_objet_has_objets" })
  }

  insert(avid, ObjetsId) {
    return this.database.query(
      `insert into ${this.table} (avis_objet_id_avisobjet, objets_id) values (?,?)`,
      [avid, ObjetsId]
    )
  }
}
module.exports = AvishasobjetsManager
