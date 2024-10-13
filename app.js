import express from 'express';
import { create } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http'; 
import { Server } from 'socket.io'; 
import { getProducts, addProduct, deleteProduct } from './data/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Crear servidor HTTP
const server = http.createServer(app); 
const io = new Server(server);

// Configuración de Handlebars
const hbs = create({
    extname: '.handlebars',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
});
app.engine('.handlebars', hbs.engine);
app.set('view engine', '.handlebars');
app.set('views', path.join(__dirname, 'views'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public'))); // Para archivos estáticos

// Rutas
app.get('/', (req, res) => {
    res.render('home', { products: getProducts() });
});

app.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts', { products: getProducts() });
});

app.post('/products', (req, res) => {
    const { name, price } = req.body;
    addProduct({ name, price });
    io.emit('updateProducts', getProducts()); 
    res.status(201).send({error:null, data:'Producto agregado'});
});

app.delete('/products/:name', (req, res) => {
    deleteProduct(req.params.name);
    io.emit('updateProducts', getProducts());
    res.status(200).send({error:null , data:'Producto eliminado'});
});

// Configuración de WebSockets
io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');
    socket.emit('updateProducts', getProducts());

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

// Iniciar servidor
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
