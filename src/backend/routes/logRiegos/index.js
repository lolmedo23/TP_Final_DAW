var express = require('express');
var routerLogRiegos = express.Router();
var pool = require('../../mysql-connector.js');

//Recibe el id de una electrovalvula y devuelve todas las mediciones para esa electrovalvula
routerLogRiegos.get('/:idElectrovalvula', function(req, res) {
    pool.query('Select * from Log_Riegos where electrovalvulaid=? order by fecha desc', [req.params.idElectrovalvula], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

//Espera recibir por parámetro un id de electrovalvula, fecha, valor de apertura y lo inserta en base de datos.
routerLogRiegos.post('/agregarLog', function(req, res) {
    pool.query('Insert into Log_Riegos (apertura,fecha,electrovalvulaId) values (?,?,?)', [req.body.apertura, req.body.fecha, req.body.electrovalvulaId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

module.exports = routerLogRiegos;