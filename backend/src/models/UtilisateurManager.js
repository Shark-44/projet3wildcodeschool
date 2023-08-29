const AbstractManager = require("./AbstractManager")

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
      `SELECT utilisateur.nom, utilisateur.prenom, utilisateur.createur, utilisateur.photo, utilisateur.descriptionCreateur, utilisateurhascategorie.Utilisateur_id, utilisateurhascategorie.Categorie_id, categorie.type  FROM ${this.table} JOIN utilisateurhascategorie ON utilisateur.id = utilisateurhascategorie.Utilisateur_id JOIN categorie ON utilisateurhascategorie.Categorie_id = categorie.id;`
    )
  }
}

module.exports = UtilisateurManager
