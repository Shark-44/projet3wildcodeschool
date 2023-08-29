const AbstractManager = require("./AbstractManager")

class CommandeManager extends AbstractManager {
  constructor() {
    super({ table: "commande" })
  }

  insert(commande) {
    return this.database.query(
      `insert into ${this.table} (numero, utilisateur_id, prixTotal) values (?,?,?)`,
      [commande.numero, commande.utilisateur_id, commande.prixTotal]
    )
  }

  update(commande) {
    return this.database.query(
      `update ${this.table} set numero = ?, utilisateur_id = ? prixTotal = ? where id = ?`,
      [commande.numero, commande.id, commande.prixTotal]
    )
  }
}

module.exports = CommandeManager
