const AbstractManager = require("./AbstractManager")

class PanierobjetManager extends AbstractManager {
  constructor() {
    super({ table: "panier_has_objets" })
  }

  insert(addobjet) {
    return this.database.query(
      `insert into ${this.table} ( objets_id, panier_id) values (?,?)`,
      [addobjet.objets_id, addobjet.panier_id]
    )
  }
}
module.exports = PanierobjetManager
