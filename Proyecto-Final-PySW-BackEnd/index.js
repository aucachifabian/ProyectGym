var express = require('express');
var app = express();

const {mongoose} = require('./database');
const cors = require('cors');

//middlewares 
app.use(express.json()); 
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamiento de rutas para puntos 
app.use('/api/students', require('./routers/students.router'));
app.use('/api/user', require('./routers/user.router'));
app.use('/api/coach', require('./routers/coach.router'));
app.use('/api/arrangement', require('./routers/arrangement.router'));
app.use('/api/payment', require('./routers/payment.router'));

//setting 
app.set('puerto', process.env.PORT || 3000);
 
//starting the server 
app.listen(app.get('puerto'), () => { 
    let d = new Date();
    console.log(d);
    console.log('Server started on port', app.get('puerto')); 
});