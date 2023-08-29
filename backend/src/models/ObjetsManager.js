const AbstractManager = require("./AbstractManager")

class ObjetsManager extends AbstractManager {
  constructor() {
    super({ table: "objets" })
  }

  insert(objets) {
    return this.database.query(
      `insert into ${this.table} (nomObjet, prix, quantite, photo1, photo2, descriptionObjet) values (?,?,?,?,?,?)`,
      [
        objets.nomObjet,
        objets.prix,
        objets.quantité,
        objets.photo1,
        objets.photo2,
        objets.descriptionObjet,
      ]
    )
  }

  update(objets) {
    return this.database.query(
      `UPDATE ${this.table} SET nomObjet = ?, prix = ?, quantite = ?, photo1 = ?, photo2 = ?, descriptionObjet = ? WHERE (id = ?)`,
      [
        objets.nomObjet,
        objets.prix,
        objets.quantite,
        objets.photo1,
        objets.photo2,
        objets.descriptionObjet,
      ]
    )
  }
}

module.exports = ObjetsManager
