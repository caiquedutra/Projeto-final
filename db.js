var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Estados');

var customerSchema = new mongoose.Schema({
    municipio: String,
    casosAcumulado: String,
    regiao: String,
    estado: String,
    data: String,
    obitosAcumulado: String,

}, { collection: 'customers' }
);

module.exports = { Mongoose: mongoose, CustomerSchema: customerSchema }
