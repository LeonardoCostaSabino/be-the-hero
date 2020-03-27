import React , { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

import {FiArrowLeft} from "react-icons/fi";
import './style.css';

import ImgLogo from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongID = localStorage.getItem('ongID');

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongID
                }
            })
            history.push('/profile');
        }catch(err){
            alert('Caso não foi adicionado, tente novamente');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={ImgLogo} alt='Be the Hero'/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className='back-link' to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Titulo do caso" 
                    />
                    <textarea 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder='Descrição'
                    />
                    <input 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Valor em reais" 
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}