import { NegociacaoController } from './controllers/NegociacaoController.js';
import { Negociacao } from './domain/index.js';
// import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/js/modal.js';
import '../css/meucss.css';

$('h1').click(()=>alert('você me clicoi'));

console.log("teste");

console.log($('h1').modal);
const controller = new NegociacaoController();
const negociacao = new Negociacao(new Date(), 1, 200);
const headers = new Headers();
headers.set('Content-Type', 'application/json');

const body = JSON.stringify(negociacao);
console.log(body);
const method = 'POST';

const config = { 
    method,
    headers,
    body 
}

fetch('http://localhost:3000/negociacoes', config)
    .then(() => console.log('Dado enviado com sucesso'))
    .catch(err => console.error(err))
