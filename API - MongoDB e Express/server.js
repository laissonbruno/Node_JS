// const http = require("http");
// const port = 3000;
import "dotenv/config";
import app from "./src/app.js";
const port = process.env.PORT || 3000;

// const rotas = {
//     '/': 'Node com MongoDB',
//     '/livros': 'Pagina de livros',
//     '/laisson': 'Laisson Bruno',
//     '/sobre': 'Sobre'
// }

// const server = http.createServer((req, res)=> {
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     res.end(rotas[req.url])
// })


// server.listen(port, () => {
//     console.log(`Servidor online na porta http://localhost:${port}`)
// })

app.listen(port, () => {
    console.log(`Servidor online na porta http://localhost:${port}`);
});