const connectToMongo = require('./db')
const express = require('express')
const path = require("path")

connectToMongo();
var app = express()
const port = process.env.PORT || 5000;
var cors = require('cors')

app.use(cors())

app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function(_, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"),
  function(err) {
    if(err) {
      res.status(500).send(err);
    }
  });
});
app.listen(port, () => {
  console.log(`Clodbook server listening on port ${port}`)
})