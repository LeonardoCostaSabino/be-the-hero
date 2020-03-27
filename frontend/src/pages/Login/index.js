import React from 'react';
import {Link} from 'react-router-dom';

import {FiLogIn} from "react-icons/fi";
import './style.css';

import ImgLogo from '../../assets/logo.svg';
import imgHeroes from '../../assets/heroes.png';

export default function Login(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={ImgLogo} alt="Be The Hero"/>
                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID"/>
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