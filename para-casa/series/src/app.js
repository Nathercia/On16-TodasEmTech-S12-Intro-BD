const express = require('express')
const index = require('./routes/index.js')
const series = require('./routes/seriesRoutes.js')
const db = require('./config/dbConnect.js')

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('Conexão com o banco realizada com sucesso')
});

const app = express()

app.use(express.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*") 
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index);
app.use('/series', series)

module.exports = app;






