const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
}).then(()=>{
console.log("mongoose connected successfuly");

}).catch(()=>{
    console.log("mongoose not connected");

})
