require("dotenv").config()

const mysql = require("mysql2/promise")

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
})

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  )
})

// declare and fill models: that's where you should register your own managers

const models = {}

const AvisobjetManager = require("./AvisobjetManager")
const AvisutilisateurManager = require("./AvisutilisateurManager")
const CategorieobjetsManager = require("./CategorieobjetsManager")
const CategorieManager = require("./CategorieManager")
const CommandeManager = require("./CommandeManager")
const CommandeobjetsManager = require("./CommandeobjetsManager")
const ObjetsManager = require("./ObjetsManager")
const PanierManager = require("./PanierManager")
const UtilisateurcategorieManager = require("./UtilisateurcategorieManager")
const UtilisateurManager = require("./UtilisateurManager")
const UtilisateurobjetsManager = require("./UtilisateurobjetsManager")

models.avisobjet = new AvisobjetManager()
models.avisobjet.setDatabase(pool)

models.avisutilisateur = new AvisutilisateurManager()
models.avisutilisateur.setDatabase(pool)

models.categorie = new CategorieManager()
models.categorie.setDatabase(pool)

models.categorieobjets = new CategorieobjetsManager()
models.categorieobjets.setDatabase(pool)

models.commande = new CommandeManager()
models.commande.setDatabase(pool)

models.commandeobjets = new CommandeobjetsManager()
models.commandeobjets.setDatabase(pool)

models.objets = new ObjetsManager()
models.objets.setDatabase(pool)

models.panier = new PanierManager()
models.panier.setDatabase(pool)

models.utilisateurcategorie = new UtilisateurcategorieManager()
models.utilisateurcategorie.setDatabase(pool)

models.utilisateur = new UtilisateurManager()
models.utilisateur.setDatabase(pool)

models.utilisateurobjets = new UtilisateurobjetsManager()
models.utilisateurobjets.setDatabase(pool)

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop]
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1)

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    )
  },
}

module.exports = new Proxy(models, handler)
