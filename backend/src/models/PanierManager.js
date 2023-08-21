const AbstractManager = require("./AbstractManager")

class PanierManager extends AbstractManager {
  constructor() {
    super({ table: "panier" })
  }

  insert(panier) {
    return this.database.query(
      `insert into ${this.table} ( Utilisateur_id, objets_id, quantité) values (?,?,?)`,
      [panier.Utilisateur_id, panier.Objets_id, panier.quantité]
    )
  }

  update(panier) {
    return this.database.query(
      `update ${this.table} set  Utilisateur_id = ? objet_id = ? quantité = ? where id = ?`,
      [panier.Utilisateur_id, panier.Objets_id, panier.quantité]
    )
  }
}

module.exports = PanierManager
