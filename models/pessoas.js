const findAll = (connection) => {
    return new Promise((resolve, reject) =>{
        connection.query('select * from pessoas', (err, results) =>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
        
    })
}
const findById = (connection, id) => {
    return new Promise((resolve, reject) =>{
        connection.query('select * from pessoas  where id='+id, (err, results) =>{
            if(err){
                reject(err)
            }else{
                if(results.length>0){
                    resolve(results[0])
                }else{
                    resolve({})
                }
            }
        })
        
    })
}
const excluir = (connection, id) => {
    return new Promise((resolve, reject) =>{
        connection.query('delete from pessoas where id = '+id, (err, results) => {
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}

const salvar = (connection, pessoa) => {

    return new Promise((resolve, reject) =>{
        connection.query(`insert into pessoas (nome, nascimento, cargo) values('${pessoa.nome}','${pessoa.nascimento}','${pessoa.cargo}') `, (err, results) => {
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}

const update = (connection,pessoa, id) => {
    return new Promise((resolve, reject) =>{
        connection.query(`update pessoas set nome='${pessoa.nome}', nascimento='${pessoa.nascimento}', cargo='${pessoa.cargo}' where id ='${id}'`, (err, results) => {
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}


module.exports = {
    findAll,
    findById,
    excluir,
    salvar,
    update
}