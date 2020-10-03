//Este archivo contiene las funciones relacionadas con 'users.js'

//Almacenamos en un objeto todas las funciones relacionadas con 'users'
const userCtrl = {};

//Importamos el modelos de datos desde 'models/Note.js'
const User = require('../models/User');

//Metodo get
//userCtrl.getUsers = (req, res) => res.json({ message: 'GET - Usuarios' });
userCtrl.getUsers = async (req, res) => {
    //Obtenemos los usuarios de la base de datos
    const users = await User.find();
    res.json(users);
};

//Metodo crear
//userCtrl.createUser = (req, res) => res.json({ message: 'POST - Usuario creado' });
userCtrl.createUser = async(req, res) => {
    //Recibimos los datos desde el cliente con 'req.body' y creamos un objeto 'newUser'
    const {username} = req.body;
    const newUser = new User({username});
    //Guardamos en la base de datos
    await newUser.save();
    //Mostramos en una respuesta del servidor
    res.json({ message: 'POST - Usuario creado' });
};

//Metodo para borrar un usuario
userCtrl.deleteUser = async(req, res) => {
    //Buscamos por 'id' y eliminamos
    await User.findByIdAndDelete(req.params.id);
    console.log(User);
    //Mostramos en la respuesta del servidor
    res.json({ message: 'DELETE - Usuario eliminado' });
};

//Exportamos el modulo
module.exports = userCtrl;