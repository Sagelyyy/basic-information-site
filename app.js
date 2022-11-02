const express = require('express')
const morgan = require('morgan')

const app = express()

app.listen(3000)

app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.use((req, res) => {
    res.status(404).render('404')
})