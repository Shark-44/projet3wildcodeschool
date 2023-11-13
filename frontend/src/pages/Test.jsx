import "./Test.css"
import React, { useEffect, useState } from "react"

function Test() {
  const [mousePos, setMousePos] = useState({})
  const [stylelang, setStylelang] = useState("hidden")
  const API_URL = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    const handleMouseMove = (event) => {
      const yAdjusted = (event.clientY - window.innerHeight / 2) * (40 / 50)
      const clampedY = Math.min(Math.max(yAdjusted, -50), 50)

      const xAdjusted = (event.clientX - window.innerWidth / 2) * (40 / 50)
      const clampedX = Math.min(Math.max(xAdjusted, -50), 50)

      setMousePos({ x: clampedX, y: clampedY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const eyeStyle = {
    top: `${((mousePos.y + 50) / 100) * 40 + 5}px`,
  }

  const centerEyeStyle1 = {
    left: `${((mousePos.x + 50) / 100) * 40 + 60}px`,
  }

  const centerEyeStyle2 = {
    left: `${((mousePos.x + 50) / 100) * 40 + 260}px`,
  }
  const toggle = () => {
    setStylelang((prevStylelang) =>
      prevStylelang === "visible" ? "hidden" : "visible"
    )
  }

  const visible = {
    visibility: stylelang,
  }
  return (
    <>
      <div className="containerTest">
        <h1>MERCI DE M'AVOIR ECOUTE</h1>
        <div className="head">
          <div className="eyes">
            <div className="eye left">
              <div
                className="centereye"
                style={Object.assign({}, eyeStyle, centerEyeStyle1)}
              ></div>
            </div>
            <div className="eye right">
              <div
                className="centereye"
                style={Object.assign({}, eyeStyle, centerEyeStyle2)}
              ></div>
            </div>
          </div>
          <div className="mouth"></div>
          <div className="langue" style={visible}>
            <img
              className="langueimg"
              src={API_URL + "/assets/images/autre/langue.png"}
              alt=""
            />
          </div>
        </div>
        <div className="switchzone">
          <label className="switch">
            <input type="checkbox" onChange={toggle} />
            <span></span>
          </label>
        </div>
      </div>
    </>
  )
}

export default Test
