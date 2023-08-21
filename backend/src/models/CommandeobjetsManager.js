const AbstractManager = require("./AbstractManager")

class CommandeobjetsManager extends AbstractManager {
  constructor() {
    super({ table: "commande_has_objets" })
  }

  insert(commandeobjets) {
    return this.database.query(
      `insert into ${this.table} (Commande_id, Objet_id, quantité, date) values (?,?,?,?)`,
      [
        commandeobjets.Commande_id,
        commandeobjets.Objet_id,
        commandeobjets.quantité,
        commandeobjets.date,
      ]
    )
  }

  update(commandeobjets) {
    return this.database.query(
      `update ${this.table} set Commande_id = ?, Objet_id =? quantité= ?, date = ? where id = ?`,
      [
        commandeobjets.Commande_id,
        commandeobjets.Objet_id,
        commandeobjets.quantité,
        commandeobjets.date,
      ]
    )
  }
}

module.exports = CommandeobjetsManager
