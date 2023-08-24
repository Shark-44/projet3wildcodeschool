const AbstractManager = require("./AbstractManager")

class CommandeobjetsManager extends AbstractManager {
  constructor() {
    super({ table: "commande_has_objets" })
  }

  insert(commandeobjets) {
    return this.database.query(
      `insert into ${this.table} (Commande_id, Objet_id, quantite_, date) values (?,?,?,?)`,
      [
        commandeobjets.Commande_id,
        commandeobjets.Objet_id,
        commandeobjets.quantite_commande,
        commandeobjets.date_commande,
      ]
    )
  }

  update(commandeobjets) {
    return this.database.query(
      `update ${this.table} set Commande_id = ?, Objet_id =? quantite_commande= ?, date_commande = ? where id = ?`,
      [
        commandeobjets.Commande_id,
        commandeobjets.Objet_id,
        commandeobjets.quantite_commande,
        commandeobjets.date_commande,
      ]
    )
  }
}

module.exports = CommandeobjetsManager
