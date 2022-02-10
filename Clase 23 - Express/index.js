let express = require('express');// requiero express
let app = express();// instancio express
const PORT = 3000;
const PATH = require('path');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(PATH.join(__dirname,"/views/index.html"));
})

app.get('/contacto', (req, res) => {
    res.sendFile(PATH.join(__dirname,"/views/contact.html"));
});

app.get('/nosotros', (req, res) => {
    res.send("About us");
})

app.get('/productos', (req, res) => {
    res.send("List of products");
})



app.listen(PORT, () => console.log(`
Servidor levantado en el puerto ${PORT} 
http://localhost:${PORT} 
`));