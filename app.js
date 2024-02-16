import express from 'express';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productsRouter.js';
import categoryRouter from './routes/categoryRouter.js';

const app = express();
app.use(express.json())

app.use("/users/", userRouter);
app.use("/products/", productRouter);
app.use("/categories/", categoryRouter);

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})


