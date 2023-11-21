import Cube from "react-3d-cube"
import { useEffect, useState } from "react"
import AlterwordAPI from "../services/AlterwordAPI"
import "./Cube.css"

function Cube3D() {
  const [vuobjets, setVuobjets] = useState([])
  const [img1, setImg1] = useState("")
  const [img2, setImg2] = useState("")
  const [img3, setImg3] = useState("")
  const [img4, setImg4] = useState("")
  const [img5, setImg5] = useState("")
  const [img6, setImg6] = useState("")
  const [triObjets, setTriObjets] = useState([])
  const API_URL = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    AlterwordAPI.get("/quantitecommande").then((res) => setVuobjets(res.data))
  }, [])

  useEffect(() => {
    setTriObjets(
      vuobjets.sort((a, b) => b.quantiteCommande - a.quantiteCommande)
    )
    setImg1(triObjets[0]?.photo1)
    setImg2(triObjets[1]?.photo1)
    setImg3(triObjets[2]?.photo1)
    setImg4(triObjets[3]?.photo1)
    setImg5(triObjets[4]?.photo1)
    setImg6(triObjets[5]?.photo1)
  }, [vuobjets])

  return (
    <center>
      {img6 && (
        <div
          style={{
            width: 300,
            height: 300,
            marginTop: 100,
          }}
        >
          <Cube size={300} index="front">
            <div className="imagecube">
              <img src={API_URL + img1} alt="front" />
            </div>
            <div className="imagecube">
              <img src={API_URL + img2} alt="right" />
            </div>
            <div className="imagecube">
              <img src={API_URL + img3} alt="back" />
            </div>
            <div className="imagecube">
              <img src={API_URL + img4} alt="left" />
            </div>
            <div className="imagecube">
              <img src={API_URL + img5} alt="top" />
            </div>
            <div className="imagecube">
              <img src={API_URL + img6} alt="bottom" />
            </div>
          </Cube>
        </div>
      )}
    </center>
  )
}
export default Cube3D
