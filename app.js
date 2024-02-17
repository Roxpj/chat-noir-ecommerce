import express from 'express';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productsRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import session from 'express-session';
import authenticateUser from './controllers/authController.js';


const app = express();
app.use(express.json())

app.use("/users/", userRouter);
app.use("/products/", productRouter);
app.use("/categories/", categoryRouter);
app.use(express.urlencoded({ extended: false }));

//CONFIGURACION DE EXPRESS-SESSION
app.use(session(
    {
        secret: 'secreto',
        resave: false,
        saveUninitialized: false
    }
));
//--------------------------------
// AREA EN REVISION
//--------------------------------
/*
app.post('/login', async (req, res) => {
    try {
      const user = await authenticateUser(req.body.user_name, req.body.user_password);
      if (user) {
        req.session.user = user;
        res.redirect('/');
      } else {
        res.redirect('/login');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Error interno del servidor');
    }
  });
*/
app.get('/login', async (req, res) => {
    try {
      const user = await authenticateUser(req.body.user_name, req.body.user_password);
      if (user) {
        req.session.user = user;
        res.redirect('/perfil');
      } else {
        res.status(401).send('Credenciales inválidas');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Error interno del servidor');
    }
  });
//--------------------------------
// AREA EN REVISION
//--------------------------------
/*
app.get('/perfil', (req, res) => {
    if(req.session.user){
        res.send('bienvenido' + req.session.user.user_name);
    }else{
        res.status(401).send('accesso no autorizado')
    }
})
*/
app.get('/perfil', (req, res) => {
    if(req.session.user){
        res.send('Bienvenido ' + req.session.user.user_name);
    } else {
        res.status(401).send('Acceso no autorizado');
    }
});
//--------------------------------
// AREA EN REVISION
//--------------------------------
app.get("/logout/", (req, res) => {
    req.session.destroy(err => {
        if(err){
            return res.redirect("/");
        }
        res.clearCookie("sid");
        res.redirect("/login");
    })
})
//---------------



app.listen(8080, () => {
    console.log('Server is running on port 8080')
})


