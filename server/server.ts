import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connection from './db/connection.js';
import dishRouter from './routes/dishesRoute.js'
import restaurantRouter from './routes/restaurantsRoute.js';
import chefRouter from './routes/chefsRoute.js';
import authRouter from './routes/authRoute.js';

dotenv.config();
connection
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/restaurants', restaurantRouter)
//app.use('/restaurants/:filter/:page', restaurantRouter)
app.use('/chefs', chefRouter)
app.use('/dishes', dishRouter)
app.use('/auth', authRouter)

app.listen(port, () => console.log(`server is listening on: ${port}`));