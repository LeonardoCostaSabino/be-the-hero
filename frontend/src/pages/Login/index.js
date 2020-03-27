import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';
import {FiLogIn} from "react-icons/fi";
import './style.css';

import ImgLogo from '../../assets/logo.svg';
import imgHeroes from '../../assets/heroes.png';

export default function Login(){

    const [id, setID] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongID', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }catch(err){
            alert('Falha no Login, tente Novamente');
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={ImgLogo} alt="Be The Hero"/>
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input 
                        value={id}
                        onChange ={e => setID(e.target.value)}
                        placeholder="Sua ID"
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className='back-link' to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho Cadastro
                    </Link>
                </form>
            </section>

            <img src={imgHeroes} alt="Heroes"/>
        </div>
    );
}