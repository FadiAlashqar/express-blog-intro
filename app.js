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
            titolo: "Ferrari LaFerrari",
            contenuto: "contenuto 1",
            immagine:'<img src="Ferrari Laferrari.jpg">',
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            titolo: "Lamborghini SVJ",
            contenuto: "contenuto 2",
            immagine: '<img src="lamborghini svj.jpg">',
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            titolo: "Mclaren P1",
            contenuto: "contenuto 3",
            immagine: '<img src="MclarenP1.avif">',
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            titolo: "Porsche 918",
            contenuto: "contenuto 4",
            immagine: '<img src="porsche 918.webp">',
            tags: ["tag1", "tag2", "tag3"]
        },
        {
            titolo: "Bugatti Shiron",
            contenuto: "contenuto 5",
            immagine: '<img src="bugatti shiron.webp">',
            tags: ["tag1", "tag2", "tag3"]
        },
    ]

    res.json(posts);
});


app.listen(port, () => {
    console.log(`in ascolto dalla base ${port}`)
});



