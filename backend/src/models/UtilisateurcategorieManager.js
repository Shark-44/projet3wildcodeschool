const AbstractManager = require("./AbstractManager")

class UtilisateurcategorieManager extends AbstractManager {
  constructor() {
    super({ table: "utilisateurhascategorie" })
  }

  insert(utilisateurcategorie) {
    return this.database.query(
      `insert into ${this.table} ( UtilisateurId, CategorieId) values (?,?)`,
      [utilisateurcategorie.UtilisateurId, utilisateurcategorie.CategorieId]
    )
  }

  update(Utilisateurcategorie) {
    return this.database.query(
      `update ${this.table} set  UtilisateurId = ? CategorieId = ? where id = ?`,
      [Utilisateurcategorie.UtilisateurId, Utilisateurcategorie.CategorieId]
    )
  }
}

module.exports = UtilisateurcategorieManager
