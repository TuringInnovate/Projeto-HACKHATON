const cors = require('cors')
const express = require('express')
const connectDB = require('./src/db')
const path = require('path')
const fs = require('fs')
const routesAlunos = require('./src/routes/routesAlunos')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/alunos', routesAlunos)

const port = 3000

// Conecta no servidor
app.listen(port, ()=>{
    console.log(`Servidor rodando em: http://localhost:${port}`)
})

// Conectar ao MongoDB
connectDB()




