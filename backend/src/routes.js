const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/sessions', SessionController.create);

routes.get('/ongs', OngController.get);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.get);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.get);

module.exports = routes;
