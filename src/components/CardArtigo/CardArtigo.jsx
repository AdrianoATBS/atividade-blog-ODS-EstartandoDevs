import { Link } from "react-router-dom"

export default function CardArtigo({ titulo, resumo, id }) {
    return (
        <div className="card-artigo">
            <h2>{titulo}</h2>
            <p>{resumo}</p>
            <Link to={`/artigo/${id}`}>Leia mais</Link>
        </div>
    )
}