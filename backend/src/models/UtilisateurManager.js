const AbstractManager = require("./AbstractManager")
// const UtilisateurcategorieManager = require("./UtilisateurcategorieManager")

class UtilisateurManager extends AbstractManager {
  constructor() {
    super({ table: "utilisateur" })
  }

  insert(utilisateur) {
    return this.database.query(
      `insert into ${this.table} (nom, prenom, email, password, adresse, codePostal, ville, createur, photo, descriptionCreateur) values (?,?,?,?,?,?,?,?,?,?)`,
      [
        utilisateur.nom,
        utilisateur.prenom,
        utilisateur.email,
        utilisateur.password,
        utilisateur.adresse,
        utilisateur.codePostal,
        utilisateur.ville,
        utilisateur.createur,
        utilisateur.photo,
        utilisateur.descriptionCreateur,
      ]
    )
  }

  update(utilisateur) {
    return this.database.query(
      `UPDATE ${this.table} SET nom = ?, prenom = ?, email = ?, password = ?, adresse = ?, codePostal = ?, ville = ?, createur = ?, photo = ?, descriptionCreateur = ? WHERE (id = ?)`,
      [
        utilisateur.nom,
        utilisateur.prenom,
        utilisateur.email,
        utilisateur.password,
        utilisateur.adresse,
        utilisateur.codePostal,
        utilisateur.ville,
        utilisateur.createur,
        utilisateur.photo,
        utilisateur.descriptionCreateur,
      ]
    )
  }

  readUtilisateurWithCategorie() {
    return this.database.query(
      `SELECT utilisateur.id, utilisateur.nom, utilisateur.prenom, utilisateur.createur, utilisateur.photo, utilisateur.descriptionCreateur, utilisateurhascategorie.UtilisateurId, utilisateurhascategorie.CategorieId, categorie.type  FROM ${this.table} JOIN utilisateurhascategorie ON utilisateur.id = utilisateurhascategorie.UtilisateurId JOIN categorie ON utilisateurhascategorie.CategorieId = categorie.id;`
    )
  }

  editutilisateurcategorie(utilisateur, Utilisateurcategorie) {
    return this.database.query(
      `insert into ${this.table} (nom, prenom, email, password, adresse, codePostal, ville, createur, photo, descriptionCreateur, UtilisateurId, CategorieId) values (?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        utilisateur.nom,
        utilisateur.prenom,
        utilisateur.email,
        utilisateur.password,
        utilisateur.adresse,
        utilisateur.codePostal,
        utilisateur.ville,
        utilisateur.createur,
        utilisateur.photo,
        utilisateur.descriptionCreateur,
        Utilisateurcategorie.UtilisateurId,
        Utilisateurcategorie.CategorieId,
      ]
    )
  }

  loginUtilisateur(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ])
  }
}

module.exports = UtilisateurManager
