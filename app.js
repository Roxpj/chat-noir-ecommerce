import express from 'express';
import {getUsers, getUser, createUser, deleteUser,         modifyUser} from './database.js'; //importo las funciones de database
import {getProducts, getProduct, deleteProduct, createProduct, modifyProduct} from './database.js';

const app = express();
app.use(express.json())

//aqui le digo que llame a la tabla de users, "get" de todos los items
app.get("/users", async (req, res) => {
    const users = await getUsers()
    res.send(users)
})
//aqui le digo que llame a un solo item "get" de los usuarios
app.get("/users/:id", async (req, res) => {
    const id = req.params.id
    const user = await getUser(id)
    res.send(user)
})
//crear usuarios al servidor "post"
app.post("/users", async (req, res) => {
    const { user_name, user_email, user_password, rol, is_active } = req.body
    const user = await createUser(user_name, user_email, user_password, rol, is_active)
    res.status(201).send(user)
})
//eliminar elemento de la tabla
app.delete("/users/:id", async (req, res) => {
    const id = req.params.id
    const user = await deleteUser(id)
    res.send(user)
})
//actualizar datos de la tabla
app.patch("/users/:id", async (req, res) => {
    const id = req.params.id
    const { user_name, user_email, user_password, is_active } = req.body
    const user = await modifyUser(user_name, user_email, user_password, is_active, id)
    res.send(user)
})

//
//
//MECANICA PARA PRODUCTOS
//
//
app.get("/products", async (req, res) => {
    const products = await getProducts()
    res.send(products)
})
//aqui le digo que llame a un solo item "get" de los usuarios
app.get("/products/:id", async (req, res) => {
    const id = req.params.id
    const product = await getProduct(id)
    res.send(product)
})
//crear usuarios al servidor "post"
app.post("/products", async (req, res) => {
    const { product_name, product_description, product_category, product_price, product_stock, creation_date, state } = req.body
    const product = await createProduct(product_name, product_description, product_category, product_price, product_stock, creation_date, state)
    res.status(201).send(product)
})
//eliminar elemento de la tabla
app.delete("/products/:id", async (req, res) => {
    const id = req.params.id
    const product = await deleteProduct(id)
    res.send(product)
})
//actualizar datos de la tabla
app.patch("/products/:id", async (req, res) => {
    const id = req.params.id
    const { product_name, product_description, product_category, product_price, product_stock, state} = req.body
    const products = await modifyProduct(product_name, product_description, product_category, product_price, product_stock, state, id)
    res.send(products)
})


//aqui le digo que llame a la tabla de users, "get" de todos los items
app.get("/users", async (req, res) => {
    const users = await getUsers()
    res.send(users)
})
//aqui le digo que llame a un solo item "get" de los usuarios
app.get("/users/:id", async (req, res) => {
    const id = req.params.id
    const user = await getUser(id)
    res.send(user)
})
//crear usuarios al servidor "post"
app.post("/users", async (req, res) => {
    const { user_name, user_email, user_password, rol, is_active } = req.body
    const user = await createUser(user_name, user_email, user_password, rol, is_active)
    res.status(201).send(user)
})
//eliminar elemento de la tabla
app.delete("/users/:id", async (req, res) => {
    const id = req.params.id
    const user = await deleteUser(id)
    res.send(user)
})
//actualizar datos de la tabla
app.patch("/users/:id", async (req, res) => {
    const id = req.params.id
    const { user_name, user_email, user_password, is_active } = req.body
    const user = await modifyUser(user_name, user_email, user_password, is_active, id)
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


