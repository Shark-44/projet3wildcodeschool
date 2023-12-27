const AbstractManager = require("./AbstractManager")

class CategorieManager extends AbstractManager {
  constructor() {
    super({ table: "categorie" })
  }
}
module.exports = CategorieManager
