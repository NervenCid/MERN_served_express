//Importamos express
const express=require('express');

//Modulo para manejar rutas del sistema
const path = require("path");

//Importamos 'cors'
const cors = require('cors');

//Ejecutamos 'express' y creamos la aplicacion
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 4000); //Configuramos el puerto

//Middlewares: Son funciones que se ejecutan antes de las 'routes'
app.use(cors()); //Permitimos la comunicacion estre dos servidores en este caso con el servidor de react
app.use(express.json()); //Habilitamos que el servidor entienda formato 'json'
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "build"))); //Buscamos en la carpeta 'frontend' (afuera) la carpeta 'build' generada por 'react'

//La aplicacion de 'react' parece servirse automaticamente verificar que exista la carpeta 'build' primero, si no generarla

//Rutas o 'routes', en este caso usamos un 'api'
app.use('/api/notes', require('./routes/notes')); //Ruta 'notes'
app.use('/api/users', require('./routes/users')); //Ruta 'users'

//Exportamos el modulo
module.exports=app;