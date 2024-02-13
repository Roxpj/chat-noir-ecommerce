import express from 'express';

import { getNotes, getNote, createNote } from './database.js'; //importo las funciones de database

const app = express();

app.use(express.json())
// app.use(express.urlencoded({ extended   : true }  ) ) otra forma de hacerlo

//aqui le digo que llame a la tabla de notes, todos los items
app.get("/notes", async (req, res) => {
    const notes = await getNotes()
    res.send(notes)
})

//aqui le digo que llame a un solo item
app.get("/notes/:id", async (req, res) => {
    const id = req.params.id
    const note = await getNote(id)
    res.send(note)
})

//enviar notes al servidor post
app.post("/notes", async (req, res) => {
    const { title, contents } = req.body
    const note = await createNote(title, contents)
    res.status(201).send(note)
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


