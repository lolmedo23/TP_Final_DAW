//=======[ Settings, Imports & Data ]==========================================
var express = require('express');
var PORT    = 3000;
var app     = express();

app.use(express.json()); 

//ruteo dispositivo
var routerDisp = require('./routes/dispositivo');
//ruteo medicion
var routerMedicion = require('./routes/medicion');
//ruteo logRiegos
var routerLogRiegos = require('./routes/logRiegos');

app.use('/dispositivos', routerDisp);
app.use('/medicion', routerMedicion);
app.use('/logRiegos', routerLogRiegos);

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});
//=======[ End of file ]=======================================================