import React from 'react';
import './styles.css';

function DevItem({ dev }) { //desestruturando as props para receber apenas dev delas

    return (
        <li className="dev-item">
            <header>
            <img src={dev.avatar_url} alt={dev.name}/>
            <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span> {/*Juntando o array usando virgula e espaço */}
            </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
        </li>
    );
}

export default DevItem;