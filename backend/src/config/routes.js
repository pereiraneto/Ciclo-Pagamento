const express = require('express')

module.exports = function(server){
    const router = express.Router()
    server.use('/api', router)

    const CicloPagamento = require('../api/cicloPagamento/cicloPagamento.service')
    CicloPagamento.register(router, '/cicloPagamentos')
}