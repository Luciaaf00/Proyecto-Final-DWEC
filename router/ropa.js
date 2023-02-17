const express = require('express');
const router = express.Router();
const Ropa = require('../models/ropa');

router.get('/', async (req, res) => {
    try {
        const arrayRopaDB = await Ropa.find();
        console.log(arrayRopaDB);
        res.render("ropa/ropa", { 
            arrayRopa: arrayRopaDB
        })
    } catch (error) {
        console.error(error)
    }
})
//create
router.get('/crear', (req, res) => {
    res.render('ropa/crear');
 })
router.post('/', async (req, res) => {
    const body = req.body
    
    console.log(body)
    try {
        const ropaDB = new Ropa(body)
        await ropaDB.save()
        res.redirect('/ropa')
    } catch (error) {
        console.log('error', error)
    }
})
 //view
 router.get('/:id', async(req, res) => {
     const id = req.params.id
     try {
         const ropaDB = await Ropa.findOne({ _id: id })
         console.log(ropaDB)
         res.render('ropa/detalle', {
             ropa: ropaDB,
             error: false
         })
     } catch (error) {
         console.log('Se ha producido un error', error)
         res.render('ropa/detalle', {
             error: true,
             mensaje: 'Ropa no encontrado!'
         })
     }
 })
 //delete
 router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {
        const ropaDB = await Ropa.findByIdAndDelete({ _id: id });
        console.log(ropaDB)
        if (!ropaDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar Ropa.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Ropa eliminado.'
            })
        } 
    } catch (error) {
        console.log(error)
    }
})
//update
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log('body', body)
    try {
        const ropaDB = await Ropa.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(ropaDB)
        res.json({
            estado: true,
            mensaje: 'Ropa editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar Ropa'
        })
    }
})
module.exports = router;