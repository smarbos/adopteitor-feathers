const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const Animals = require('./animals.js');
const app = express(feathers());

// Turn on JSON body parsing for REST services
app.use(express.json())
// Turn on URL-encoded body parsing for REST services
app.use(express.urlencoded({ extended: true }));
// Set up REST transport using Express
app.configure(express.rest());

// Initialize the Animals service by creating
// a new instance of our class
app.use('animals', new Animals());

// Set up an error handler that gives us nicer errors
app.use(express.errorHandler());

// Start the server on port 3030
const server = app.listen(3030);

// Use the service to create a new message on the server
app.service('animals').create({
  text: 'Hello ANIMALS from the server'
});

server.on('listening', () => console.log('Feathers REST API started at http://localhost:3030'));
