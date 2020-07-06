const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db.js")

//configurar pasta publica



//utilizando o template engines

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.use(express.static("public"))
//configurar caminhos da minha app
//pagina inicial
//req: requisição
//res: resposta

server.get("/",  (req, res)=>{
   return res.render("index.html", {title: "Um título"})


})

server.get("/create-point", (req,res)=>{
    return res.render("create-point.html")


})

server.get("/search", (req,res) => {

db.all(`SELECT * FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
            }
            console.log("Aqui estão seus registros:")
            console.log(rows)
            //mostrar a pagina html com os dados do banco de dados
            return res.render("search-result.html",{places: rows})
        })

   })

//ligar o servidor

server.listen(3000)
