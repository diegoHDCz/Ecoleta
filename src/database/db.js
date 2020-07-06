//importar a dependecia do sqlite3
const sqlite3 = require("sqlite3").verbose();

//criar o objeto de banco de dados(operações)
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db
// utilizar o objeto de banco de dados, para as nossas operações
// db.serialize(() => {

//       // com comnandos SQL eu vou:
//     //1criar uma tabela
// db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         imagem TEXT,
//         name TEXT,
//         adress TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//     );
// `)
//     //inserir dados na tabela
// const query = `
// "INSERT INTO places (
//     imagem,
//     name,
//     address,
//     address2,
//     state,
//     city,
//     items
//      )VALUES (?,?,?,?,?,?,?);
// `
// const values = [
//     "https://images.unsplash.com/photo-1507560461415-997cd00bfd45?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
//     "Papersider",
//     "Guilherme Gemballa, Jardim América",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"

// ]

// function afterInsertData(err) { 
//     if(err) {
    
//           return console.log(err)

// }

//         console.log("Cadastro com sucesso")
//         console.log(this)
//     }

// db.run(query, values, afterInsertData)
 
//     //consultar os dados da tabela

// db.all(`SELECT * FROM places`, function(err, rows){
//         if(err) {
//             return console.log(err)
//             }
//             console.log("Aqui estão seus registros:")
//             console.log(rows)
//     })

//     //deletar da tabela

//  db.run(`DELETE FROM places WHERE id = ?`,[1] function { 
//         if(err) {
//             return console.log(err)
//         }
//         console.log("Registro deletado com sucesso!")
//     })
// })
