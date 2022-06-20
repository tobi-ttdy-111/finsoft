
// imports
const { request, response } = require( 'express' );
const Usuario = require( '../models/usuario' );
const bcryptjs = require( 'bcryptjs' );
const generarJWT = require( '../helpers/generarToken' );


// postAuth
const postAuth = async( req = request, res = response ) => {

    const { correo, contraseña } = req.body;

    try {
        const usuario = await Usuario.findOne({ correo });
        if ( !usuario ) return res.status( 400 ).json({ 'errors': [{ msg: 'usuario / contraseña incorrectos' }] });
        if ( !usuario.estado ) return res.status( 400 ).json({ 'errors': [{ msg: 'usuario / contraseña incorrectos' }] });
        const match = bcryptjs.compareSync( contraseña, usuario.contraseña );
        if ( !match ) return res.status( 400 ).json({ 'errors': [{ msg: 'usuario / contraseña incorrectos' }] });
        const token = await generarJWT( usuario.id );
        res.json({ usuario, token });
    } catch ( err ) {
        res.status( 500 ).json({ 'errors': [{ msg: 'Hable con el administrador + 55-5105-6948' }] });
    };

};


// exports
module.exports = { postAuth };