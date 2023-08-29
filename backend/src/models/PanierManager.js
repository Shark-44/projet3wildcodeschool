const AbstractManager = require("./AbstractManager")

class PanierManager extends AbstractManager {
  constructor() {
    super({ table: "panier" })
  }

  insert(panier) {
    return this.database.query(
      `insert into ${this.table} ( Utilisateur_id, objets_id, quantitePanier) values (?,?,?)`,
      [panier.Utilisateur_id, panier.Objets_id, panier.quantitePanier]
    )
  }

  update(panier) {
    return this.database.query(
      `update ${this.table} set  Utilisateur_id = ? objet_id = ? quantitePanier = ? where id = ?`,
      [panier.Utilisateur_id, panier.Objets_id, panier.quantitePanier]
    )
  }
}

module.exports = PanierManager
