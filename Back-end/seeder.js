// seeder.js
import "dotenv/config" //Iniciando Dotenv na aplicação
import { connect, disconnect } from 'mongoose';
import Livro from './src/models/Livro.js';
import Leitor from './src/models/Leitor.js';
import livrosData from './seeders/livros.js';
import usuariosData from './seeders/usuarios.js';

connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

// Função para limpar o banco de dados
const limparBanco = async () => {
    try {
        await Leitor.deleteMany({});
        await Livro.deleteMany({});
        console.log('Banco de dados limpo com sucesso!');
    } catch (error) {
        console.error('Erro ao limpar o banco de dados:', error);
        throw error
    }
};

// Função para inserir dados no banco de dados
const seed = async () => {
    // Conecta-se ao banco de dados
    await limparBanco();
    try {
        await Leitor.insertMany(usuariosData);
        await Livro.insertMany(livrosData);
        console.log('Dados de seed inseridos com sucesso!');
    } catch (error) {
        console.error('Erro ao inserir dados de seed:', error);
    } finally {
        // Desconecta do banco de dados após a conclusão
        disconnect();
    }
};
// Chama a função de seed
seed();
