const express = require('express')

const index = app => {
  const router = express.Router()

  router.get('/', (req, res) => {
    res.boom.notFound()
  })

  //
  // rotas
  //
  router.use('/user', require('./user'))

  //
  // Todas as rotas possuem o prefixo api.
  //
  app.use('/api', router)
}
module.exports = index
