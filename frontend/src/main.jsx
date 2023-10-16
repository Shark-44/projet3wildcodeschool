import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { CurrentUserContextProvider } from "./contexts/authContexts"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <CurrentUserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CurrentUserContextProvider>
  </React.StrictMode>
)
