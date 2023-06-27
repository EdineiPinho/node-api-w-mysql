const CarroService = require('../services/CarroService')

// Tudo que for regra do banco de dados vai ser usado aqui.


module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: '', result: [] }
    let carros = await CarroService.buscarTodos()

    for (let i in carros) {
      json.result.push({
        codigo: carros[i].codigo,
        descricao: carros[i].modelo,
      })
    }
    res.json(json)
  }
}