const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://localhost:27017/markdown-blog', {
  useNewUrlParser: true
})

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)
app.use(express.urlencoded({ extended: false }))

const articles = [{
  title: 'article 1',
  createdAt: new Date(),
  description: "this is the blog article body text"
},{
  title: 'article 2',
  createdAt: new Date(),
  description: "this is the blog article 2 body text"
}]

app.get('/', (req, res) => {
  res.render('articles/index', { articles })
})

app.listen(5000)