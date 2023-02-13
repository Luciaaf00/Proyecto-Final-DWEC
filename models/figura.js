const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const figuraSchema = new Schema({
    nombre: String,
    categoria: String,
    fabricante: String,
    precio: String,
    descripcion: String
})

//Creamos el modelo
const Figura = mongoose.model('figura', figuraSchema, "figura");

module.exports = Figura;
