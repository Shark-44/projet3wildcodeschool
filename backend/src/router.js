const express = require("express")
const multer = require("multer")
const { hashPassword, verifyPassword, checkToken } = require("./auth.js")

const router = express.Router()
const upload = multer({ dest: "./public/assets/images" })

const objetsControllers = require("./controllers/objetsControllers")
const utilisateurControllers = require("./controllers/utilisateurControllers")
const categorieControllers = require("./controllers/categorieControllers")
const commandeControllers = require("./controllers/commandeControllers")
const avisutilisateurControllers = require("./controllers/avisutilisateurControllers")
const avisobjetControllers = require("./controllers/avisobjetControllers")
const commandeobjetsControllers = require("./controllers/commandeobjetsControllers")
const panierControllers = require("./controllers/panierControllers")
const utilisateurcategorieControllers = require("./controllers/utilisateurcategorieControllers")
const utilisateurobjetsControllers = require("./controllers/utilisateurobjetsControllers")
const categorieobjetsControllers = require("./controllers/categorieobjetsControllers")
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
router.post(
  "/utilisateur/with/categorie",
  validator.validateUtilisateur,
  hashPassword,
  utilisateurControllers.editutilisateurcategorie
)

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
router.get("/objets/with/categorie", objetsControllers.objetsByCategorie)
router.get("/avisurobjet", objetsControllers.readavisobjet)
router.get("/avisurobjetparid", avisobjetControllers.readavisobjetid) // dec 2023
router.get("/quantitecommande", objetsControllers.vuquantiteobjets)

router.post("/objetbycreateur", objetsControllers.ajoutbycreateur)

// ROUTE CATEGORIE
router.get("/categorie", categorieControllers.browse)
router.get("/categorie/:id", categorieControllers.read)
router.get("/categriebyuser", categorieControllers.finduserC)

// ROUTE COMMANDE
router.get("/commande", commandeControllers.browse)
router.get("/commande/:id", commandeControllers.read)
router.post("/commande", checkToken, commandeControllers.add)
router.put("/commande/:id", checkToken, commandeControllers.edit)
router.delete("/commande/:id", checkToken, commandeControllers.destroy)
router.get("/histocommande", commandeControllers.cbyuser) // dec 2023
router.get("/commandelastID", commandeControllers.dernierID)
router.post("/commandeandobjet/:id", commandeControllers.validecommande)

// ROUTE AVIS UTILISATEUR A CREATEUR
router.get("/avisutilisateur", avisutilisateurControllers.browse)
router.get("/avisutilisateur", avisutilisateurControllers.read)
router.post("/avisutilisateur", checkToken, avisutilisateurControllers.add)
router.put("/avisutilisateur", checkToken, avisutilisateurControllers.edit)
router.delete(
  "/avisutilisateur",
  checkToken,
  avisutilisateurControllers.destroy
)
router.get("/avislaisse", avisutilisateurControllers.surcreateur)

// ROUTE AVIS OBJETS
router.get("/avisobjet", avisobjetControllers.browse)
router.get("/avisobjet", avisobjetControllers.read)
router.get("/avisutilisateurhome", avisobjetControllers.readavis) // dec 2023
router.post("/avisobjet", checkToken, avisobjetControllers.add)
router.put("/avisobjet", checkToken, avisobjetControllers.edit)
router.delete("/avisobjet", checkToken, avisobjetControllers.destroy)

// ROUTE liaison COMMANDE OBJET
router.get("/commandehasobjets", commandeobjetsControllers.browse)
router.get("/commandehasobjets", commandeobjetsControllers.read)
router.post("/commandehasobjets", checkToken, commandeobjetsControllers.add)
router.put("/commandehasobjets", checkToken, commandeobjetsControllers.edit)
router.delete(
  "/commandehasobjets",
  checkToken,
  commandeobjetsControllers.destroy
)

// ROUTE PANIER
router.get("/panier", panierControllers.browse)
router.get("/panier", panierControllers.read)
router.post("/panier", checkToken, panierControllers.add) // dec 2023
router.delete("/panier", checkToken, panierControllers.objetuser) // le 20 dec
router.delete("/panieruser", checkToken, panierControllers.delbyuser)
router.get("/panieruser", panierControllers.byuser)
router.put("/panier", checkToken, panierControllers.upanier) // dec 2023
router.get("/objetpanier", panierControllers.achatbyuser) // dec 2023

// ROUTE liaison CREATEUR CATEGORIE
router.get("/utilisateurhascategorie", utilisateurcategorieControllers.browse)
router.get("/utilisateurhascategorie", utilisateurcategorieControllers.read)
router.post(
  "/utilisateurhascategorie",
  checkToken,
  utilisateurcategorieControllers.add
)
router.put(
  "/utilisateurhascategorie",
  checkToken,
  utilisateurcategorieControllers.edit
)
router.delete(
  "/utilisateurhascategorie",
  checkToken,
  utilisateurcategorieControllers.destroy
)
// ROUTE favoris
router.get("/favoris", checkToken, favorisControlers.lirefavoris)
router.post("/favoris", checkToken, favorisControlers.ajoutfavoris)
router.delete("/favoris", checkToken, favorisControlers.supfavoris)
router.get("/favorispouruser", checkToken, favorisControlers.favorisuser)
router.delete("/favorispouruser", checkToken, favorisControlers.delfavorisuser)

// ROUTE liaison UTILISATEUR OBJETS
router.get("/utilisateurhasobjets", utilisateurobjetsControllers.browse)
router.get("/utilisateurhasobjets", utilisateurobjetsControllers.read)
router.post(
  "/utilisateurhasobjets",
  checkToken,
  utilisateurobjetsControllers.add
)
router.put(
  "/utilisateurhasobjets",
  checkToken,
  utilisateurobjetsControllers.edit
)
router.delete(
  "/utilisateurhasobjets",
  checkToken,
  utilisateurobjetsControllers.destroy
)

// ROUTE liaison CATEGORIE OBJETS
router.get("/categoriehasobjets", categorieobjetsControllers.browse)
router.get("/categoriehasobjets", categorieobjetsControllers.read)
router.post("/categoriehasobjets", checkToken, categorieobjetsControllers.add)
router.put("/categoriehasobjets", checkToken, categorieobjetsControllers.edit)
router.delete(
  "/categoriehasobjets",
  checkToken,
  categorieobjetsControllers.destroy
)

// ROUTE UPLOAD IMAGE DANS BACKEND
router.post("/upload", upload.single("myfile"), uploadControllers.upload) // dec 2023
router.post(
  "/upload/:dossier",
  upload.single("myfile"),
  uploadControllers.uploadavecdossier
)

// ROUTE de CONNEXION
router.post(
  "/utilisateurconnexion",
  utilisateurControllers.loginUtilisateur,
  verifyPassword
) // dec 2023
router.get("/utilisateurconnexion", utilisateurControllers.logoutUtilisateur) // dec 2023

module.exports = router
