const express = require('express');
const router = express.Router();
const Manga = require('../models/juego_mesa');

router.get('/', async (req, res) => {
    try {
        const arrayJuego_mesaDB = await Manga.find();
        console.log(arrayJuego_mesaDB);
        res.render("juego_mesa/juego_mesa", { 
            arrayJuego_mesa: arrayJuego_mesaDB
        })
    } catch (error) {
        console.error(error)
    }
})
//create
router.get('/crear', (req, res) => {
    res.render('juego_mesa/crear');
 })
   router.post('/', async (req, res) => {
       const body = req.body
       
       console.log(body)
       try {
           const juego_mesaDB = new Manga(body)
           await juego_mesaDB.save()
           res.redirect('/juego_mesa')
       } catch (error) {
           console.log('error', error)
       }
   })
 //view
 router.get('/:id', async(req, res) => {
     const id = req.params.id
     try {
         const juego_mesaDB = await Manga.findOne({ _id: id })
         console.log(juego_mesaDB)
         res.render('juego_mesa/detalle', {
             juego_mesa: juego_mesaDB,
             error: false
         })
     } catch (error) {
         console.log('Se ha producido un error', error)
         res.render('juego_mesa/detalle', {
             error: true,
             mensaje: 'Manga no encontrado!'
         })
     }
 })
 //delete
 router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {
        const juego_mesaDB = await Manga.findByIdAndDelete({ _id: id });
        console.log(juego_mesaDB)
        if (!juego_mesaDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar Manga.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Manga eliminado.'
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
        const juego_mesaDB = await Manga.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(juego_mesaDB)
        res.json({
            estado: true,
            mensaje: 'Manga editado'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar Manga'
        })
    }
})
module.exports = router;