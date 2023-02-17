const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ropaSchema = new Schema({
    nombre: String,
    tipo_prenda: String,
    talla: String,
    color: String
})

//Creamos el modelo
const Ropa = mongoose.model('ropa', ropaSchema, "ropa");

module.exports = Ropa;
