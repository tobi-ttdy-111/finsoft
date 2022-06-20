
// imports
const { request, response } = require( 'express' );
const Monto = require( '../models/monto' );


// getMontos
const getMontos = async( req = request, res = response ) => {

    const montos = await Monto.find({ estado: true, usuario: req.usuarioAuth._id })

    res.json({ montos });

};


// getMonto
const getMonto = async( req = request, res = response ) => {

    const { id } = req.params;

    const monto = await Monto.findById( id );
    res.json({ monto });

};


// postMonto
const postMonto = async( req = request, res = response ) => {

    const { valor, fecha, descripcion } = req.body;

    const monto = new Monto({ valor, fecha, usuario: req.usuarioAuth._id, descripcion });

    await monto.save();
    res.json({ monto });

};


// putMonto
const putMonto = async( req = request, res = response ) => {

    const { valor, fecha, descripcion } = req.body;
    const { id } = req.params;

    const monto = await Monto.findByIdAndUpdate( id, { valor, fecha, descripcion } );
    res.json({ monto });

};


// deleteMonto
const deleteMonto = async( req = request, res = response ) => {

    const { id } = req.params;

    const monto = await Monto.findByIdAndUpdate( id, { estado: false } );
    res.json({ monto });

};


// exports
module.exports = {
    getMontos,
    getMonto,
    postMonto,
    putMonto,
    deleteMonto
};