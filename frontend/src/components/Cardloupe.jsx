import AlterwordAPI from "../services/AlterwordAPI"
import { useState, useEffect } from "react"
import "./Cardloupe.css"

const Cardloupe = ({ isShowZoom, handlezoom, params }) => {
  const [rightreg, setRightreg] = useState("10")
  const [leftreg, setLeftreg] = useState("600")
  const [objets, setObjets] = useState([])
  const handlemouse = () => {
    if (rightreg === "10") {
      setRightreg("600")
      setLeftreg("10")
    } else {
      setRightreg("10")
      setLeftreg("600")
    }
  }

  useEffect(() => {
    AlterwordAPI.get(`/objets/${params}`).then((res) => setObjets(res.data))
  }, [])
  const handleclose = () => {
    handlezoom()
  }

  const style1 = {
    width: `${rightreg}px`,
    backgroundImage: `url(http://localhost:4242${objets?.photo1})`,
  }
  const style2 = {
    width: `${leftreg}px`,
    backgroundImage: `url(http://localhost:4242${objets?.photo2})`,
  }
  return (
    <div className={`${isShowZoom ? "active" : ""} show`}>
      <div className="containerzoom">
        <div className="Zoomb" onMouseOver={handlemouse}>
          <div className="right" style={style1}></div>
          <div className="left" style={style2}></div>
        </div>
        <input
          type="image"
          className="close"
          onClick={handleclose}
          src="http://localhost:4242/assets/images/autre/fermeture.jpg"
        />
      </div>
    </div>
  )
}
export default Cardloupe
