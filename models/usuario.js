const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: String,
    correo: String,
    pass:String,
    direccion:String,
    telefono: String
})

//Creamos el modelo
const Usuario = mongoose.model('usuario', usuarioSchema, "usuario");

module.exports = Usuario;
