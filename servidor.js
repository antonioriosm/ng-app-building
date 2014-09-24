var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    routes = require('./controllers');

app.set('port', process.env.PORT || 7000);
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
//app.use( bodyParser.urlencoded() ); // to support URL-encoded bodies,

app.get('/', routes.index);
app.get('/mongo-api/dptos', routes.leeDepartamentos);
app.post('/mongo-api/dptos', routes.grabaDepartamento);
app.delete('/mongo-api/dptos', routes.borraDepartamento);

app.listen(app.get('port'), function() {
    console.log('Servidor iniciado en el puerto ' + app.get('port'));
});