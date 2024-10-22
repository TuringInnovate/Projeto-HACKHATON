const mongoose = require('mongoose')

const alunoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    classYear:{
        type: String,
        required: true
    }
})

const Aluno = mongoose.model('Aluno', alunoSchema)
module.exports = Aluno