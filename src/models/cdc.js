const mongoose = require ("mongoose")

const CDC = mongoose.model('CDC', {
    name: {},
    coord:{},
    description:{},
    activity:[],
    infrastructure:[],
    communiqué:[],
    pictures:[]
})

module.exports = CDC