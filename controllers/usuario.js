
// imports
const { request, response } = require( 'express' );
const bcryptjs = require( 'bcryptjs' );
const Usuario = require( '../models/usuario' );


// postUsuario
const postUsuario = async( req = request, res = response ) => {

    const { correo, nombre, contraseña, usuarioEtiqueta, confirmarContraseña } = req.body;

    if ( contraseña != confirmarContraseña ) { return res.status( 401 ).json({ 'errors': [{ msg: 'Las contraseñas no coinciden' }] }) };
    const usuario = new Usuario({ correo, nombre, contraseña, usuarioEtiqueta });
    const salt = bcryptjs.genSaltSync( 10 );
    usuario.contraseña = bcryptjs.hashSync( contraseña, salt );

    await usuario.save();
    res.json({ usuario });

};


// exports
module.exports = {
    postUsuario
};