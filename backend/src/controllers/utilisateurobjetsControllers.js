const models = require("../models")

const add = (req, res) => {
  const utilisateurobjets = req.body

  // TODO validations (length, format...)

  models.utilisateurobjets
    .insert(utilisateurobjets)
    .then(([result]) => {
      res.json(result.insertId)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = {
  add,
}
