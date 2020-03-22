const express = require("express")
require('./db/mongoose')
const cors = require("cors")
const path = require("path")
const townRouter = require("./routers/town")
const app = express()
const port = process.env.PORT || 3000
const firebase = require('firebase-admin');
const serviceAccount = require('../sejs2020-firebase-adminsdk.json')
app.use(cors())
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://sejs2020.firebaseio.com",
  apiKey: "AIzaSyBPQWtx0enqjpji-_S9sMpCXTHkvAUkekc",
  authDomain: "sejs2020.firebaseapp.com",
  projectId: "sejs2020",
  storageBucket: "sejs2020.appspot.com",
  messagingSenderId: "1028657439658",
  appId: "1:1028657439658:web:1437dadb98987e414d41d3",
  measurementId: "G-E1RFJLGP2L"
});
const imagesPath = path.join(__dirname, '../images')
console.log(__dirname);
console.log(imagesPath);

app.use('/images',express.static(imagesPath))

app.use(express.json())
app.use(townRouter)

app.listen(port, () => {
  console.log('Server is up on port ' + port);

})
