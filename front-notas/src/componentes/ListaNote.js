import React, { useState, useEffect } from 'react'; // Importa o React e os hooks useState e useEffect
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import { Link } from 'react-router-dom'; // Importa o componente Link do react-router-dom para navegação entre páginas
import './css/ListarNotes.css'; // Importa o arquivo de estilos da pasta css 


function ListarNotes() {
     // Define o estado 'notes' e a função 'setNotes' para atualizá-lo. Inicialmente, 'notes' é um array vazio.
     const [note, setNote] = useState([]);
     // Estado para armazenar a nota selecionada para detalhes
     const [selectedNote, setSelectedNote] = useState(null);
     // Estado para controlar se o modal está aberto ou não
     const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(note)


    // O hook useEffect é usado para executar código após a renderização do componente. Neste caso, ele busca os livros da API quando o componente é montado.
    useEffect(() => {
        axios.get('http://localhost:5000/notes') // Faz uma requisição GET para a API para buscar a lista de livros
            .then(response => setNote(response.data)) // Se a requisição for bem-sucedida, atualiza o estado 'livros' com os dados recebidos
            .catch(error => console.error('Erro ao buscar os livros:', error)); // Lida com qualquer erro que ocorra durante a requisição
    }, []); // O array vazio [] significa que este useEffect será executado apenas uma vez, quando o componente for montado


    // Função para deletar um livro. Recebe o 'id' do livro como parâmetro.
    const deletarNotes = (id) => {
        axios.delete(`http://localhost:5000/notes/${id}`) // Faz uma requisição DELETE para a API para remover o livro com o ID especificado
            .then(() => setNote(note.filter(note => note._id !== id))) // Atualiza o estado 'livros' removendo o livro deletado da lista
            .catch(error => console.error('Erro ao deletar o Note:', error)); // Lida com qualquer erro que ocorra durante a requisição
    };

    // Função para mostrar os detalhes da nota
    const mostrarDetalhes = (id) => {
        axios.get(`http://localhost:5000/notes/${id}`) // Faz uma requisição GET para a API para obter detalhes da nota
            .then(response => {
                setSelectedNote(response.data); // Atualiza o estado com os detalhes da nota
                setIsModalOpen(true); // Abre o modal
            })
            .catch(error => console.error('Erro ao buscar os detalhes da nota:', error)); // Lida com qualquer erro que ocorra durante a requisição
    };

    // Função para fechar o modal
    const fecharModal = () => {
        setIsModalOpen(false); // Fecha o modal
        setSelectedNote(null); // Limpa os detalhes da nota selecionada
    };
 
    return ( 

        <div> 
        <h1>Lista de Notas</h1>

        <div className="table-container">
            <table className="notes-table">
                <thead>
                    <tr>
                        <th>Nome da Anotação</th>
                        <th>Data</th>
                     <th>Editar   Deletar Detalhes         </th>
                    </tr>
                </thead>
                <tbody>  
                    {/* Mapeia o array de notas para gerar uma lista de linhas na tabela */}
                    {note.map(note => (
                        <tr key={note._id}>
                            <td>{note.Nome_da_Anotacao}</td>
                            <td>{note.Data}</td>
                            <td>
                                {/* Link para a página de edição da nota */}
                                <Link to={`/editar/${note._id}`} className="button-link">Editar</Link>
                                {/* Botão para deletar a nota */}
                                <button onClick={() => deletarNotes(note._id)} className="button-delete">Deletar</button>
                                {/* Botão para mostrar detalhes da nota */}
                                <button onClick={() => mostrarDetalhes(note._id)} className="button-details">Detalhes</button>
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table> 
              {/* Modal para exibir detalhes */}
              {isModalOpen && selectedNote && (
                <div id="details-modal" style={{ display: 'block', border: '1px solid black', padding: '20px', position: 'fixed', top: '20%', left: '30%', backgroundColor: 'white', zIndex: 1000 }}>
                    <h2>{selectedNote.Nome_da_Anotacao}</h2> 
                    <p>{selectedNote.Data}</p>
                    <p>{selectedNote.Anotacao}</p> 
                    <button onClick={fecharModal}>Fechar</button>
                </div>
            )} 

             {/* Sobreposição do modal */}
             {isModalOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999 }} onClick={fecharModal}></div>
            )}
        </div>  
        {/* Link para a página de adição de uma nova nota */}
        <Link to="/novo" className="add-note-button">Adicionar Nova Nota</Link>
            
        </div>
    );
}




export default ListarNotes; 