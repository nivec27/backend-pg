const express = require('express');
const controller = require('./controllers/controller');

const routes = express.Router();

routes.get('/', controller.raiz );
routes.get('/produtos', controller.prod);
routes.get('/produtos/:nome', controller.searchName);

routes.post('/produtos', controller.createProd);
routes.put('/produtos/:cod', controller.updateProd);
routes.delete('/produtos/:cod', controller.deleteProd);

module.exports = routes;