const models = require("../models")

const findcreateur = (req, res) => {
  models.utilisateur
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

const add = (req, res) => {
  const utilisateur = req.body
  utilisateur.password = req.body.hashedPassword

  models.utilisateur
    .insert(utilisateur)
    .then(([result]) => {
      res.json(result.insertId)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(512)
    })
}
const toutlescreateurs = (req, res) => {
  models.utilisateur
    .readallcreateur()
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404)
      } else {
        res.send(rows)
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(517)
    })
}
const finduserC = (req, res) => {
  const UtilisateurId = req.query.UtilisateurId
  models.utilisateur
    .findtype(UtilisateurId)
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
const loginUtilisateur = (req, res, next) => {
  const { email } = req.body

  models.utilisateur
    .loginUtilisateur([email])
    .then(([utilisateur]) => {
      if (utilisateur[0] != null) {
        req.user = utilisateur[0]
        // console.info([utilisateur]) verif si bonne recuperation de l'user
        next()
      } else {
        res.sendStatus(411).send("pas trouvé")
      }
    })

    .catch((err) => {
      console.error(err)

      res.status(518).send("Error retrieving data from database")
    })
}
const logoutUtilisateur = (req, res) => {
  res
    .clearCookie("auth_token")
    .clearCookie("Prenom")
    .clearCookie("UtilisateurId")
    .sendStatus(200)
}
const findemail = (req, res) => {
  const email = req.query.email
  models.utilisateur
    .findemailuser(email)
    .then(([utilisateur]) => {
      if (utilisateur[0] == null) {
        res.sendStatus(200)
      } else if (utilisateur[0] != null) {
        res.sendStatus(401)
      }
    })

    .catch((err) => {
      console.error(err)

      res.status(518).send("Error retrieving data from database")
    })
}
module.exports = {
  findcreateur,
  add,
  toutlescreateurs,
  loginUtilisateur,
  logoutUtilisateur,
  findemail,
  finduserC,
}
