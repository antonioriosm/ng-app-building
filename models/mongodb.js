var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost/ubigeo', function(err, db) {
    
    if(err) throw err;

    console.log("Connected to Database");
    Dptos = db.collection('dptos');
    
    exports.leerDepartamentos = function(cb) {
        
        Dptos.find().limit(10).sort({_id: -1}).toArray(function(err, data) {
        // Dptos.find().toArray(function(err, data) {
            cb(data);
        });
    };

    exports.grabaDepartamento = function(reg, cb) {

        Dptos.save(reg, function(err) {
            if (err) cb(err, null);
            cb(null, "Ok");
        });
    };

    exports.borraDepartamento = function(id, cb) {
        Dptos.remove({_id: id}, function(err) {
            if (err) cb(err, null);
            cb(null, "Ok");
        });
    };

});
