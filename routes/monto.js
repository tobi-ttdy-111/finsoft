
// imports
const { Router } = require( 'express' );
const { getMontos,
        getMonto,
        postMonto,
        putMonto,
        deleteMonto } = require( '../controllers/monto' );
const { check } = require( 'express-validator' );
const { validarReq } = require( '../middlewares/validarReq' );
const { validarJWT } = require( '../middlewares/validarJWT' );
const { existeMonto } = require( '../helpers/validaciones' );


// router
const router = Router();


// get /montos
router.get( '/montos', [
    validarJWT,
    validarReq
], getMontos );


// get /monto
router.get( '/monto/:id', [
    validarJWT,
    check( 'id', 'No es un id válido' ).isMongoId(),
    check( 'id' ).custom( existeMonto ),
    validarReq
], getMonto );


// post /monto
router.post( '/monto', [
    validarJWT,
    check( 'valor', 'El valor debe ser un número' ).isNumeric(),
    check( 'fecha', 'La fecha no es válida' ).notEmpty(),
    validarReq
], postMonto );


// put /monto
router.put( '/monto/:id', [
    validarJWT,
    check( 'id', 'No es un id válido' ).isMongoId(),
    check( 'id' ).custom( existeMonto ),
    check( 'valor', 'El valor debe ser un número' ).isNumeric(),
    check( 'fecha', 'La fecha no es válida' ).notEmpty(),
    validarReq
], putMonto );


// delete /monto
router.delete( '/monto/:id', [
    validarJWT,
    check( 'id', 'No es un id válido' ).isMongoId(),
    check( 'id' ).custom( existeMonto ),
    validarReq
], deleteMonto );


// exports
module.exports = router;