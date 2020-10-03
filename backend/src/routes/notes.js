//Importamos el enrutador desde express
const {Router} = require('express');

//Ejecutamos la funcion y creamos un objeto 'router'
const router = Router();

//Importamos las funciones dentro del archivo 'notes_controller.js'
const {getNotes,
     createNote, 
     getNote, 
     updateNote, 
     deleteNote} = require('../controllers/notes_controller');

//Creamos la ruta principal '/'
router.route('/')
    //Metodo 'get'
    //.get((req, res)=>res.send('GET - Ruta a notas'))
    //.get((req, res) => res.json({message : 'GET Request'}))
    //.get((req, res) => res.json([]))
    .get(getNotes)
    //Metodo 'POST'
    //.post((req, res) => res.send('POST - Ruta a notas'));
    //.post((req, res) => res.json({message: 'POST Request'}))
    .post(createNote);

//Ruta 'id'
router.route('/:id')
    //Metodo 'get'
    //.get((req, res) => res.json({ title: 'GET Algo' }))
    .get(getNote)
    //Metodo 'put'
    //.put((req, res) => res.json({message : 'PUT - Nota actualizada'}))
    .put(updateNote)
    //Metodo 'delete'
    //.delete((req, res) => res.json({ message: 'Nota eliminada' }))
    .delete(deleteNote);

//Exportamos el modulo
module.exports = router;