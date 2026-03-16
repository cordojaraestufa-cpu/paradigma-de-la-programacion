const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('!Hola, mundo¡');
});

app.get('/json', (req, res) => {
    res.json({ mensaje: '¡Hola, mundo en formato JSON!'});
});

app.get('/info', (req, res) => {
    res.json({ mensaje:'¡'})
})
    
app.listen(3000, () => { 
    console.log('Servidor escuchando en el puerto 3000');
})