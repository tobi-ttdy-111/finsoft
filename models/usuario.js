
// imports
const { Schema, model } = require( 'mongoose' );


// schemaUsuario
const schemaUsuario = new Schema({


    correo: {
        type: String,
        required: [ true, 'El correo es requerido' ],
        unique: true
    },


    nombre: {
        type: String,
        required: [ true, 'El nombre es requerido' ],
    },


    contraseña: {
        type: String,
        required: [ true, 'La contraseña es requerido' ],
    },


    usuarioEtiqueta: {
        type: String,
        required: [ true, 'El usuario es requerido' ]
    },


    estado: {
        type: Boolean,
        default: true
    },


});


schemaUsuario.methods.toJSON = function() {

    const { __v, _id, contraseña, ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;

};


// exports
module.exports = model( 'usuario', schemaUsuario );