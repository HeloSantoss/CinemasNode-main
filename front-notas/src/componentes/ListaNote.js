import React, { useState, useEffect } from 'react'; // Importa o React e os hooks useState e useEffect
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import { Link } from 'react-router-dom'; // Importa o componente Link do react-router-dom para navegação entre páginas


function ListarNotes() {
    // Define o estado 'livros' e a função 'setLivros' para atualizá-lo. Inicialmente, 'livros' é um array vazio.
    const [note, setNote] = useState([]);


    // O hook useEffect é usado para executar código após a renderização do componente. Neste caso, ele busca os livros da API quando o componente é montado.
    useEffect(() => {
        axios.get('http://localhost:5000/note') // Faz uma requisição GET para a API para buscar a lista de livros
            .then(response => setNote(response.data)) // Se a requisição for bem-sucedida, atualiza o estado 'livros' com os dados recebidos
            .catch(error => console.error('Erro ao buscar os livros:', error)); // Lida com qualquer erro que ocorra durante a requisição
    }, []); // O array vazio [] significa que este useEffect será executado apenas uma vez, quando o componente for montado


    // Função para deletar um livro. Recebe o 'id' do livro como parâmetro.
    const deletarNote = (id) => {
        axios.delete(`http://localhost:3000/note/${id}`) // Faz uma requisição DELETE para a API para remover o livro com o ID especificado
            .then(() => setNote(note.filter(note => note._id !== id))) // Atualiza o estado 'livros' removendo o livro deletado da lista
            .catch(error => console.error('Erro ao deletar o Note:', error)); // Lida com qualquer erro que ocorra durante a requisição
    };


    return (
        <div>
            <h1>Lista de Note</h1>
            {/* Link para a página de adição de um novo livro */}
            <Link to="/novo">Adicionar Novo Note</Link>
            <ul>
                {/* Mapeia o array de livros para gerar uma lista de itens */}
                {note.map(note => (
                    <li key={note._id}> {/* Cada item da lista tem uma chave única, o _id do note */}
                        {note.titulo} - {note.autor} {/* Exibe o título e o autor do livro */}
                       
                        {/* Link para a página de edição do livro */}
                        <Link to={`/editar/${note._id}`}>Editar</Link>
                       
                        {/* Botão para deletar o livro */}
                        <button onClick={() => deletarNote(note._id)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default ListarNotes; 