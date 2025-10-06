import { artigos } from '../data/dados';
import {Link} from 'react-router-dom';
import React from 'react';

export default function Home() {
    const destaque = artigos.slice(0, 3);

    return(
        <div className='home'>
            <h1>Bem-vindo ao Blog sobre os ODS!</h1>
            <p>Este é um espaço dedicado a informar, educar e conscientizar sobre o ODS 16: Paz, Justiça e Instituições Eficazes.</p>
            <p>Aqui você encontrará artigos detalhados, notícias e informações importantes que mostram como a paz, a justiça e instituições eficientes são fundamentais para um mundo mais justo e seguro para todos.</p>
            <p>Explore nossas páginas para aprender mais:</p>

            <h2>Artigos em destaque</h2>
            <div className='artigos-destaque'>
                <ul>
                    {destaque.map(artigo => (
                        <li key={artigo.id}>
                            <Link to={`/artigo/${artigo.id}`}>{artigo.titulo}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <p> Nosso objetivo é que você compreenda a importância de cada ação e como podemos construir juntos um futuro mais pacífico e justo.</p>
        </div>
    )
}
