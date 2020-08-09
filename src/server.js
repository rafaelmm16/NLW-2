const express = require('express')
const server = express()

const {
    pageLandig,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//Configurar Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
.use(express.urlencoded({extended: true}))
//Configurar arquivos estáticos
.use(express.static("public"))
//Rotas da aplicação
.get("/", pageLandig)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

.listen(5500)