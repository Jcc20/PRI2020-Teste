// Controlador para o modelo casamentos
var mongoose = require('mongoose')
var Casa = require('../models/casamento')

// Devolve a lista de casamentos
module.exports.listaC = () => {
    return Casa.find()
    .select({ "date": 1, "title":1, "_id":1})
    .exec()
}

module.exports.listaCNome = N => {
    return Casa.find({title: {$regex : N}})
    .exec()
}

module.exports.listaCAno = A => {
    return Casa.find({date: {$regex : A}})
    .exec()
}


module.exports.consultar = id => {
    return Casa
        .findOne({_id: id})
        .exec()
}

module.exports.lista = () => {
    return Casa.find()
    .select({"title":1, "_id":0})
    .exec()
}
