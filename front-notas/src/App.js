import React from 'react'; // Importa a biblioteca React, que é necessária para criar componentes e construir a interface do usuário.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa componentes do React Router para gerenciar rotas dentro da aplicação.
import './componentes/css/ListarNotes.css'
import './componentes/css/EditarNote.css'

import ListaNote from './componentes/ListaNote'; // Importa o componente que lista todos os livros.
import NovoNote from './componentes/NovoNote'; // Importa o componente que permite adicionar um novo livro.
import EditarNote from './componentes/EditarNote'; // Importa o componente que permite editar um livro existente.
import Cadastro from './componentes/Cadastro'; // Importa o componente de cadastro
import Login from './componentes/Login'; // Importa o componente de cadastro


function App() {

        // O Router é o componente que engloba toda a aplicação e habilita o uso de rotas.
        return(
        <Router>
            <div className="App">
                {/* O componente Routes é usado para definir as várias rotas da aplicação */}
                <Routes>
                    {/* Cada Route define um caminho específico e o componente que deve ser renderizado quando esse caminho é acessado */}
                   
                    {/* Rota para a página principal que lista os livros */}
                    <Route path="/" element={<ListaNote />} />
                   
                    {/* Rota para a página de adição de um novo livro */}
                    <Route path="/novo" element={<NovoNote/>} />
                   
                    {/* Rota para a página de edição de um livro existente; o :id é um parâmetro dinâmico que representa o ID do livro a ser editado */}
                    <Route path="/editar/:id" element={<EditarNote />} />
                
                    <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} /> {/* Adiciona a rota para a página de login */}
                {/* Adicione outras rotas conforme necessário */}</Routes>
 
            </div>
        </Router>
       );
    }

export default App; // Exporta o componente App como padrão para que possa ser importado em outros lugares do projeto.