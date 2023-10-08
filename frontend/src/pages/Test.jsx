import "./Test.css"
import MyDocument from "../PDF/MyDocument"
import { PDFViewer } from "@react-pdf/renderer"

function Test() {
  return (
    <div className="test">
      <PDFViewer width="1900px" height="1800px">
        <MyDocument />
      </PDFViewer>
    </div>
  )
}
export default Test
