const express = require('express');
const router = express.Router();
const Figura = require('../models/figura');

router.get('/', async (req, res) => {
    try {
        const arrayFiguraDB = await Figura.find();
        console.log(arrayFiguraDB);
        res.render("figura", { 
            arrayFigura: arrayFiguraDB
        })
    } catch (error) {
        console.error(error)
    }
})
//create
router.get('/crear', (req, res) => {
    res.render('crear');
 })
   router.post('/', async (req, res) => {
       const body = req.body
       
       console.log(body)
       try {
           const figuraDB = new Figura(body)
           await figuraDB.save()
           res.redirect('/figura')
       } catch (error) {
           console.log('error', error)
       }
   })
 //view
 router.get('/:id', async(req, res) => {
     const id = req.params.id
     try {
         const figuraDB = await Figura.findOne({ _id: id })
         console.log(figuraDB)
         res.render('detalle', {
             figura: figuraDB,
             error: false
         })
     } catch (error) {
         console.log('Se ha producido un error', error)
         res.render('detalle', {
             error: true,
             mensaje: 'Figura no encontrado!'
         })
     }
 })
 //delete
 router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {
        const figuraDB = await Figura.findByIdAndDelete({ _id: id });
        console.log(figuraDB)
        if (!figuraDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar Figura.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Figura eliminado.'
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
        const figuraDB = await Figura.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(figuraDB)
        res.json({
            estado: true,
            mensaje: 'Figura editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar Figura'
        })
    }
})
module.exports = router;