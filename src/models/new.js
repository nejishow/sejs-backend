const mongoose = require("mongoose")

const News = mongoose.model('News',{
    title:{},
    content:{},
    picture:{},
    media:[]
})

module.exports = News