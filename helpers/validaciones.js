
// imports
const Usuario = require( '../models/usuario' );
const Monto = require( '../models/monto' );


// existeCorreo
const existeCorreo = async( correo ) => {

    const existe = await Usuario.findOne({ correo });
    if ( existe ) throw new Error( `${ correo }, ya pertenece a una cuenta` );

};


// existeId
const existeId = async( id ) => {

    const existe = await Usuario.findById( id );
    if ( !existe ) throw new Error( `Ocurrio un error al realizar esta acción` );

};


// existeMonto
const existeMonto = async( id ) => {

    const existe = await Monto.findById( id );
    if ( !existe ) throw new Error( `Ocurrio un error al realizar esta acción` );

};


// exports
module.exports = {
    existeCorreo,
    existeId,
    existeMonto
};



