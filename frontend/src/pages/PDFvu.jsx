import "./PDFvu.css"
import MyDocument from "../PDF/MyDocument"
import { PDFViewer } from "@react-pdf/renderer"

function PDFvu() {
  return (
    <div className="PDFvu">
      <PDFViewer width="100%" height="1800px" defaultScale={1.5}>
        <MyDocument />
      </PDFViewer>
    </div>
  )
}
export default PDFvu
