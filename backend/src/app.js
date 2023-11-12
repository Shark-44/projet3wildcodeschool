// import some node modules for later

const fs = require("node:fs")
const path = require("node:path")

const helmet = require("helmet")

// create express app

const express = require("express")

const app = express()

// use some application-level middlewares

app.use(express.json())
app.use(helmet.xssFilter())
app.use(helmet.frameguard({ action: "deny" }))

const cors = require("cors")
const cookieParser = require("cookie-parser")

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
)
app.use(cookieParser())
// import and mount the API routes

const router = require("./router")

app.use(router)

// serve the `backend/public` folder for public resources

app.use(express.static(path.join(__dirname, "../public")))

// serve REACT APP

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
)

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources

  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")))

  // redirect all requests to the REACT index file

  app.get("*", (req, res) => {
    if (req.path.includes("public")) {
      res.sendFile(path.join(__dirname, "..", req.path))
    } else {
      res.sendFile(reactIndexFile)
    }
  })
}

// ready to export

module.exports = app
