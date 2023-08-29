const fs = require("fs")

class UploadController {
  static upload = (req, res) => {
    fs.rename(
      req.file.path,
      `public/assets/images/avatar/${req.file.originalname}`,
      (err) => {
        if (err) {
          res.status(400).send("Error while uploading")
        } else {
          res.status(203).json({
            msg: "Upload success",
            url: `http://localhost:5050/public/assets/images/avatar/${req.file.originalname}`,
          })
        }
      }
    )
  }
}

module.exports = UploadController
