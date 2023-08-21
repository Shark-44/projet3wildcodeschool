const AbstractManager = require("./AbstractManager")

class CategorieobjetsManager extends AbstractManager {
  constructor() {
    super({ table: "categorie_has_objets" })
  }

  insert(Categorieobjets) {
    return this.database.query(
      `insert into ${this.table} ( Categorie_id, Objets_id) values (?,?)`,
      [Categorieobjets.Utilisateur_id, Categorieobjets.Objets_id]
    )
  }

  update(Categorieobjets) {
    return this.database.query(
      `update ${this.table} set  Categorie_id = ? Objets_id = ? where id = ?`,
      [Categorieobjets.Categorie_id, Categorieobjets.Objets_id]
    )
  }
}

module.exports = CategorieobjetsManager
