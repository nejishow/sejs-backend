const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/sejs-api', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}).then(()=>{
console.log("mongoose connected successfuly");

}).catch(()=>{
    console.log("mongoose not connected");

})
