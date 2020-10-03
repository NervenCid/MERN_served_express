//Este archivo contiene las funciones relacionadas con 'notes.js'

//Importamos el modelo de datos desde 'models/Note.js'
const Note = require('../models/Note');

//Almacenamos en un objeto todas las funciones relacionadas con 'notes'
const notesCtrl = {};

//Con la notacion a continuacion relacionamos las funciones con el objeto 'notesCtrl'

//Funcion get
//notesCtrl.getNotes = (req, res) => res.json({message : []});
notesCtrl.getNotes = async (req, res) => { 
    //Hacemos una consulta en todos los datos de la coleccion 'Note'
    const notes = await Note.find();
    //Devolvemos el resultado de la consulta
    res.json(notes); 
};

//Funcion crear
//notesCtrl.createNote = (req, res) => res.json({message : 'Nota Creada'});
notesCtrl.createNote = async (req, res) => {
    //Recibimos desde el cliente
    const {title, content, date, author} = req.body;
    //Creamos una nueva nota con los datos recibidos
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    });
    console.log(newNote);
    //Guardamos en la base datos
    await newNote.save();
    //Enviamos una respuesta al cliente
    res.json({ message: 'Nota Creada' });    
};

//Funcion para obtener una sola nota 
notesCtrl.getNote = async (req, res) => {
    //Buscamos por 'id' una nota y la almacenamos en una constante
    const note = await Note.findById(req.params.id);
    console.log(note);
    //res.json({ title: 'GET - Nota individual'});
    res.json(note);
};

//Funcion para actualizar una nota
notesCtrl.updateNote = async (req, res) => {
    //Obtenemos los datos del 'req.body' que reemplazaran
    //los datos presentes en la base de datos
    const{title, 
        content, 
        author,
        date} = req.body;
    //Buscamos por 'id' y actualizamos
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        content,
        author,   
        date
    });
    res.json({message: 'Nota Actualizada'});
};

//Funcion para borrar una nota
notesCtrl.deleteNote = async (req, res) => {
    //Buscamos por  'id' y eliminamos
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Nota Eliminada'})
};

//Exportamos el modulo
module.exports = notesCtrl;