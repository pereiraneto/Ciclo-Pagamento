const CicloPagamento = require('./cicloPagamento')
const errorHandler = require('../common/errorHandler')

CicloPagamento.methods(['get', 'post', 'put', 'delete'])
CicloPagamento.updateOptions({
    new: true,
    runValidators: true
})
CicloPagamento.after('post', errorHandler).after('put', errorHandler)

CicloPagamento.route('count', (req, res, next) => {
    CicloPagamento.count((error, value) => {
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})

CicloPagamento.route('summary', (req, res, next)=> {
    CicloPagamento.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debit: {$sum: "$debits.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debit: {$sum: "$debit"}}
    }, {
        $project: {_id: 0, credit: 1, debit: 1} // para saber quais resultados serão mostrados, no caso
                                                // apenas crédito e débito.
    }, (error, result) => {
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json(result[0] || {credit: 0, debit: 0})
        }
    })
})

module.exports = CicloPagamento