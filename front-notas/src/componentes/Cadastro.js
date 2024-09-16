// src/components/Cadastro.js

import React, { useState } from 'react';
import './Cadastro.css'; // Importa o arquivo de estilos

function Cadastro() {
    // Define os estados para os campos do formulário
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione aqui a lógica para enviar os dados para o backend
        if (password === confirmPassword) {
            alert('Cadastro realizado com sucesso!');
            // Resetar os campos do formulário
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } else {
            alert('As senhas não correspondem.');
        }
    };

    return (
        <div className="form-container">
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label>Usuário</label>
                </div>
                <div className="input-box">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label>Senha</label>
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <label>Confirmar Senha</label>
                </div>
                <button type="submit" className="btn">Cadastrar</button>
            </form>
            <p className="register-link">
                Já tem uma conta? <a href="/login">Faça login</a>
            </p>
        </div>
    );
}

export default Cadastro;
