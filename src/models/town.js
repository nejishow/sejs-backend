const mongoose = require('mongoose')
const firebase = require('firebase-admin');

const townSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },
    cityImage: {
        type: String,
        required: true
    },
    map: {
        type: String,
        required: true
    }
})

townSchema.methods.sendToFirebase = async function (file) {
    try {
        await firebase.storage().ref().put(file).then(function (snapshot) {
            res.status(201).status("GOOOOD!")
        });
    } catch (error) {
return res.status(500).send(error)        
    }
}
const Town = mongoose.model('Town', townSchema)

module.exports = Town