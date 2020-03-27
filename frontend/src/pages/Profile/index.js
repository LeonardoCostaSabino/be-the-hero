import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from "react-icons/fi";

import LogoImg from "../../assets/logo.svg";

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt='Be the Hero'/>
                <span>Bem vinda, APAD</span>

                <Link className='button' to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color='#E02041'/>
                </button>
            </header>
        </div>
    );
}