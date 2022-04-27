const connectToMongo = require('./db')
const express = require('express')

connectToMongo();
var app = express()
const port = process.env.PORT || 5000;
var cors = require('cors')

app.use(cors())

app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Clodbook server listening on port ${port}`)
})