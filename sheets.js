const { google } = require("googleapis")

async function salvarSheets(dados){

 const sheets = google.sheets("v4")

 await sheets.spreadsheets.values.append({
  spreadsheetId: "ID_PLANILHA",
  range: "Agenda!A:E",
  valueInputOption: "USER_ENTERED",
  requestBody: {
   values: [[
    dados.nome,
    dados.telefone,
    dados.servico,
    dados.data,
    dados.hora
   ]]
  }
 })

}

module.exports = { salvarSheets }