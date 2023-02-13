const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



const port = 4000;

//Motor de plantillas 
app.set("views", __dirname + "/views");
app.set("view engine", "ejs")


//Middleware
app.use(express.static(__dirname + '/public'));

//Llamadas a las rutas
app.use('/', require('./router/rutas'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})