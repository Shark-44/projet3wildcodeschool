const models = require("../models")

const browse = (req, res) => {
  models.utilisateur
    .findAll()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const add = (req, res) => {
  const utilisateur = req.body
  utilisateur.password = req.body.hashedPassword

  // TODO validations (length, format...)
  models.utilisateur
    .insert(utilisateur)
    .then(([result]) => {
      res.json(result.insertId)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
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
      res.sendStatus(500)
    })
}

const edit = (req, res) => {
  const utilisateur = req.body

  // TODO validations (length, format...)

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
      res.sendStatus(500)
    })
}
const editutilisateurcategorie = (req, res) => {
  const utilisateur = req.body

  // TODO validations (length, format...)

  utilisateur.id = parseInt(req.params.id, 10)

  models.utilisateur
    .insert(utilisateur)
    .then(([createduser]) => {
      const user = {
        UtilisateurId: createduser.insertId,
        CategorieId: req.body.CategorieID, // tu devra metre l'information de l'id categorie qui vien du front
      }
      models.utilisateurcategorie.insert(user).then(([rows]) => {
        res.send(rows)
      })
      // const utilisateurId = utilisateur.id
      // const Utilisateurcategorie = {
      //   utilisateurId,
      // }
      // return models.utilisateurcategorie.insert(Utilisateurcategorie)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
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
      res.sendStatus(500)
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
      res.sendStatus(500)
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
}
