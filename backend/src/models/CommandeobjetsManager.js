const AbstractManager = require("./AbstractManager")

class CommandeobjetsManager extends AbstractManager {
  constructor() {
    super({ table: "commandehasobjets" })
  }

  insert(commandeobjets) {
    return this.database.query(
      `insert into ${this.table} (CommandeId, ObjetsId, quantiteCommande, dateCommande) values (?,?,?,?)`,
      [
        commandeobjets.CommandeId,
        commandeobjets.ObjetsId,
        commandeobjets.quantiteCommande,
        commandeobjets.dateCommande,
      ]
    )
  }

  update(commandeobjets) {
    return this.database.query(
      `update ${this.table} set CommandeId = ?, ObjetId =? quantiteCommande= ?, dateCommande = ? where id = ?`,
      [
        commandeobjets.CommandeId,
        commandeobjets.ObjetsId,
        commandeobjets.quantiteCommande,
        commandeobjets.dateCommande,
      ]
    )
  }
}

module.exports = CommandeobjetsManager
