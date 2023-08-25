const AbstractManager = require("./AbstractManager")

class ObjetsManager extends AbstractManager {
  constructor() {
    super({ table: "objets" })
  }

  insert(objets) {
    return this.database.query(
      `insert into ${this.table} (nom_objet, prix, quantite, photo_1, photo_2, description_objet) values (?,?,?,?,?,?)`,
      [
        objets.nom_objet,
        objets.prix,
        objets.quantité,
        objets.photo_1,
        objets.photo_2,
        objets.description_objet,
      ]
    )
  }

  update(objets) {
    return this.database.query(
      `UPDATE ${this.table} SET nom_objet = ?, prix = ?, quantite = ?, photo_1 = ?, photo_2 = ?, description_objet = ? WHERE (id = ?)`,
      [
        objets.nom_objet,
        objets.prix,
        objets.quantite,
        objets.photo_1,
        objets.photo_2,
        objets.description_objet,
      ]
    )
  }
}

module.exports = ObjetsManager
