const models = require("../models")

const browse = (req, res) => {
  models.utilisateur
    .findAll()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(511)
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
const read = (req, res) => {
  models.utilisateur
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
      res.sendStatus(513)
    })
}

const edit = (req, res) => {
  const utilisateur = req.body

  utilisateur.id = parseInt(req.params.id, 10)

  models.utilisateur
    .update(utilisateur)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404)
      } else {
        res.sendStatus(204)
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(514)
    })
}
const editutilisateurcategorie = (req, res) => {
  const utilisateur = req.body
  utilisateur.password = req.body.hashedPassword
  utilisateur.id = parseInt(req.params.id, 10)

  models.utilisateur
    .insert(utilisateur)
    .then(([createduser]) => {
      const user = {
        UtilisateurId: createduser.insertId,
        CategorieId: req.body.CategorieID, // tu devras mettre l'information de l'id catégorie qui vient du front
      }
      models.utilisateurcategorie.insert(user).then(([rows]) => {
        res.send(rows)
      })
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(515)
    })
}
const destroy = (req, res) => {
  models.utilisateur
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
      res.sendStatus(516)
    })
}

const readUtilisateurWithCategorie = (req, res) => {
  models.utilisateur
    .readUtilisateurWithCategorie()
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
  browse,
  add,
  read,
  edit,
  destroy,
  readUtilisateurWithCategorie,
  editutilisateurcategorie,
  loginUtilisateur,
  logoutUtilisateur,
  findemail,
}
