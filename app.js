// importiamo express:
const express = require('express');

// inizializzo express all'interno di una variabile:
const app = express();

// definisco il numero di rotta:
const port = 3000;

// definizione della rotta base:
app.get('/', (req, res) => {
    res.send('Server del mio blog world');
});


app.listen(port, () => {
    console.log(`in ascolto dalla base ${port}`)
});



