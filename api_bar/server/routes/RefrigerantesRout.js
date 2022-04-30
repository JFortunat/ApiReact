const express = require('express');
const routes = express.Router();
const Refri = require('../controller/RefrigerantesCon');

routes.route('/Refrigerantes').get(Refri.listar);
routes.route('/Refrigerantes').post(Refri.incluir);
routes.route('/Refrigerantes').put(Refri.alterar);
routes.route('/Refrigerantes/:id').delete(Refri.excluir);
routes.route('/Refrigerantes/:id').get(Refri.obterPeloId);
routes.route('/Refrigerantes/filtro/:filtro').get(Refri.filtrar);


module.exports = routes;