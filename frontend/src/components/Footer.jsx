import "./Footer.css"
const API_URL = import.meta.env.VITE_BACKEND_URL
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>By Joanny BERNARDEAU</p>
        <a
          className="lien"
          href="https://github.com/Shark-44/projet3wildcodeschool"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="imgfooter"
            src={API_URL + "/assets/images/autre/github.png"}
            alt=""
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
