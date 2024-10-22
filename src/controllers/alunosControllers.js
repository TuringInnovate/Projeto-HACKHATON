const Aluno = require('../models/alunosModel')

// CRIAR USUÁRIO
exports.createAluno = async (req, res) => {
  try{
    // "Pegando" os dados dos campos pela requisição
    const { name, year, classYear } = req.body

    // Criando o novo usuário
    const newAluno = new Aluno({
        name,
        year,
        classYear,
      })

    // Se não tiver nenhum erro: mostrar usuário criado
    await newAluno.save()
    res.status(201).send(newAluno)
  }
  catch (error){
    // Caso tenha erro, mostra o erro
    res.status(400).send({
      error: 'Erro ao criar aluno: ' + error.message
    })
  }
}

// LISTAR TODOS ALUNOS
exports.listAluno = async (req, res) => {
  try {
    // Procura todos os usuários
    const alunos = await Aluno.find()
    res.status(200).send(alunos)
  }
  // Caso não consiga procurar
  catch (error) {
    res.status(500).send({
      error: 'Erro ao procurar alunos: ' + error.message
    })
  }
}

// LISTAR USUÁRIO POR ID
exports.getAluno = async (req, res) => {
  try{
    // Tenta achar algum usuário com o ID
    const alunos = await Aluno.findById(req.params.id)

    // Caso não encontre o usuário
    if(!alunos){
      return res.status(404).send({
        error: 'Aluno não encontrado'
      })
    }

    // Caso encontre o usuário
    res.status(200).send(alunos)
  }

  // Caso não consiga buscar
  catch(error){
    res.status(500).send({
      error: "Erro ao buscar o aluno: " + error.message
    })
  }
}

// ATUALIZAR USUÁRIO
exports.updateAluno = async (req, res) => {
  try{
    const { name, year, classYear } = req.body
    const alunos = await Aluno.findByIdAndUpdate(
      req.params.id,
      {name, year, classYear},
      {new: true, runValidators: true} // Retorna o usuário atualizado e validado
    )
    
    // Caso não ache o usuário
    if(!alunos){
      return res.status(404).send({
        error: 'Usuário não encontrado'
      })
    }
    // Caso ache o usuário
    res.status(200).send(alunos)
  }
  catch (error){
    // Casa não consiga atualizar
    res.status(400).send({
      error: "Erro ao atualizar o aluno: " + error.message
    })
  }
}

// DELETAR USUÁRIO
exports.deleteAluno = async (req, res) => {
  try{
    const alunos = await Aluno.findByIdAndDelete(req.params.id)

    // Caso não ache o usuário
    if(!alunos){
      return res.status(404).send({
        error: "Aluno não encontrado"
      })
    }

    // Caso ache o usuário
    res.status(200).send({
      message: "Aluno deletado com sucesso"
    })

  }
  // Caso de erro ao deletar
  catch(error){
    res.status(500).send({
      error: "Erro ao deletar o aluno: " + error.message
    })
  }

  
}
