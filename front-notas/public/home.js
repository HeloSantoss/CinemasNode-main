import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css'; // Importe o CSS específico para a página de Home

function Home() {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Bem-vindo ao Sistema de Notas</h1>
            </header>

            <main className="home-main">
                <h2>Faça Login ou Cadastre-se</h2>
                <div className="home-buttons">
                    <Link to="/login" className="home-button">Login</Link>
                    <Link to="/register" className="home-button">Cadastrar</Link>
                </div>
            </main>

            <footer className="home-footer">
                <div className="footer-content">
                    <p>&copy; 2024 Minha Aplicação</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
