const express = require("express")
const cors = require("cors")

const { salvarSheets } = require("./sheets")
const { criarEvento } = require("./agenda")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/agendar", async (req,res)=>{

 const dados = req.body

 await salvarSheets(dados)
 await criarEvento(dados)

 res.send("Agendado")

})

app.listen(3001, ()=>{
 console.log("Servidor rodando")
})