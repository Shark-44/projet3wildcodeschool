import { useState } from "react"
import "./Test.css"

function Test() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleBox = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`container ${isOpen ? "open" : ""}`}>
      <div className="boxA">Box</div>
      <div className="boxB">Box</div>
      <button onClick={toggleBox}>Toggle Box</button>
    </div>
  )
}

export default Test
