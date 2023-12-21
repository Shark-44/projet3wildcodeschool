const models = require("../models")

const surcreateur = (req, res) => {
  const UtilisateurId1 = req.query.UtilisateurId1
  models.avisutilisateur
    .cherchecreateur(UtilisateurId1)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = {
  surcreateur,
}
