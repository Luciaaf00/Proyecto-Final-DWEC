const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
    titulo: String,
    autor: String,
    numPagina: String,
    editorial: String,
    categoria: String,
    tipoTapa: String,
    tamanio: String,
    precio: String
})

//Creamos el modelo
const Manga = mongoose.model('manga', mangaSchema, "manga");

module.exports = Manga;
