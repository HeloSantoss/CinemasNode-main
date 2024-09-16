import React, { useState } from 'react'; // Importa o React e o hook useState
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação programática
import './css/NovoNote.css'; // Importa o arquivo de estilos


function NovoNote() {
    // Define os estados para os campos do formulário. Inicialmente, todos os valores são strings vazias.
    const [Nome_da_Anotacao, setNome_da_Anotacao] = useState('');
    const [Data, setData] = useState('');
    const [Anotacao, setAnotacao] = useState('');



    // Hook useNavigate é usado para redirecionar programaticamente após o envio do formulário.
    const navigate = useNavigate();


    // Função para adicionar um novo livro
    const criarNotes = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário, que é recarregar a página


        // Faz uma requisição POST para a API para adicionar um novo livro com os dados do formulário
        axios.post('http://localhost:5000/notes/novo', { Nome_da_Anotacao, Data, Anotacao })
            .then(() => {
                // Se a requisição for bem-sucedida, navega para a página principal ('/')
                navigate('/');
            }).catch(error => console.error('Erro ao adicionar notes:', error)); // Lida com qualquer erro que ocorra durante a requisição
    };


    return (
        <div className="form-container">
            <h1>Nova Anotação</h1> {/* Título da página */}
            <form onSubmit={criarNotes}> {/* Define que a função adicionarLivro será chamada quando o formulário for enviado */}

                {/* Campo para o título do livro */}
                <h3>Nome da anotação </h3>
                <input
                    type="text"
                    value={Nome_da_Anotacao}
                    onChange={e => setNome_da_Anotacao(e.target.value)} // Atualiza o estado 'titulo' quando o valor do campo muda
                    placeholder="Nome da Anotacao"
                    required // Torna este campo obrigatório
                />

                {/* Campo para o autor do livro */}
                <h3>Data</h3>
                <input
                    type="date"
                    value={Data}
                    onChange={e => setData(e.target.value)} // Atualiza o estado 'autor' quando o valor do campo muda
                    placeholder="Data"
                    required // Torna este campo obrigatório
                />

                {/* Campo para o ano de publicação do livro */}
                <h3>Descrição</h3>
                <input
                    type="text"
                    value={Anotacao}
                    onChange={e => setAnotacao(e.target.value)} // Atualiza o estado 'ano' quando o valor do campo muda
                    placeholder="Anotacao"
                    required // Torna este campo obrigatório
                />
                <button type="submit">Adicionar</button>
            </form>
        </div>

    );
}


export default NovoNote; // Exporta o componente NovoLivro para que possa ser usado em outras partes da aplicação
