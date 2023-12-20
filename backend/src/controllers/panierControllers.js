const models = require("../models")

const browse = (req, res) => {
  models.panier
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
  models.panier
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
  const panier = req.body

  // TODO validations (length, format...)

  panier.id = parseInt(req.params.id, 10)

  models.panier
    .update(panier)
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
  const panier = req.body

  // TODO validations (length, format...)

  models.panier
    .insert(panier)
    .then(([result]) => {
      res.location(`/panier/${result.insertId}`).sendStatus(201)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const destroy = (req, res) => {
  models.panier
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
const byuser = (req, res) => {
  const UtilisateurId = req.query.UtilisateurId
  models.panier
    .findbyuser(UtilisateurId)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
const delbyuser = (req, res) => {
  const UtilisateurId = req.query.UtilisateurId
  models.panier
    .delebyuser(UtilisateurId)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
// Pour supprimer du panier

const objetuser = (req, res) => {
  const UtilisateurId = req.query.UtilisateurId
  const ObjetsId = req.query.ObjetsId
  models.panier
    .delobjetuser(UtilisateurId, ObjetsId)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
const upanier = (req, res) => {
  const UtilisateurId = req.query.UtilisateurId
  const ObjetsId = req.query.ObjetsId
  const quantitePanier = req.query.quantitePanier
  models.panier
    .upanier(UtilisateurId, ObjetsId, quantitePanier)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
// Contrôle du panier d'un utilisateur
const achatbyuser = (req, res) => {
  const UtilisateurId = req.query.UtilisateurId
  console.info("je suis la", UtilisateurId)
  models.panier
    .achatbyuser(UtilisateurId)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(523)
    })
}
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  byuser,
  objetuser,
  upanier,
  delbyuser,
  achatbyuser,
}
