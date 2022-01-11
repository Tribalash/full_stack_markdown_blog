const { request } = require('express')
const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

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