const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const productModel = require('./models/products');
const cors = require('cors');
const app = express();
require("dotenv").config();
app.use(express.json());
const corsOptions = {
    origin: "http://localhost:3000" 
};
app.use(cors(corsOptions));




mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT ;
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    });
}).catch(err => {
    console.log(err);
});



app.get('/users', async (req, res) => {
    const users = await UserModel.find();
    res.json(users);
});
app.get('/products', async (req, res) => {
    const products = await productModel.find();
    res.json(products);
});

app.post('/createUser', async (req, res) => {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.json(req.body);
});

