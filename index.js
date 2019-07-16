const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config({ path: './variables.env' });

mongoose.connect(process.env.DATABASE);

mongoose.connection.on('error', function(error) {
	console.log('Error de mongoose:', error);
});

require('./Schemas/Persona');
const modeloPersona = mongoose.model('Persona');

const app = express();

app.use(bodyParser());

app.get('/', function(req, res) {
	res.status(200);
});

app.get('/hola', function(req, res) {
	res.send('Hola en la ruta /hola');
});

app.get('/nueva-persona', function(req, res) {
	//http://localhost:4000/personas/ionut?name=ionut&age=24&username=ionut&email=i@example.com.....
	const miPersona = new modeloPersona({
		name: 'Santi',
		username: 'santusgames_xd',
		email: 'santi@example.com',
		password: '1234',
		age: 14
	});
	miPersona.save().then(function() {
		res.send('Persona guardada');
	});
});

app.get('/personas/ionut', function(req, res) {
	//http://localhost:4000/personas/ionut?name=ionut&age=24& ? ->  query parameters
	/*
        req.query = {
            name:'ionut',
            age: 24
        }
    */
	const search = {
		username: req.query.name
	};
	modeloPersona.find(search).then(function(users) {
		res.send(users);
	});
});

app.listen(process.env.PORT, function() {
	console.log('Aplicacion escuchando en http://localhost:4000');
});
