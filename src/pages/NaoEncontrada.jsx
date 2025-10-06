import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom'

export default function NaoEncontrada() {
    const location = useLocation();
    return(
        <div className="nao-encontrada-page">
            <h1>Página Não Encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
            <p>URL inválida: {location.pathname}</p>
            <Link to="/">Voltar para a página inicial</Link>
        </div>
    )
}
