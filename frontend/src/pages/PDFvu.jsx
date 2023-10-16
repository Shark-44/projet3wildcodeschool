import "./PDFvu.css"
import MyDocument from "../PDF/MyDocument"
import { PDFViewer } from "@react-pdf/renderer"

function PDFvu() {
  return (
    <div className="PDFvu">
      <PDFViewer width="1900px" height="1800px">
        <MyDocument />
      </PDFViewer>
    </div>
  )
}
export default PDFvu
