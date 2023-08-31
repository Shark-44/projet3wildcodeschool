const Joi = require("joi")

const utilisateurSchema = Joi.object({
  nom: Joi.string().max(50).required(),
  prenom: Joi.string().max(50).required(),
  email: Joi.string().email().max(250).required(),
  password: Joi.string().max(100).required(),
  adresse: Joi.string().max(250).required(),
  codePostal: Joi.string().max(5).required(),
  ville: Joi.string().max(100).required(),
  createur: Joi.string().max(2).required(),
})
const validateUtilisateur = (req, res, next) => {
  const { nom, prenom, email, password, adresse, codePostal, ville, createur } =
    req.body
  const { error } = utilisateurSchema.validate(
    { nom, prenom, email, password, adresse, codePostal, ville, createur },
    { abortEarly: false }
  )
  if (error) {
    res.status(422).json({ validationErrors: error.details })
  } else {
    next()
  }
}
module.exports = {
  validateUtilisateur,
}
