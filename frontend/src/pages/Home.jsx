import "./Home.css"
import Cube3D from "../components/Cube"

import Cardavis from "../components/Cardavis"

const Home = () => {
  return (
    <div className="containerhome">
      <div className="presentation">
        <p id="textpresentation">
          Alterword :Une boutique? Plus que cela, ce site permet de reunir
          joeurs de jeux de rôle cherchant à améliorer leur experience. Et des
          createurs qui vous proposent de decouvrir leur univers a travers leur
          collection.
        </p>
      </div>
      <div className="lecube">
        <p>Les objets les plus vendus</p>
        <Cube3D />
      </div>
      <div className="dernieravis">
        <p>Quelques avis</p>
        <Cardavis />
      </div>
    </div>
  )
}
export default Home
