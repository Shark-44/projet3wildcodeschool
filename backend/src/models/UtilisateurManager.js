const AbstractManager = require("./AbstractManager")
// const UtilisateurcategorieManager = require("./UtilisateurcategorieManager")

class UtilisateurManager extends AbstractManager {
  constructor() {
    super({ table: "utilisateur" })
  }

  insert(utilisateur) {
    return this.database.query(
      `insert into ${this.table} (nom, prenom, email, password, adresse, codePostal, ville, createur, photo, descriptionCreateur,categorie_id) values (?,?,?,?,?,?,?,?,?,?,?)`,
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
        utilisateur.CategorieID,
      ]
    )
  }

  update(utilisateur) {
    return this.database.query(
      `UPDATE ${this.table} SET nom = ?, prenom = ?, email = ?, password = ?, adresse = ?, codePostal = ?, ville = ?, createur = ?, photo = ?, descriptionCreateur = ? WHERE id = ?`,
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

  readallcreateur() {
    return this.database.query(`SELECT * FROM ${this.table} where createur = 1`)
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

  findtype(UtilisateurId) {
    return this.database.query(
      `Select utilisateur.categorie_id from ${this.table} where id= ? `,
      [UtilisateurId]
    )
  }

  loginUtilisateur(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ])
  }

  findemailuser(email) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE email = ?`, [
      email,
    ])
  }
}

module.exports = UtilisateurManager
