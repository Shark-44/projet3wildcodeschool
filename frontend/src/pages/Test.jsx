import { useState } from "react"

function Test() {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h4>Mon toggleModal</h4>
            </div>
            <button onClick={toggleModal} className="close-modal">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default Test
