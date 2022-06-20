
// imports
const { Router } = require( 'express' );
const { postUsuario } = require( '../controllers/usuario' );
const { check } = require( 'express-validator' );
const { validarReq } = require('../middlewares/validarReq');
const { existeCorreo } = require( '../helpers/validaciones' );


// router
const router = Router();


// post /usuario
router.post( '/usuario', [
    check( 'correo', 'No es un correo válido' ).isEmail(),
    check( 'correo' ).custom( existeCorreo ),
    check( 'nombre', 'No es un nombre válido' ).not().isEmpty(),
    check( 'contraseña', 'Contraseña debe ser de 6 o más carácteres' ).isLength({ min: 6 }),
    check( 'confirmarContraseña', 'La confirmación de la contraseña es obligatoria' ).isLength({ min: 6 }),
    check( 'usuarioEtiqueta', 'El usuario no es válido' ).isLength({ min: 6 }),
    validarReq
], postUsuario );


// exports
module.exports = router;