const express = require('express');
const bodyParser = require('body-parser');

//Exporting Routes:
const placesRoutes = require('./Routes/places-routes');

const app = express();


// Using  as Middlewares:
app.use(placesRoutes);


app.listen(5000, () =>{
    console.log('app is listening on app 5000')
});