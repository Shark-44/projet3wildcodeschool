const models = require("../models")

const browse = (req, res) => {
  models.avisobjet
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
  models.avisobjet
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
  const avisobjet = req.body

  // TODO validations (length, format...)

  avisobjet.id = parseInt(req.params.id, 10)

  models.avisobjet
    .update(avisobjet)
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
  const avisobjet = req.body

  models.avisobjet
    .insert(avisobjet)
    .then(([liaison]) => {
      const avid = liaison.insertId
      const ObjetsId = req.body.ObjetsId
      models.avishasobjets.insert(avid, ObjetsId)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const destroy = (req, res) => {
  models.avisobjet
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
const readavis = (req, res) => {
  models.avisobjet
    .readavisuser()
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
  models.avisobjet
    .readavisobjetid(id)
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
  read,
  edit,
  add,
  destroy,
  readavis,
  readavisobjetid,
}
