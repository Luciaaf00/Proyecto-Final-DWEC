//cambiar a manga
const express = require('express');
const router = express.Router();
const Manga = require('../models/manga');

router.get('/', async (req, res) => {
    try {
        const arrayMangaDB = await Manga.find();
        console.log(arrayMangaDB);
        res.render("manga", { 
            arrayManga: arrayMangaDB
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
        const mangaDB = new Manga(body)
        await mangaDB.save()
        res.redirect('/manga')
    } catch (error) {
        console.log('error', error)
    }
})
 //view
 router.get('/:id', async(req, res) => {
     const id = req.params.id
     try {
         const mangaDB = await Manga.findOne({ _id: id })
         console.log(mangaDB)
         res.render('detalle', {
             manga: mangaDB,
             error: false
         })
     } catch (error) {
         console.log('Se ha producido un error', error)
         res.render('detalle', {
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
        const mangaDB = await Manga.findByIdAndDelete({ _id: id });
        console.log(mangaDB)
        if (!mangaDB) {
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
        const mangaDB = await Manga.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(mangaDB)
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
