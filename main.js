const express = require ('express');
const morgan = require ('morgan');
const app = express();
const bodyParser = require('body-parser');
const livrosRepo = require ('./repositories/LivrosRepository');


const PORTA = 3000;

app.set('view engine', 'ejs');

app.use(morgan('short'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('views'));
app.use('/auth', require('./controllers/autorizacao'));
app.use ('/livros', require('./controllers/livros'));


app.get('/', (req,res) => {
    let livros = livrosRepo.todos();
    res.render('index', {livros : livros});
});

app.listen(PORTA, () => {
    console.log('Aplicação no ar em http://localhost:' + PORTA);
});
