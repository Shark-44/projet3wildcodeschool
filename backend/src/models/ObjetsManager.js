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

  readobjetsByUtilisateur(prenom) {
    return this.database.query(
      `SELECT objets.id, objets.nomObjet, objets.prix, objets.quantite, objets.photo1, 
      objets.photo2, objets.descriptionObjet, utilisateurhasobjets.ObjetsId,
       utilisateurhasobjets.UtilisateurId, utilisateur.nom, utilisateur.prenom FROM ${this.table} 
       JOIN utilisateurhasobjets ON objets.id = utilisateurhasobjets.ObjetsId
       JOIN utilisateur ON utilisateurhasobjets.UtilisateurId = utilisateur.id WHERE prenom = ?`,
      [prenom]
    )
  }

  readobjetsByCategorie(type) {
    console.info(type)
    return this.database.query(
      `SELECT objets.id, objets.nomObjet, objets.prix, objets.quantite, objets.photo1, objets.photo2, objets.descriptionObjet, categoriehasobjets.ObjetsId, categoriehasobjets.CategorieId, categorie.type FROM ${this.table} JOIN categoriehasobjets ON objets.id = categoriehasobjets.ObjetsId JOIN categorie ON categoriehasobjets.CategorieId = categorie.id WHERE type = ?`,
      [type]
    )
  }
}

module.exports = ObjetsManager
