const AbstractManager = require("./AbstractManager")

class CommandeManager extends AbstractManager {
  constructor() {
    super({ table: "commande" })
  }

  insert(commande) {
    return this.database.query(
      `insert into ${this.table} (numero, utilisateur_id, prix_total) values (?,?,?)`,
      [commande.numero, commande.utilisateur_id, commande.prix_total]
    )
  }

  update(commande) {
    return this.database.query(
      `update ${this.table} set numero = ?, utilisateur_id = ? prix_total = ? where id = ?`,
      [commande.numero, commande.id]
    )
  }
}

module.exports = CommandeManager
