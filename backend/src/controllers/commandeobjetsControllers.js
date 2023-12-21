const models = require("../models")

const add = (req, res) => {
  const commandeobjets = req.body

  // TODO validations (length, format...)

  models.commandeobjets
    .insert(commandeobjets)
    .then(([result]) => {
      res.location(`/commandehasobjets/${result.insertId}`).sendStatus(201)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
module.exports = {
  add,
}
