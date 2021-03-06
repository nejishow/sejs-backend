const express = require("express")
require('./db/mongoose')
const cors = require("cors")
const path = require("path")
const townRouter = require("./routers/town")
const app = express()
const port = process.env.PORT || 3001
const firebase = require('firebase-admin');
const serviceAccount = require('../sejs2020-firebase-adminsdk.json')
app.use(cors())

const imagesPath = path.join(__dirname, '../images')
console.log(__dirname);
console.log(imagesPath);

app.use('/images',express.static(imagesPath))

app.use(express.json())
app.use(townRouter)

app.listen(port, () => {
  console.log('Server is up on port ' + port);

})
