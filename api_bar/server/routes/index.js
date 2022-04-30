const { Router } = require('express');
const routes = Router();

//Liberar origem para requisições
var cors = require('cors');
routes.use(cors({ origin: '*' }));

const RefrigerantesRout = require('./RefrigerantesRout');
routes.use("/api", RefrigerantesRout);

module.exports = routes;
