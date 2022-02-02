const express=require('express');
const app=express();
const port=3000;
const myLogger = require('./middlewares/logger');
const usersRouter=require('./api/users/users.js');
const cors=require('cors');

app.use(myLogger);
// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

app.use("/users", usersRouter);

app.get("/",(req,res)=>{
    res.send('Welcome to Home page');
})


app.listen(port,()=>{
    console.log(`Listen on port ${port}`)
})