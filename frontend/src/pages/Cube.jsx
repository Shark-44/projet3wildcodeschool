import Cube from "react-3d-cube"
import { useEffect, useState } from "react"
import axios from "axios"
import "./cube.css"

function Cube3D() {
  const [vuobjets, setVuobjets] = useState([])
  const triObjets = vuobjets.sort(
    (a, b) => b.quantiteCommande - a.quantiteCommande
  )

  useEffect(() => {
    axios
      .get("http://localhost:4242/quantitecommande")
      .then((res) => setVuobjets(res.data))
  }, [])
  const img1 = triObjets.length > 0 ? triObjets[0].photo1 : ""
  const img2 = triObjets.length > 1 ? triObjets[1].photo1 : ""
  const img3 = triObjets.length > 2 ? triObjets[2].photo1 : ""
  const img4 = triObjets.length > 3 ? triObjets[3].photo1 : ""
  const img5 = triObjets.length > 4 ? triObjets[4].photo1 : ""
  const img6 = triObjets.length > 5 ? triObjets[5].photo1 : ""
  return (
    <center>
      <div
        style={{
          width: 300,
          height: 300,
          marginTop: 100,
        }}
      >
        <Cube size={300} index="front">
          <div className="imagecube">
            <img src={`http://localhost:4242${img1}`} alt="front" />
          </div>
          <div className="imagecube">
            <img src={`http://localhost:4242${img2}`} alt="right" />
          </div>
          <div className="imagecube">
            <img src={`http://localhost:4242${img3}`} alt="back" />
          </div>
          <div className="imagecube">
            <img src={`http://localhost:4242${img4}`} alt="left" />
          </div>
          <div className="imagecube">
            <img src={`http://localhost:4242${img5}`} alt="top" />
          </div>
          <div className="imagecube">
            <img src={`http://localhost:4242${img6}`} alt="bottom" />
          </div>
        </Cube>
      </div>
    </center>
  )
}
export default Cube3D
