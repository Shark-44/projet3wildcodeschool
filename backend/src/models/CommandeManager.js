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

  findbyuser(UtilisateurId) {
    return this.database.query(
      `select commandehasobjets.quantiteCommande, commandehasobjets.dateCommande, commande.prixTotal, commande.numero, objets.nomObjet  from ${this.table}  join commandehasobjets on commande.id = commandehasobjets.CommandeId  join objets on commandehasobjets.ObjetsId = objets.id where utilisateur_id = ?`,
      [UtilisateurId]
    )
  }

  dernierId() {
    return this.database.query(`SELECT MAX(id) as last_id FROM ${this.table}`)
  }

  reqvalidecommande(commande, commandeobjets) {
    return this.database.query(
      `INSERT INTO ${this.table} (numero, UtilisateurId, prixTotal)  values (?,?,?)`,
      [commande.numero, commande.UtilisateurId, commande.prixTotal]
    )
  }
}

module.exports = CommandeManager
