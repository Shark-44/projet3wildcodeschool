const models = require("../models")
const add = (req, res) => {
  const avis = req.body

  models.avishasobjets
    .insert(avis)
    .then(([result]) => {
      res.json(result.insertId)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
module.exports = { add }
