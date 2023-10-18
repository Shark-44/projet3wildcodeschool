const express = require("express")
const multer = require("multer")
const { hashPassword, verifyPassword, checkToken } = require("./auth.js")

const router = express.Router()
const upload = multer({ dest: "./public/assets/image/avatar" })

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

// ROUTES UTILISATEUR
router.get("/utilisateur", utilisateurControllers.browse)
router.get("/utilisateur/:id", utilisateurControllers.read)
router.post(
  "/utilisateur",
  validator.validateUtilisateur,
  hashPassword,
  utilisateurControllers.add
)
router.put(
  "/utilisateur/:id",
  validator.validateUtilisateur,
  hashPassword,
  utilisateurControllers.edit
)
router.delete("/utilisateur/:id", checkToken, utilisateurControllers.destroy)

// ROUTE JOINTURE
router.get(
  "/utilisateur/with/categorie",
  utilisateurControllers.readUtilisateurWithCategorie
)
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
router.get("/utilisateur/with/objets", objetsControllers.objetsByUtilisateur)
router.get(
  "/utilisateur/avec/objets",
  objetsControllers.readobjetsByUtilisateur
)
router.get("/objets/with/categorie", objetsControllers.objetsByCategorie)
router.get("/avisurobjet", objetsControllers.readavisobjet)
router.get("/avisurobjetparid", objetsControllers.readavisobjetid)
router.get("/quantitecommande", objetsControllers.vuquantiteobjets)
router.get("/objetpanier", objetsControllers.achatbyuser)

// ROUTE CATEGORIE
router.get("/categorie", categorieControllers.browse)
router.get("/categorie/:id", categorieControllers.read)

// ROUTE COMMANDE
router.get("/commande", commandeControllers.browse)
router.get("/commande/:id", commandeControllers.read)
router.post("/commande", checkToken, commandeControllers.add)
router.put("/commande/:id", checkToken, commandeControllers.edit)
router.delete("/commande/:id", checkToken, commandeControllers.destroy)
router.get("/histocommande", commandeControllers.cbyuser)

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
router.post("/panier", checkToken, panierControllers.add)
router.delete("/panier", checkToken, panierControllers.objetuser)
router.get("/panieruser", panierControllers.byuser)
router.put("/panier", checkToken, panierControllers.upanier)

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
router.post("/upload", upload.single("myfile"), uploadControllers.upload)

// ROUTE de CONNEXION
router.post(
  "/utilisateurconnexion",
  utilisateurControllers.loginUtilisateur,
  verifyPassword
)
router.get("/utilisateurconnexion", utilisateurControllers.logoutUtilisateur)

module.exports = router
