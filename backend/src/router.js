const express = require("express")

const router = express.Router()

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

router.get("/utilisateur", utilisateurControllers.browse)
router.get("/utilisateur/:id", utilisateurControllers.read)
router.post("/utilisateur", utilisateurControllers.add)
router.put("/utilisateur/:id", utilisateurControllers.edit)
router.delete("/utilisateur/:id", utilisateurControllers.destroy)
router.get(
  "/utilisateur/with/categorie",
  utilisateurControllers.readUtilisateurWithCategorie
)

router.get("/objets", objetsControllers.browse)
router.get("/objets/:id", objetsControllers.read)
router.post("/objets", objetsControllers.add)
router.put("/objets/:id", objetsControllers.edit)
router.delete("/objets/:id", objetsControllers.destroy)

router.get("/categorie", categorieControllers.browse)
router.get("/categorie/:id", categorieControllers.read)

router.get("/commande", commandeControllers.browse)
router.get("/commande/:id", commandeControllers.read)
router.post("/commande", commandeControllers.add)
router.put("/commande/:id", commandeControllers.edit)
router.delete("/commande/:id", commandeControllers.destroy)

router.get("/avis_utilisateur", avisutilisateurControllers.browse)
router.get("/avis_utilisateur", avisutilisateurControllers.read)
router.post("/avis_utilisateur", avisutilisateurControllers.add)
router.put("/avis_utilisateur", avisutilisateurControllers.edit)
router.delete("/avis_utilisateur", avisutilisateurControllers.destroy)

router.get("/avis_objet", avisobjetControllers.browse)
router.get("/avis_objet", avisobjetControllers.read)
router.post("/avis_objet", avisobjetControllers.add)
router.put("/avis_objet", avisobjetControllers.edit)
router.delete("/avis_objet", avisobjetControllers.destroy)

router.get("/commande_has_objets", commandeobjetsControllers.browse)
router.get("/commande_has_objets", commandeobjetsControllers.read)
router.post("/commande_has_objets", commandeobjetsControllers.add)
router.put("/commande_has_objets", commandeobjetsControllers.edit)
router.delete("/commande_has_objets", commandeobjetsControllers.destroy)

router.get("/panier", panierControllers.browse)
router.get("/panier", panierControllers.read)
router.post("/panier", panierControllers.add)
router.put("/panier", panierControllers.edit)
router.delete("/panier", panierControllers.destroy)

router.get("/utilisateur_has_categorie", utilisateurcategorieControllers.browse)
router.get("/utilisateur_has_categorie", utilisateurcategorieControllers.read)
router.post("/utilisateur_has_categorie", utilisateurcategorieControllers.add)
router.put("/utilisateur_has_categorie", utilisateurcategorieControllers.edit)
router.delete(
  "/utilisateur_has_categorie",
  utilisateurcategorieControllers.destroy
)

router.get("/utilisateur_has_objets", utilisateurobjetsControllers.browse)
router.get("/utilisateur_has_objets", utilisateurobjetsControllers.read)
router.post("/utilisateur_has_objets", utilisateurobjetsControllers.add)
router.put("/utilisateur_has_objets", utilisateurobjetsControllers.edit)
router.delete("/utilisateur_has_objets", utilisateurobjetsControllers.destroy)

router.get("/categorie_has_objets", categorieobjetsControllers.browse)
router.get("/categorie_has_objets", categorieobjetsControllers.read)
router.post("/categorie_has_objets", categorieobjetsControllers.add)
router.put("/categorie_has_objets", categorieobjetsControllers.edit)
router.delete("/categorie_has_objets", categorieobjetsControllers.destroy)

module.exports = router
