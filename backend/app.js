const express = require('express');
const mongoose = require('mongoose');
// const path = require('path');
const dataRoutes = require('./routes/data');
const userRoutes = require('./routes/user');


const app = express();
mongoose.connect('mongodb+srv://archist:1&Bigcyri@cluster0.61na4.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

//analyser le corps de la requête
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use((req, res, next) => {
    console.log("oioiooio");
    console.log(req.body)
    next()
})
app.use('/api/data', dataRoutes);
app.use('/api/auth', userRoutes);
// app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;