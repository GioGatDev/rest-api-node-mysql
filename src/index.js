const express = require('express');
const app = express();

//configuración
app.set('port', process.env.PORT || 3000); // En caso de despliegue de app

//Middlewares
app.use(express.json());

//Routes
app.use(require('./routes/empleados'));

//Iniciando servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor conectado en puerto: ${app.get('port')}`);
});