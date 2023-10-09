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

  delobjetuser(UtilisateurId, ObjetsId) {
    return this.database.query(
      `delete from ${this.table} where UtilisateurID = ? AND ObjetsID = ?`,
      [UtilisateurId, ObjetsId]
    )
  }

  upanier(UtilisateurId, ObjetsId, quantitePanier) {
    console.info(UtilisateurId, ObjetsId, quantitePanier)
    return this.database.query(
      `update ${this.table} set quantitePanier = ? where UtilisateurId = ? AND ObjetsId = ?`,
      [quantitePanier, UtilisateurId, ObjetsId]
    )
  }
}
module.exports = PanierManager
