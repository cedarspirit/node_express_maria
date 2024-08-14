const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: '.env-local'});

const PORT = process.env.PORT || '3001' ;

const app = express();

/**
 * Middleware
 */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/**
 * https://www.youtube.com/watch?v=krTbf0O-BCo&t=3014s
 * Routes @13:21
 */

app.get('/',(request,response) => {
    response.status(200).send("this is not why you're here")
})

const userRouter = require('./routes/user');
app.use('/user',userRouter);

/**Start listeneing */
app.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`)
})