const express = require('express')
const router = express.Router()

const AlunoController = require('../controllers/alunosControllers')

// ROTAS DO USUÁRIO
router.post('/create', AlunoController.createAluno)
router.get('/list', AlunoController.listAluno)
router.get('/:id', AlunoController.getAluno)
router.put('/:id', AlunoController.updateAluno)
router.delete('/:id', AlunoController.deleteAluno)

module.exports = router