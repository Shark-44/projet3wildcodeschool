const AbstractManager = require("./AbstractManager")

class CommandeobjetsManager extends AbstractManager {
  constructor() {
    super({ table: "commandehasobjets" })
  }

  insert(commandeobjets) {
    return this.database.query(
      `insert into ${this.table} (Commande_id, Objet_id, quantiteCommande, dateCommande) values (?,?,?,?)`,
      [
        commandeobjets.Commande_id,
        commandeobjets.Objet_id,
        commandeobjets.quantiteCommande,
        commandeobjets.dateCommande,
      ]
    )
  }

  update(commandeobjets) {
    return this.database.query(
      `update ${this.table} set Commande_id = ?, Objet_id =? quantiteCommande= ?, dateCommande = ? where id = ?`,
      [
        commandeobjets.Commande_id,
        commandeobjets.Objet_id,
        commandeobjets.quantiteCommande,
        commandeobjets.dateCommande,
      ]
    )
  }
}

module.exports = CommandeobjetsManager
