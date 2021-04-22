var express = require('express');
var router = express.Router();

var prospectosController = require('../controllers/prospecto');

router.get('/prospecto', async (req, res) => {
  var resultado = await prospectosController.obtenerProspecto(req.query);
  await res.send(resultado);
})

router.post('/prospecto', async (req, res) => {
  var resultado = await prospectosController.darAltaProspecto(req.body);
  await res.send(resultado);
})

router.put('/prospecto', async (req, res) => {
  var resultado = await prospectosController.actualizarProspecto(req.body);
  await res.send(resultado);
})

router.get('/prospectos', async (req, res) => {
  var resultado = await prospectosController.obtenerProspectos();
  await res.send(resultado);
})

module.exports = router;