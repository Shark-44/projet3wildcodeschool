import Cube from "react-3d-cube"
import axios from "axios"
import "./home.css"
import { useEffect, useState } from "react"

const Home = () => {
  const [vuobjets, setVuobjets] = useState([])
  const triObjets = vuobjets.sort(
    (a, b) => b.quantiteCommande - a.quantiteCommande
  )

  useEffect(() => {
    axios
      .get("http://localhost:4242/quantitecommande")
      .then((res) => setVuobjets(res.data))
  }, [])
  // const img1 = triObjets[0].photo1
  // const img2 = triObjets[1].photo1
  // const img3 = triObjets[2].photo1
  // const img4 = triObjets[3].photo1
  // const img5 = triObjets[4].photo1
  //  const img6 = triObjets[5].photo1
  // eslint-disable-next-line no-restricted-syntax
  console.log(triObjets)
  return (
    <div className="containerhome">
      <div className="presentation">
        <h2>
          Alterword :Une boutique? Plus que cela, ce site pour reunir joeurs de
          jeux de rôle cherchant améliorer leur experience. Et des createurs qui
          vous proposent de decouvrir leur univer a travers leur collection.
        </h2>
      </div>
      <div className="lecube">
        <center>
          <h1>Les objets les plus vendus</h1>
          <div
            style={{
              width: 300,
              height: 300,
              marginTop: 100,
            }}
          >
            <Cube size={300} index="front"></Cube>
          </div>
        </center>
        <div className="dernieravis"></div>
      </div>
    </div>
  )
}
export default Home
