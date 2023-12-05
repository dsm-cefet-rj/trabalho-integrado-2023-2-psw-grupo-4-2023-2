import "dotenv/config" //Iniciando Dotenv na aplicação
import app from "./src/app.js";

const PORT = 3000; //Porta de conexão que vai ser utilizada na API

app.listen(PORT, ()=>{ 
    console.log(`servidor escutando na porta ${PORT}! `);
});