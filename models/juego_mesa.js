const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const juegoMesaSchema = new Schema({
    nombre: String,
    categoria: String,
    descripcion: String,
    precio: String,
    fabricante: String,
    numero_jugadores:String
})

//Creamos el modelo
const Juego_mesa = mongoose.model('juego_mesa', juegoMesaSchema, "figurjuego_mesaa");

module.exports = Juego_mesa;
