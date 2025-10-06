import CardArtigo from "../components/CardArtigo/CardArtigo";
import { artigos } from "../data/dados";

export default function Artigo() {
    return(
        <div className="artigo-page">
            {artigos.map((artigo) => (
                <CardArtigo 
                    key={artigo.id}
                    id={artigo.id}
                    titulo={artigo.titulo}
                    resumo={artigo.resumo}
                    conteudoCompleto={artigo.conteudoCompleto}
                />
            ))}
        </div>
    )
}
