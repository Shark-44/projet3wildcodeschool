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

  delobjetuser(objetdel) {
    console.info("je suis dans panier m", objetdel)
    return this.database.query(
      `delete from ${this.table} INNER JOIN panier_has_objets ON panier.id = panier_has_objets.panier_id where panier.utilisateur_id = ? AND panier_has_objets.objets_id = ?`,
      [objetdel.utilisateur_id, objetdel.objets_id]
    )
  }
}
module.exports = PanierobjetManager
