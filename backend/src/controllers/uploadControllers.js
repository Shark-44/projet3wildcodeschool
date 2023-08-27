const fs = require("fs")

class uploadControllers {
  static upload = (req, res) => {
    console.log(req.file)
    console.log(req.body)
    const imgPath = "${Date.now()}_${req.file.originalname}"

    fs.rename(
      req.file.path,
      "public/assets/images/avatar/${imgPath}",
      (err) => {
        console.log(err)
        if (err) {
          res.status(400).send("Error while uploading")
        } else {
          res.status(200).json({
            imageUrl:
              "http://localhost:4242/public/assets/images/avatar/${imgPath}",
          })
        }
      }
    )
  }
}
module.exports = uploadControllers
