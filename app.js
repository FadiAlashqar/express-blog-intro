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

// definisco la rotta che restituisce i miei post:
app.get('/bacheca', (req, res) => {
    let posts = [
        {
            titolo: "Ciambellone",
            contenuto: "contenuto 1",
            immagine:'<ciambellone.jpeg">',
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            titolo: "cracker barbabietola",
            contenuto: "contenuto 2",
            immagine: '<img src="cracker_barbabietola.jpeg">',
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            titolo: "pane fritto dolce",
            contenuto: "contenuto 3",
            immagine: '<img src="pane_fritto_dolce.jpeg">',
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            titolo: "pasta barbabietola",
            contenuto: "contenuto 4",
            immagine: '<img src="pasta_barbabietola.jpeg">',
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            titolo: "torta paesana",
            contenuto: "contenuto 5",
            immagine: '<img src="torta_paesana.jpeg">',
            tags: ["tag1", "tag2", "tag3"]
        },
    ]

    res.json(posts);
});


app.listen(port, () => {
    console.log(`in ascolto dalla base ${port}`)
});



