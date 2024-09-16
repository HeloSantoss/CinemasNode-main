import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Opcional: Adicione um arquivo de estilos para o login

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar a requisição de login
        axios.post('http://localhost:5000/login', { email, password })
            .then(response => {
                // Redireciona ou realiza ações após o login bem-sucedido
                console.log(response.data);
            })
            .catch(error => {
                setError('Falha ao fazer login. Verifique suas credenciais.');
                console.error(error);
            });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="input-box">
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Senha"
                        required
                    />
                    <label>Senha</label>
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="btn">Login</button>
                <p className="register-link">
                    Não tem uma conta? <a href="/cadastro">Cadastre-se</a>
                </p>
            </form>
        </div>
    );
}

export default Login;
