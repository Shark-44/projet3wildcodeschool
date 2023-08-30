const AbstractManager = require("./AbstractManager")

class UtilisateurcategorieManager extends AbstractManager {
  constructor() {
    super({ table: "utilisateurhascategorie" })
  }

  insert(Utilisateurcategorie) {
    return this.database.query(
      `insert into ${this.table} ( Utilisateur_id, Categorie_id) values (?,?)`,
      [Utilisateurcategorie.Utilisateur_id, Utilisateurcategorie.Categorie_id]
    )
  }

  update(Utilisateurcategorie) {
    return this.database.query(
      `update ${this.table} set  Utilisateur_id = ? Categorie_id = ? where id = ?`,
      [Utilisateurcategorie.Utilisateur_id, Utilisateurcategorie.Categorie_id]
    )
  }
}

module.exports = UtilisateurcategorieManager
