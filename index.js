const fs = require('fs');
const express = require('express');
const app = express();
port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html') //recibe un string con la ruta del archivo
    
    
               
});

app.use(express.static('static'));


app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});