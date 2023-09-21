const AbstractManager = require("./AbstractManager")

class PanierManager extends AbstractManager {
  constructor() {
    super({ table: "panier" })
  }

  insert(panier) {
    return this.database.query(
      `insert into ${this.table} ( UtilisateurId, ObjetsId, quantitePanier) values (?,?,?)`,
      [panier.UtilisateurId, panier.ObjetsId, panier.quantitePanier]
    )
  }

  update(panier) {
    return this.database.query(
      `update ${this.table} set  UtilisateurId = ? ObjetsId = ? quantitePanier = ? where id = ?`,
      [panier.UtilisateurId, panier.ObjetsId, panier.quantitePanier]
    )
  }

  findbyuser(UtilisateurId) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE UtilisateurId = ?`,
      [UtilisateurId]
    )
  }
}

module.exports = PanierManager
