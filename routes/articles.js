const express = require('express')
const Article = require('../models/article')
const router = express.Router()


router.get('/new', (req, res) => {
  res.render('articles/new')
})

router.post('/', (req, res) => {
  const article = new Article({
    
  })
})

module.exports = router