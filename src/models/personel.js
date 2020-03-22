const mongoose = require("mongoose")

const Personels = mongoose.model('Personels', {
    name:{},
    picture:{},
    function:{},
    message:{}
})
module.exports = Personels