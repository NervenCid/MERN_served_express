//Importamos el controlador de la base de datos (MONGODB)
//Donde 'Schema' es lo que se desea guardar de los datos
//y como guardalos
//Y 'model' es la forma en que mongoDB guardara esos datos
const {Schema, model} = require('mongoose');

//Creamos un nuevo 'Schema'
const noteSchema = new Schema({
    title: String,
    //Hacemos que sea obligatorio el tipo 'String'
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
} ,{
    timestamps: true
});

//Creamos un modelo con el 'Schema' y lo exportamos
module.exports = model('Note', noteSchema); 