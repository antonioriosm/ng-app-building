var ug = require('../models/mongodb');

module.exports = exports = {

    index: function(req, res) {
        res.render('index', {title:'Departamentos'});
    },

    leeDepartamentos: function(req, res) {
        ug.leerDepartamentos(function(data) {
            res.json(data);
        });
    },

    grabaDepartamento: function(req, res) {
        ug.grabaDepartamento(req.body, function(err,resp) {
            if (err) {console.error(err); throw err;}
            res.end(resp);
        });
    },

    borraDepartamento: function(req, res) {
        console.log(req.query);
        ug.borraDepartamento(req.query._id, function(err, resp) {
            if (err) {throw {error: "Error borrando departamento"};}
            res.end(resp);
        });
    }
};