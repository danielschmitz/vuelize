
const router = require('express').Router()

router.get('/users', (req, res) => {
  res.send('Hello World Users')
})

module.exports = router
