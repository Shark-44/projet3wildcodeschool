import { useEffect, useState } from "react"

function Coordmouse() {
  const [mousePos, setMousePos] = useState({})

  useEffect(() => {
    const handleMouseMove = (event) => {
      const xPercent =
        ((event.clientX - window.innerWidth / 2) / window.innerWidth) * 100
      const yPercent =
        ((event.clientY - window.innerHeight / 2) / window.innerHeight) * 100
      setMousePos({ x: xPercent, y: yPercent })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div>
      The mouse is at position{" "}
      <b>
        ({mousePos.x.toFixed(0)}%, {mousePos.y.toFixed(0)}%)
      </b>{" "}
      relative to the center.
    </div>
  )
}
export default Coordmouse
