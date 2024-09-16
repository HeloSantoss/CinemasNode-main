import React, { useState, useEffect } from 'react'; // Importa o React e os hooks useState e useEffect
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import { useParams, useNavigate } from 'react-router-dom'; // Importa useParams para obter parâmetros da URL e useNavigate para navegação programática
import './css/EditarNote.css'; // Importa o arquivo de estilos


function EditarNotes() {
    // Obtém o parâmetro 'id' da URL usando useParams. Este 'id' é usado para buscar e atualizar o livro específico.
    const { id } = useParams();
   
    // Define os estados para os campos do formulário. Inicialmente, todos os valores são strings vazias.
    const [Nome_da_Anotacao, setNome_da_Anotacao] = useState('');
    const [Data, setData] = useState('');
    const [Anotacao, setAnotacao] = useState('');
    


    // Hook useNavigate é usado para redirecionar programaticamente após a atualização do livro.
    const navigate = useNavigate();


    // useEffect é usado para buscar os dados do livro quando o componente é montado ou o 'id' muda.
    useEffect(() => {
        // Faz uma requisição GET para a API para buscar os detalhes do livro com o 'id' especificado.
        axios.get(`http://localhost:5000/note/${id}`)
            .then(response => {
                // Atualiza os estados com os dados do livro obtidos da API.
                setNome_da_Anotacao(response.data.Nome_da_Anotacao);
                setData(response.data.Data);
                setAnotacao(response.data.Anotacao); 

            })
            .catch(error => console.error('Erro ao buscar o note:', error)); // Lida com erros durante a requisição
    }, [id]); // O efeito será executado sempre que o 'id' mudar


    // Função para atualizar o livro
    const atualizarNotes = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário, que é recarregar a página


        // Faz uma requisição PUT para a API para atualizar o livro com o 'id' especificado com os dados do formulário.
        axios.put(`http://localhost:5000/notes/${id}`, {Nome_da_Anotacao, Data, Anotacao })
            .then(() => navigate('/')) // Se a requisição for bem-sucedida, navega para a página principal ('/')
            .catch(error => console.error('Erro ao atualizar livro:', error)); // Lida com qualquer erro que ocorra durante a requisição
    };


    return ( 
        <div className="form-container">

        <form onSubmit={atualizarNotes}> {/* Define que a função atualizarLivro será chamada quando o formulário for enviado */}
            <h1>Editar Nota</h1> {/* Título da página */}
           
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
                type="date"
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
            {/* Botão para enviar o formulário */}
            <button type="submit">Atualizar</button>
        </form> 
        </div>
    );
}


export default EditarNotes; // Exporta o componente EditarLivro para que possa ser usado em outras partes da aplicação
