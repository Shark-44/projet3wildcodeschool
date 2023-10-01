import "./Test.css"
import axios from "axios"
import { useState, useEffect } from "react"
import Likebtn from "../components/Likebtn"
import Btnfavoris from "../components/Btnfavoris"
function Test() {
  // eslint-disable-next-line no-unused-vars
  const [objets, setObjets] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:4242/objets/1`)
      .then((res) => setObjets(res.data))
  })
  const [rightreg, setRightreg] = useState("10")
  const [leftreg, setLeftreg] = useState("290")
  const handlemouse = () => {
    if (rightreg === "10") {
      setRightreg("290")
      setLeftreg("10")
    } else {
      setRightreg("10")
      setLeftreg("290")
    }
  }
  return (
    <div className="cardloupe">
      <div className="contient">
        <div className="zoneA"></div>
        <div className="zoneB"></div>
      </div>
      <div className="test" onMouseOver={handlemouse}>
        <div className="right" style={{ width: `${rightreg}px` }}></div>
        <div className="left" style={{ width: `${leftreg}px` }}></div>
      </div>
      <Likebtn />
      <Btnfavoris />
    </div>
  )
}

export default Test
