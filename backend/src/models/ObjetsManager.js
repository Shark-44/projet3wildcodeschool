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
        objets.quantite,
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

  // objet utilisateur
  readallobjetcreateur(prenom) {
    return this.database.query(
      `SELECT objets.id, objets.nomObjet, objets.prix, objets.quantite, objets.photo1, 
      objets.photo2, objets.descriptionObjet, utilisateur_has_objets.Objets_id,
       utilisateur_has_objets.Utilisateur_id, utilisateur.nom, utilisateur.prenom FROM ${this.table} 
       JOIN utilisateur_has_objets ON objets.id = utilisateur_has_objets.Objets_id
       JOIN utilisateur ON utilisateur_has_objets.Utilisateur_id = utilisateur.id WHERE prenom = ?`,
      [prenom]
    )
  }

  readObjetsByUtilisateur(id) {
    return this.database.query(
      `SELECT objets.id, objets.nomObjet, objets.prix, objets.quantite, objets.photo1, 
      objets.photo2, objets.descriptionObjet, utilisateur_has_objets.Objets_id,
       utilisateur_has_objets.Utilisateur_id, utilisateur.nom, utilisateur.prenom, utilisateur.photo FROM ${this.table} 
       JOIN utilisateur_has_objets ON objets.id = utilisateur_has_objets.Objets_id
       JOIN utilisateur ON utilisateur_has_objets.Utilisateur_id = utilisateur.id WHERE objets.id = ?`,
      [id]
    )
  }

  // avis objet
  readavisobjet() {
    return this.database.query(
      `SELECT objets.id, avisobjet.ObjetsId, avisobjet.UtilisateurId, avisobjet.avisObjet, avisobjet.dateavisObjet, utilisateur.prenom, utilisateur.nom, utilisateur.photo
      FROM ${this.table}
      JOIN avisobjet ON objets.id = avisObjet.ObjetsId 
      JOIN utilisateur ON avisobjet.UtilisateurId = utilisateur.id`
    )
  }

  // objet categorie
  readobjetsByCategorie(type) {
    return this.database.query(
      `SELECT objets.id, objets.nomObjet, objets.prix, objets.quantite, objets.photo1, objets.photo2, objets.descriptionObjet FROM ${this.table} WHERE categorie_id = ?`,
      [type]
    )
  }

  lirequantiteobjets() {
    return this.database.query(
      `SELECT objets.id, objets.photo1, commandehasobjets.quantiteCommande FROM ${this.table} JOIN commandehasobjets ON objets.id = commandehasobjets.ObjetsId`
    )
  }
}
module.exports = ObjetsManager
