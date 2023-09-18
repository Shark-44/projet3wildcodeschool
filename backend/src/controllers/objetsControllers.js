const models = require("../models")

const browse = (req, res) => {
  models.objets
    .findAll()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const add = (req, res) => {
  const objets = req.body

  // TODO validations (length, format...)

  models.objets
    .insert(objets)
    .then(([result]) => {
      res.json(result.insertId)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
const read = (req, res) => {
  models.objets
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(434)
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
  const objets = req.body

  // TODO validations (length, format...)

  objets.id = parseInt(req.params.id, 10)

  models.objets
    .update(objets)
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
const destroy = (req, res) => {
  models.objets
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(414)
      } else {
        res.sendStatus(204)
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
// objet par utilisateur
const objetsByUtilisateur = (req, res) => {
  const prenom = req.query.prenom
  models.objets
    .readobjetsByUtilisateur(prenom)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
const readobjetsByUtilisateur = (req, res) => {
  const id = req.query.id
  models.objets
    .readObjetsByUtilisateur(id)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

// objet par categorie
const objetsByCategorie = (req, res) => {
  const type = req.query.type

  console.info(type)

  models.objets
    .readobjetsByCategorie(type)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
// avis objet
const readavisobjet = (req, res) => {
  models.objets
    .readavisobjet()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
const readavisobjetid = (req, res) => {
  const id = req.query.id
  models.objets
    .readavisobjetid(id)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
// pour afficher les photos objets les plus commandés
const vuquantiteobjets = (req, res) => {
  models.objets
    .lirequantiteobjets()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = {
  browse,
  add,
  read,
  edit,
  destroy,
  objetsByUtilisateur,
  readobjetsByUtilisateur,
  objetsByCategorie,
  readavisobjet,
  readavisobjetid,
  vuquantiteobjets,
}
