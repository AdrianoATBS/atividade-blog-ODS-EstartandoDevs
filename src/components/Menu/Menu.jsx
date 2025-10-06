import { Link } from 'react-router-dom'

export default function Menu() {
    return(
        <div>
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/artigos">Artigos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}