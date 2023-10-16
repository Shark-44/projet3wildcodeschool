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

  // objet utilisateur
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

  readObjetsByUtilisateur(id) {
    return this.database.query(
      `SELECT objets.id, objets.nomObjet, objets.prix, objets.quantite, objets.photo1, 
      objets.photo2, objets.descriptionObjet, utilisateurhasobjets.ObjetsId,
       utilisateurhasobjets.UtilisateurId, utilisateur.nom, utilisateur.prenom, utilisateur.photo FROM ${this.table} 
       JOIN utilisateurhasobjets ON objets.id = utilisateurhasobjets.ObjetsId
       JOIN utilisateur ON utilisateurhasobjets.UtilisateurId = utilisateur.id WHERE objets.id = ?`,
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

  readavisobjetid(id) {
    return this.database.query(
      `SELECT objets.id, avisobjet.ObjetsId, avisobjet.UtilisateurId, avisobjet.avisObjet, avisobjet.dateavisObjet, utilisateur.prenom, utilisateur.nom, utilisateur.photo
      FROM ${this.table}
      JOIN avisobjet ON objets.id = avisObjet.ObjetsId 
      JOIN utilisateur ON avisobjet.UtilisateurId = utilisateur.id WHERE objets.id = ?`,
      [id]
    )
  }

  // objet categorie
  readobjetsByCategorie(type) {
    return this.database.query(
      `SELECT objets.id, objets.nomObjet, objets.prix, objets.quantite, objets.photo1, objets.photo2, objets.descriptionObjet, categoriehasobjets.ObjetsId, categoriehasobjets.CategorieId, categorie.type FROM ${this.table} JOIN categoriehasobjets ON objets.id = categoriehasobjets.ObjetsId JOIN categorie ON categoriehasobjets.CategorieId = categorie.id WHERE type = ?`,
      [type]
    )
  }

  lirequantiteobjets() {
    return this.database.query(
      `SELECT objets.id, objets.photo1, commandehasobjets.quantiteCommande FROM ${this.table} JOIN commandehasobjets ON objets.id = commandehasobjets.ObjetsId`
    )
  }

  achatbyuser(UtilisateurId) {
    return this.database.query(
      `SELECT * FROM objets
     join panier ON objets.id = panier.ObjetsId WHERE UtilisateurId = ?`,
      [UtilisateurId]
    )
  }
}
module.exports = ObjetsManager
