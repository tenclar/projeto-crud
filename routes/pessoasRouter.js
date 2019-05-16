const express = require('express')
const pessoasController = require('../controllers/pessoasController')

const pessoasRouter = ({connection}) => {
    const router = express.Router()
    router.get('/', pessoasController.index.bind(null, connection))
    router.get('/excluir/:id', pessoasController.excluir.bind(null, connection))
    router.get('/novo', pessoasController.novo)
    router.post('/novo', pessoasController.salvar.bind(null, connection))
    router.get('/editar:id', pessoasController.editar.bind(null, connection))
    router.post('/editar:id', pessoasController.update.bind(null, connection))
    return router
}




module.exports = pessoasRouter