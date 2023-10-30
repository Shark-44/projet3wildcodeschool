import { useState } from "react"
import { useCookies } from "react-cookie"
const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookieAccepted"])
  const [showBanner, setShowBanner] = useState(!cookies.cookieAccepted)
  const giveCookieConsent = () => {
    setCookie("cookieAccepted", true, { path: "/" })
    setShowBanner(false)
  }
  return (
    <div>
      {showBanner && (
        <div className="cookie-consent">
          <p>
            Nous utilisons des cookies pour améliorer votre expérience
            utilisateur.
            <br />
            En utilisant notre site Web, vous acceptez notre utilisation des
            cookies.
            <a
              href={
                "https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/que-dit-la-loi"
              }
            >
              En savoir plus.
            </a>
          </p>
          <button onClick={giveCookieConsent}>Accept</button>
        </div>
      )}
    </div>
  )
}

export default CookieConsent
