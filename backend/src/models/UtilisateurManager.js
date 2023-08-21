const AbstractManager = require("./AbstractManager")

class UtilisateurManager extends AbstractManager {
  constructor() {
    super({ table: "utilisateur" })
  }

  insert(utilisateur) {
    return this.database.query(
      `insert into ${this.table} (nom, prenom, email, password, adresse, Createur, photo, Description_createur) values (?,?,?,?,?,?,?,?)`,
      [
        utilisateur.nom,
        utilisateur.prenom,
        utilisateur.email,
        utilisateur.password,
        utilisateur.adresse,
        utilisateur.Createur,
        utilisateur.photo,
        utilisateur.Description_createur,
      ]
    )
  }

  update(utilisateur) {
    return this.database.query(
      `UPDATE ${this.table} SET nom = ?, prenom = ?, email = ?, password = ?, adresse = ? Createur = ?, photo = ?, Description_createur = ? WHERE (id = ?)`,
      [
        utilisateur.nom,
        utilisateur.prenom,
        utilisateur.email,
        utilisateur.password,
        utilisateur.adresse,
        utilisateur.Createur,
        utilisateur.photo,
        utilisateur.Description_createur,
      ]
    )
  }
}

module.exports = UtilisateurManager
