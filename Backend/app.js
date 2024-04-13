const express = require('express');
const app = express();
const mongoose = require('mongoose');
const axios = require('axios');

const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log("DB Connected");
    })
    .catch((e) => {
        console.log("Database connection error");
        console.log(e);
    })

const API_URL = `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page_size=30`;


app.get('/', async (req, res) => {

    try {
        const response = await axios.get(API_URL);
        const data = response.data;
        console.log(data);
    
        return res.status(200).json({
            gameData: data,
        });
    }
    catch (e) {
        console.log("ERROR IN BACKEND");
        // console.log(e);
    }
})

app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}...`);
})