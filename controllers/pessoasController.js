const pessoas = require('../models/pessoas')

const index = async(connection, req, res) =>{
    const results = await pessoas.findAll(connection)
    res.render('pessoas/index', {pessoas: results})    
}

const excluir =async(connection, req, res) => {
    await pessoas.excluir(connection, req.params.id)
    res.redirect('/pessoas')

}

const novo = (req, res)=> {
    res.render('pessoas/novo')
}

const salvar =  async(connection, req, res) => {
    await pessoas.salvar(connection, req.body) 
    //res.send(req.body)
    res.redirect('/pessoas')
}

const editar = async(req, res)=> {
    const pessoa = await pessoas.findById(connection, req.params.id)
    res.render('pessoas/editar', {pessoa})
}
const update =async(connection, req, res) => {
    await pessoas.update(connection, req.body, req.params.id)
    res.redirect('/pessoas')

}
module.exports = {
    index,
    excluir,
    novo,
    salvar,
    editar,
    update
}