const models = require("../models")
const objetuser = (req, res) => {
  const objetdel = req.query
  console.info("pour delete")
  models.panierobjet
    .delobjetuser(objetdel)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = { objetuser }
