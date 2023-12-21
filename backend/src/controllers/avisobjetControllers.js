const models = require("../models")

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
module.exports = {
  add,
  readavis,
}
