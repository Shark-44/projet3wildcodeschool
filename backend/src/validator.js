const Joi = require("joi")
const passwordComplexity = require("joi-password-complexity")

const passwordComplexityOptions = {
  min: 6, // longueur minimale origine 8
  max: 20, // longueur maximale
  lowerCase: 1, // au moins 1 lettre minuscule
  upperCase: 1, // au moins 1 lettre majuscule
  numeric: 1, // au moins 1 chiffre
  symbol: 1, // au moins 1 caractère spécial
  requirementCount: 4, // le nombre total de critères requis
}

const utilisateurSchema = Joi.object({
  nom: Joi.string().max(50).required(),
  prenom: Joi.string().max(50).required(),
  email: Joi.string().email().max(250).required(),
  password: passwordComplexity(passwordComplexityOptions),
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
    res.status(485).json({ validationErrors: error.details })
  } else {
    next()
  }
}

module.exports = {
  validateUtilisateur,
}
