const express = require("express")
const multer = require("multer")
const { hashPassword, verifyPassword } = require("./auth.js")

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
router.delete("/utilisateur/:id", utilisateurControllers.destroy)

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
router.post("/objets", objetsControllers.add)
router.put("/objets/:id", objetsControllers.edit)
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
router.post("/commande", commandeControllers.add)
router.put("/commande/:id", commandeControllers.edit)
router.delete("/commande/:id", commandeControllers.destroy)

// ROUTE AVIS UTILISATEUR A CREATEUR
router.get("/avisutilisateur", avisutilisateurControllers.browse)
router.get("/avisutilisateur", avisutilisateurControllers.read)
router.post("/avisutilisateur", avisutilisateurControllers.add)
router.put("/avisutilisateur", avisutilisateurControllers.edit)
router.delete("/avisutilisateur", avisutilisateurControllers.destroy)

// ROUTE AVIS OBJETS
router.get("/avisobjet", avisobjetControllers.browse)
router.get("/avisobjet", avisobjetControllers.read)
router.post("/avisobjet", avisobjetControllers.add)
router.put("/avisobjet", avisobjetControllers.edit)
router.delete("/avisobjet", avisobjetControllers.destroy)

// ROUTE liaison COMMANDE OBJET
router.get("/commandehasobjets", commandeobjetsControllers.browse)
router.get("/commandehasobjets", commandeobjetsControllers.read)
router.post("/commandehasobjets", commandeobjetsControllers.add)
router.put("/commandehasobjets", commandeobjetsControllers.edit)
router.delete("/commandehasobjets", commandeobjetsControllers.destroy)

// ROUTE PANIER
router.get("/panier", panierControllers.browse)
router.get("/panier", panierControllers.read)
router.post("/panier", panierControllers.add)
router.put("/panier", panierControllers.edit)
router.delete("/panier", panierControllers.objetuser)
router.get("/panieruser", panierControllers.byuser)

// ROUTE liaison CREATEUR CATEGORIE
router.get("/utilisateurhascategorie", utilisateurcategorieControllers.browse)
router.get("/utilisateurhascategorie", utilisateurcategorieControllers.read)
router.post("/utilisateurhascategorie", utilisateurcategorieControllers.add)
router.put("/utilisateurhascategorie", utilisateurcategorieControllers.edit)
router.delete(
  "/utilisateurhascategorie",
  utilisateurcategorieControllers.destroy
)

// ROUTE liaison UTILISATEUR OBJETS
router.get("/utilisateurhasobjets", utilisateurobjetsControllers.browse)
router.get("/utilisateurhasobjets", utilisateurobjetsControllers.read)
router.post("/utilisateurhasobjets", utilisateurobjetsControllers.add)
router.put("/utilisateurhasobjets", utilisateurobjetsControllers.edit)
router.delete("/utilisateurhasobjets", utilisateurobjetsControllers.destroy)

// ROUTE liaison CATEGORIE OBJETS
router.get("/categoriehasobjets", categorieobjetsControllers.browse)
router.get("/categoriehasobjets", categorieobjetsControllers.read)
router.post("/categoriehasobjets", categorieobjetsControllers.add)
router.put("/categoriehasobjets", categorieobjetsControllers.edit)
router.delete("/categoriehasobjets", categorieobjetsControllers.destroy)

// ROUTE UPLOAD IMAGE DANS BACKEND
router.post("/upload", upload.single("myfile"), uploadControllers.upload)

// ROUTE de CONNEXION
router.post(
  "/utilisateurconnexion",
  utilisateurControllers.loginUtilisateur,
  verifyPassword
)

module.exports = router
