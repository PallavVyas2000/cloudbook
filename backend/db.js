const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://pallavvyas:A8uqN03NFDP9jpL4@cloudbook.gwwjl.mongodb.net/cloudbook?retryWrites=true&w=majority"
const connectToMongo = () => {
mongoose.connect(mongoURI, ()=>{
    console.log("Connected to mongoose")
},{useNewUrlParser:true},{useUnifiedTopology:true})
mongoose.connection.on('connected', ()=>{
    console.log("Connected to MongoDB")
})
mongoose.connection.on('error', (err)=>{
    console.log('error', err)
})
}

module.exports = connectToMongo;