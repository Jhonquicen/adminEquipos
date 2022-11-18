const mongoose = require("mongoose");

//Información que va dentro de colección
const EsquemaEquipo = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Nombre obligatorio"],
        minLength: [3, "Nombre debe tener al menos 3 caracteres"]
    },

    equipos: {
        type: String,
        required: [true, "equipo obligatorio"],
        minLength: [3, "el equipo debe tener al menos 3 caracteres"]
    },

    

    accion: {
        type: Array,
        default: ["undecided","undecided","undecided"],
        required: [true, "el estado es obligatorio"]
    },

    // estado: {
    //     type: Array,
    //     required: [true, "Estados obligatorios"],
    //     default: ["undecided","undecided","undecided"]
    // }   otra forma de hacer la accion

}, {timestamps: true, versionKey:false})




const Equipo = mongoose.model("equipos", EsquemaEquipo);
module.exports = Equipo;