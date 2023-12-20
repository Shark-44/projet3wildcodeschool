const models = require("../models")

const browse = (req, res) => {
  models.commande
    .findAll()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const read = (req, res) => {
  models.commande
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404)
      } else {
        res.send(rows[0])
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const edit = (req, res) => {
  const commande = req.body

  // TODO validations (length, format...)

  commande.id = parseInt(req.params.id, 10)

  models.commande
    .update(commande)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404)
      } else {
        res.sendStatus(204)
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const add = (req, res) => {
  const commande = req.body

  // TODO validations (length, format...)

  models.commande
    .insert(commande)
    .then(([result]) => {
      res.location(`/commande/${result.insertId}`).sendStatus(201)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const destroy = (req, res) => {
  models.commande
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404)
      } else {
        res.sendStatus(204)
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
const cbyuser = (req, res) => {
  const UtilisateurId = req.query.UtilisateurId
  models.commande
    .findbyuser(UtilisateurId)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
const dernierID = (req, res) => {
  models.commande
    .dernierId()
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404)
      } else {
        res.send(rows[0])
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
const validecommande = (req, res) => {
  const commande = req.body
  commande.id = parseInt(req.params.id, 10)

  models.commande
    .reqvalidecommande(commande)
    .then(([createcommande]) => {
      if (!createcommande || !createcommande.insertId) {
        throw new Error(
          "Erreur lors de la création de la commande ou ID non valide"
        )
      }

      const commandeobjets = {
        ObjetsId: req.body.ObjetsId,
        quantiteCommande: req.body.quantiteCommande,
        dateCommande: req.body.dateCommande,
        CommandeId: createcommande.insertId,
      }
      return models.commandeobjets.insert(commandeobjets)
    })
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send("Erreur lors de la création de la commande")
    })
}

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  cbyuser,
  dernierID,
  validecommande,
}
