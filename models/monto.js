
// imports
const { Schema, model } = require( 'mongoose' );


// schemaMonto
const schemaMonto = new Schema({


    valor: {
        type: Number,
        required: [ true, 'El monto es requerido' ]
    },


    fecha: {
        type: String,
        required: [ true, 'La fecha es requerida' ]
    },


    descripcion: {
        type: String
    },


    usuario: {
        type: String,
        required: [ true, 'El usuario es requerido' ]
    },


    estado: {
        type: Boolean,
        default: true
    },


});


// exports
module.exports = model( 'monto', schemaMonto );