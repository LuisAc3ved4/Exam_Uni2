const express = require('express');
const os = require('os');
const app = express();
const PORT = 3000;

app.get('/api/v1/saludo', (req, res) => {
    // Forzamos el cierre HTTP de raíz
    res.setHeader('Connection', 'close');
    res.setHeader('Content-Type', 'application/json');
    
    res.status(200).json({
        mensaje: "hola mundo",
        contenedor: os.hostname(),
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});