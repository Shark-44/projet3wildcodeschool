import React, { useEffect, useState } from "react"
import AlterwordAPI from "../services/AlterwordAPI"
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from "@react-pdf/renderer"
import logo from "../assets/AlterWord.png"
import codebarre from "../assets/codebarre.png"
import Cookies from "js-cookie"
const API_URL = import.meta.env.VITE_BACKEND_URL

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    color: "black",
  },
  imageCB: {
    height: 50,
    width: 150,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 50,
    height: 50,
    width: 150,
  },
  sectionA: {
    margin: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  sectionref: {
    margin: 10,
    borderBottom: 2,
  },
  sectionclient: {
    margin: 10,
  },
  client: {
    fontSize: 13,
  },
  card: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
  },
  imagecard: {
    height: 50,
    width: 50,
  },
  sectiontotal: {
    margin: 10,
    padding: 10,
    borderTop: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tva: {
    fontSize: 10,
    marginLeft: 200,
    alignItems: "center",
  },
  result: {
    fontSize: 25,
    fontWeight: 900,
  },
})
const date = new Date()
const formattedDate = date.toLocaleDateString("fr-FR")
// Create Document Component
const MyDocument = () => {
  const [objetspanier, setObjetspanier] = useState([])
  const UtilisateurId = Cookies.get("UtilisateurId")
  const [utilisateur, setUtilisateur] = useState([])
  const sommetotal = objetspanier.reduce((somme, a) => {
    return somme + a.prix * a.quantitePanier
  }, 0)
  const TVA = ((sommetotal * 20) / 100).toFixed(2)

  useEffect(() => {
    AlterwordAPI.get(`/objetpanier?UtilisateurId=${UtilisateurId}`).then(
      (res) => setObjetspanier(res.data)
    )
  }, [])
  useEffect(() => {
    AlterwordAPI.get(`/utilisateur/${UtilisateurId}`).then((res) =>
      setUtilisateur(res.data)
    )
  }, [])

  return (
    <Document title="Facture">
      <Page size="A4" style={styles.page}>
        <View style={styles.sectionA}>
          <Image id="codebarre" src={codebarre} style={styles.imageCB} />
          <Image id="imagepdf" src={logo} style={styles.image} />
          <Text> Date :{formattedDate}</Text>
        </View>
        <View style={styles.sectionref}>
          <Text>Numéro de commande : </Text>
        </View>
        <View style={styles.sectionclient}>
          <Text style={styles.client}> Nom : {utilisateur.nom}</Text>
          <Text style={styles.client}> Prenom : {utilisateur.prenom}</Text>
          <Text style={styles.client}>
            {" "}
            Adresse : {utilisateur.adresse} {utilisateur.codePostal}{" "}
            {utilisateur.ville}
          </Text>
          <Text style={styles.client}> Email : {utilisateur.email}</Text>
        </View>
        <View>
          <Text style={styles.sectionref}> Detail commande</Text>
        </View>
        {objetspanier.map((a, index) => {
          const somme = a.prix * a.quantitePanier

          return (
            <View key={index} style={styles.card}>
              <Image
                style={styles.imagecard}
                source={API_URL + `${a.photo1}`}
              />
              <Text style={styles.textcard}> {a.nomObjet} </Text>
              <Text style={styles.textcard}>prix u. {a.prix} €</Text>
              <Text style={styles.textcard}> Qté :{a.quantitePanier} </Text>
              <Text style={styles.textcard}> : {somme} €</Text>
            </View>
          )
        })}
        <View style={styles.sectiontotal}>
          <Text style={styles.result}> Total : </Text>
          <Text style={styles.tva}> ( Dont TVA : {TVA} €) </Text>
          <Text style={styles.result}> {sommetotal} € </Text>
        </View>
      </Page>
    </Document>
  )
}

export default MyDocument
