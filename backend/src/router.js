const express = require("express")
const multer = require("multer")
const { hashPassword, verifyPassword, checkToken } = require("./auth.js")

const router = express.Router()
const upload = multer({ dest: "./public/assets/images" })

const objetsControllers = require("./controllers/objetsControllers")
const utilisateurControllers = require("./controllers/utilisateurControllers")
const commandeControllers = require("./controllers/commandeControllers")
const avisutilisateurControllers = require("./controllers/avisutilisateurControllers")
const avisobjetControllers = require("./controllers/avisobjetControllers")
const commandeobjetsControllers = require("./controllers/commandeobjetsControllers")
const panierControllers = require("./controllers/panierControllers")
const utilisateurobjetsControllers = require("./controllers/utilisateurobjetsControllers")
const uploadControllers = require("./controllers/uploadControllers")
const validator = require("./validator")
const favorisControlers = require("./controllers/favorisControllers")

// ROUTES UTILISATEUR
router.get("/utilisateur", utilisateurControllers.browse)
router.get("/utilisateur/:id", utilisateurControllers.read)
router.post(
  "/utilisateur",
  validator.validateUtilisateur,
  hashPassword,
  utilisateurControllers.add
) // dec 2023
router.put(
  "/utilisateur/:id",
  validator.validateUtilisateur,
  hashPassword,
  utilisateurControllers.edit
)
router.delete("/utilisateur/:id", checkToken, utilisateurControllers.destroy)
router.get("/utilisateuremailexists", utilisateurControllers.findemail) // dec 2023

// ROUTE JOINTURE
router.get(
  "/utilisateur/with/categorie",
  utilisateurControllers.toutlescreateurs
) // dec 2023

// ROUTE OBJETS
router.get("/objets", objetsControllers.browse)
router.get("/objets/:id", objetsControllers.read)
router.post("/objets", checkToken, objetsControllers.add)
router.put("/objets/:id", checkToken, objetsControllers.edit)
router.delete("/objets/:id", objetsControllers.destroy)
router.get("/utilisateur/with/objets", objetsControllers.allobjetcreateur) // dec 2023
router.get(
  "/utilisateur/avec/objets",
  objetsControllers.readobjetsByUtilisateur
)
router.get("/objets/with/categorie", objetsControllers.objetsByCategorie) // dec 2023
router.get("/avisurobjet", objetsControllers.readavisobjet) // del..........................
router.get("/avisurobjetparid", avisobjetControllers.readavisobjetid) // dec 2023
router.get("/quantitecommande", objetsControllers.vuquantiteobjets) // dec 2023

router.post("/objetbycreateur", objetsControllers.ajoutbycreateur) // le 21 dec

// ROUTE CATEGORIE

router.get("/categriebyuser", utilisateurControllers.finduserC) // dec 2023

// ROUTE COMMANDE
router.get("/commande", commandeControllers.browse) // del...........................
router.get("/commande/:id", commandeControllers.read) // del.........................
router.post("/commande", checkToken, commandeControllers.add) // del.................
router.put("/commande/:id", checkToken, commandeControllers.edit) // del.............
router.delete("/commande/:id", checkToken, commandeControllers.destroy) // del.......
router.get("/histocommande", commandeControllers.cbyuser) // dec 2023
router.get("/commandelastID", commandeControllers.dernierID) // dec 2023
router.post("/commandeandobjet/:id", commandeControllers.validecommande) // dec 2023

// ROUTE AVIS UTILISATEUR A CREATEUR
router.get("/avislaisse", avisutilisateurControllers.surcreateur) // dec 2023

// ROUTE AVIS OBJETS

router.get("/avisutilisateurhome", avisobjetControllers.readavis) // dec 2023
router.post("/avisobjet", checkToken, avisobjetControllers.add) // le 21 dec

// ROUTE liaison COMMANDE OBJET

router.post("/commandehasobjets", checkToken, commandeobjetsControllers.add) // dec 2023

// ROUTE PANIER
router.get("/panier", panierControllers.browse)
router.get("/panier", panierControllers.read)
router.post("/panier", checkToken, panierControllers.add) // dec 2023
router.delete("/panier", checkToken, panierControllers.objetuser) // dec 2023
router.delete("/panierbyuser", checkToken, panierControllers.delbyuser) // dec 2023
router.put("/panier", checkToken, panierControllers.upanier) // dec 2023
router.get("/objetpanier", panierControllers.achatbyuser) // dec 2023

// ROUTE favoris
router.get("/favoris", checkToken, favorisControlers.lirefavoris) // dec 2023
router.post("/favoris", checkToken, favorisControlers.ajoutfavoris) // dec 2023
router.delete("/favoris", checkToken, favorisControlers.supfavoris) // dec 2023
router.get("/favorispouruser", checkToken, favorisControlers.favorisuser) // dec 2023
router.delete("/favorispouruser", checkToken, favorisControlers.delfavorisuser) // dec 2023

// ROUTE liaison UTILISATEUR OBJETS
router.post(
  "/utilisateurhasobjets",
  checkToken,
  utilisateurobjetsControllers.add
)

// ROUTE UPLOAD IMAGE DANS BACKEND
router.post("/upload", upload.single("myfile"), uploadControllers.upload) // dec 2023
router.post(
  "/upload/:dossier",
  upload.single("myfile"),
  uploadControllers.uploadavecdossier
) // dec 2023

// ROUTE de CONNEXION
router.post(
  "/utilisateurconnexion",
  utilisateurControllers.loginUtilisateur,
  verifyPassword
) // dec 2023
router.get("/utilisateurconnexion", utilisateurControllers.logoutUtilisateur) // dec 2023

module.exports = router
