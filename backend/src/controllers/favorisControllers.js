const models = require("../models")

const lirefavoris = (req, res) => {
  const utilisateurId = req.query.UtilisateurID
  const utilisateurId1 = req.query.UtilisateurID1
  models.favoris
    .lirereqfavoris(utilisateurId, utilisateurId1)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
const ajoutfavoris = (req, res) => {
  const utilisateurId = req.query.UtilisateurID
  const utilisateurId1 = req.query.UtilisateurID1
  models.favoris
    .ajoutreqfavoris(utilisateurId, utilisateurId1)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
const supfavoris = (req, res) => {
  const utilisateurId = req.query.UtilisateurID
  const utilisateurId1 = req.query.UtilisateurID1
  models.favoris
    .supreqfavoris(utilisateurId, utilisateurId1)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
const favorisuser = (req, res) => {
  const utilisateurId = req.query.UtilisateurID

  models.favoris
    .lirefavorisuser(utilisateurId)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}
const delfavorisuser = (req, res) => {
  const utilisateurId = req.query.UtilisateurID
  const utilisateurId1 = req.query.UtilisateurID1
  models.favoris
    .supreqfavoris(utilisateurId, utilisateurId1)
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = {
  lirefavoris,
  ajoutfavoris,
  supfavoris,
  favorisuser,
  delfavorisuser,
}
