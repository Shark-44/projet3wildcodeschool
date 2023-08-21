const AbstractManager = require("./AbstractManager")

class ObjetsManager extends AbstractManager {
  constructor() {
    super({ table: "objets" })
  }

  insert(objets) {
    return this.database.query(
      `insert into ${this.table} (nom, prix, quantité, photo_1, photo_2, description) values (?,?,?,?,?,?)`,
      [
        objets.name,
        objets.prix,
        objets.quantité,
        objets.photo_1,
        objets.photo_2,
        objets.description,
      ]
    )
  }

  update(objets) {
    return this.database.query(
      `UPDATE ${this.table} SET nom = ?, prix = ?, quantité = ?, photo_1 = ?, photo_2 = ?, description = ? WHERE (id = ?)`,
      [
        objets.nom,
        objets.prix,
        objets.quantité,
        objets.photo_1,
        objets.photo_2,
        objets.description,
      ]
    )
  }
}

module.exports = ObjetsManager
