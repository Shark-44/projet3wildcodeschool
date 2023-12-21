const AbstractManager = require("./AbstractManager")

class PanierManager extends AbstractManager {
  constructor() {
    super({ table: "panier" })
  }

  insert(panier) {
    return this.database.query(
      `insert into ${this.table} ( utilisateur_id, quantite_panier) values (?,?)`,
      [panier.UtilisateurId, panier.quantitePanier]
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

  delebyuser(UtilisateurId) {
    return this.database.query(
      `DELETE FROM ${this.table} WHERE UtilisateurId = ?`,
      [UtilisateurId]
    )
  }

  // 20 dec fonction up et delete ok
  upanier(panier) {
    return this.database.query(
      `update ${this.table} INNER JOIN panier_has_objets ON panier.id = panier_has_objets.panier_id set panier.quantite_panier = ? where panier.utilisateur_id = ? AND panier_has_objets.objets_id = ?`,
      [panier.quantite_panier, panier.utilisateur_id, panier.objets_id]
    )
  }

  delobjetuser(objetdel) {
    return this.database.query(
      `DELETE panier
      FROM ${this.table}
      INNER JOIN panier_has_objets ON panier.id = panier_has_objets.panier_id
      WHERE panier.utilisateur_id = ? AND panier_has_objets.objets_id = ?;`,
      [objetdel.utilisateur_id, objetdel.objets_id]
    )
  }

  achatbyuser(UtilisateurId) {
    return this.database.query(
      `SELECT panier.quantite_panier, objets.photo1, objets.nomObjet, objets.prix, panier_has_objets.objets_id FROM ${this.table} join panier_has_objets on panier.id = panier_has_objets.panier_id join objets on panier_has_objets.objets_id = objets.id
      WHERE utilisateur_id = ?`,
      [UtilisateurId]
    )
  }
}
module.exports = PanierManager
