const mongoose = require("mongoose")

const Banner = mongoose.model("Banner",{
    pictures:[]
})

module.exports = Banner