//Importamos el enrutador desde express
const { Router } = require('express');

//Importamos las funciones dentro del archivo 'notes_controller.js'
const { getUsers, 
    createUser, 
    deleteUser} = require('../controllers/users_controller');

//Ejecutamos la funcion y creamos un objeto 'router'
const router = Router();

//Creamos la ruta principal '/'
router.route('/')
    //Metodo 'get'
    //.get((req, res) => res.send('Ruta a usuarios'));
    .get(getUsers)
    //Metodo 'POST'
    .post(createUser);

    
//Creamos la ruta 'id'
router.route('/:id')
    //Metodo 'DELETE'
    .delete(deleteUser);

//Exportamos el modulo
module.exports = router;