import React, { useState } from 'react'; // Importa o React e o hook useState
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação programática


function NovoNotes() {
    // Define os estados para os campos do formulário. Inicialmente, todos os valores são strings vazias.
    const [Nome_da_Anotacao, setNome_da_Anotacao] = useState('');
    const [Data, setData] = useState('');
    const [Anotacao, setAnotacao] = useState('');
    


    // Hook useNavigate é usado para redirecionar programaticamente após o envio do formulário.
    const navigate = useNavigate();


    // Função para adicionar um novo livro
    const adicionarNote = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário, que é recarregar a página


        // Faz uma requisição POST para a API para adicionar um novo livro com os dados do formulário
        axios.post('http://localhost:3000/notes', {Nome_da_Anotacao, Data, Anotacao })
            .then(() => {
                // Se a requisição for bem-sucedida, navega para a página principal ('/')
                navigate('/');
            })
            .catch(error => console.error('Erro ao adicionar notes:', error)); // Lida com qualquer erro que ocorra durante a requisição
    };


    return (
        <form onSubmit={adicionarNote}> {/* Define que a função adicionarLivro será chamada quando o formulário for enviado */}
            <h1>Novo notes</h1> {/* Título da página */}
           
            {/* Campo para o título do livro */}
            <input
                type="text"
                value={Nome_da_Anotacao}
                onChange={e => setNome_da_Anotacao(e.target.value)} // Atualiza o estado 'titulo' quando o valor do campo muda
                placeholder="Nome da Anotacao"
                required // Torna este campo obrigatório
            />
           
            {/* Campo para o autor do livro */}
            <input
                type="text"
                value={Data}
                onChange={e => setData(e.target.value)} // Atualiza o estado 'autor' quando o valor do campo muda
                placeholder="Data"
                required // Torna este campo obrigatório
            />
           
            {/* Campo para o ano de publicação do livro */}
            <input
                type="text"
                value={Anotacao}
                onChange={e => setAnotacao(e.target.value)} // Atualiza o estado 'ano' quando o valor do campo muda
                placeholder="Anotacao"
                required // Torna este campo obrigatório
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}


export default NovoNotes; // Exporta o componente NovoLivro para que possa ser usado em outras partes da aplicação
