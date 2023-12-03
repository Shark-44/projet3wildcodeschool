const AbstractManager = require("./AbstractManager")

class CategorieManager extends AbstractManager {
  constructor() {
    super({ table: "categorie" })
  }

  findtype(UtilisateurId) {
    return this.database.query(
      `Select categorie.type from ${this.table} join utilisateurhascategorie on utilisateurhascategorie.CategorieId = categorie.id where UtilisateurId= ? `,
      [UtilisateurId]
    )
  }
}

module.exports = CategorieManager
