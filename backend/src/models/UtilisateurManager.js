const AbstractManager = require("./AbstractManager")

class UtilisateurManager extends AbstractManager {
  constructor() {
    super({ table: "utilisateur" })
  }

  insert(utilisateur) {
    return this.database.query(
      `insert into ${this.table} (nom, prenom, email, password, adresse, createur, photo, description_createur) values (?,?,?,?,?,?,?,?)`,
      [
        utilisateur.nom,
        utilisateur.prenom,
        utilisateur.email,
        utilisateur.password,
        utilisateur.adresse,
        utilisateur.createur,
        utilisateur.photo,
        utilisateur.description_createur,
      ]
    )
  }

  update(utilisateur) {
    return this.database.query(
      `UPDATE ${this.table} SET nom = ?, prenom = ?, email = ?, password = ?, adresse = ? createur = ?, photo = ?, description_createur = ? WHERE (id = ?)`,
      [
        utilisateur.nom,
        utilisateur.prenom,
        utilisateur.email,
        utilisateur.password,
        utilisateur.adresse,
        utilisateur.createur,
        utilisateur.photo,
        utilisateur.description_createur,
      ]
    )
  }

  readUtilisateurWithCategorie() {
    return this.database.query(
      `SELECT * FROM ${this.table} JOIN utilisateur_has_categorie ON utilisateur.id = utilisateur_has_categorie.Utilisateur_id JOIN categorie ON utilisateur_has_categorie.Categorie_id = categorie.id;`
    )
  }
}

module.exports = UtilisateurManager
