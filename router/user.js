const model = require('../models')

const router = require('express').Router()

router.get('/users', (req, res) => {
  model.User.findAll().then(result => {
    res.send(result)
  })
})

module.exports = router
