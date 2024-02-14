import express from 'express';

import { getUsers, getUser, createUser, deleteUser } from './database.js'; //importo las funciones de database

const app = express();

app.use(express.json())
// app.use(express.urlencoded({ extended   : true }  ) ) otra forma de hacerlo

//aqui le digo que llame a la tabla de users, todos los items
app.get("/users", async (req, res) => {
    const users = await getUsers()
    res.send(users)
})

//aqui le digo que llame a un solo item de los usuarios
app.get("/users/:id", async (req, res) => {
    const id = req.params.id
    const user = await getUser(id)
    res.send(user)
})

//enviar notes al servidor post
app.post("/users", async (req, res) => {
    const { user_name, user_email, user_password, rol, is_active } = req.body
    const user = await createUser(user_name, user_email, user_password, rol, is_active)
    res.status(201).send(user)
})

//reventar elemento
app.delete("/users/:id", async (req, res) => {
    const id = req.params.id
    const user = await deleteUser(id)
    res.send(user)
})

//mensaje de que sea error
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke !!!');
});

//mensaje de que el servidor esta activo
//en esta parte podria externalizar e numero del puerto como una variable externa en el archivo .env
app.listen(8080, () => {
    console.log('Server is running on port 8080')
})


