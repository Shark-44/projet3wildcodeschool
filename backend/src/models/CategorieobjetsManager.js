const AbstractManager = require("./AbstractManager")

class CategorieobjetsManager extends AbstractManager {
  constructor() {
    super({ table: "categoriehasobjets" })
  }

  insert(CategorieId, ObjetsId) {
    return this.database.query(
      `insert into ${this.table} ( CategorieId, ObjetsId) values (?,?)`,
      [CategorieId, ObjetsId]
    )
  }

  update(Categorieobjets) {
    return this.database.query(
      `update ${this.table} set  CategorieId = ? ObjetsId = ? where id = ?`,
      [Categorieobjets.CategorieId, Categorieobjets.ObjetsId]
    )
  }
}

module.exports = CategorieobjetsManager
