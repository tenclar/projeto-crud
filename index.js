const express = require('express')
const path = require('path')
const app = express()
const port = process.env.Port || 3000

const mysql = require('mysql')
const bodyParser = require('body-parser')

const connection = mysql.createConnection({
    host:'127.0.0.1',
    user: 'root',
    password: 'root',
    database:'cadastro'
})

const pessoasRouter = require('./routes/pessoasRouter')

const dependences = {
    connection
}
app.use(bodyParser.urlencoded({ extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.render('home'))
app.use('/pessoas', pessoasRouter(dependences))


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

connection.connect(() => {
    console.log('db conectado')
    app.listen(port, ()=> console.log('CRUD listening on port ' + port))
    
})



