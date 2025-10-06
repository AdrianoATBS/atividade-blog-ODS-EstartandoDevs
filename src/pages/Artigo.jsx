import { useParams } from "react-router-dom";
import { artigos } from "../data/dados";

export default function Artigos() {
  const {id} = useParams();
  const artigo = artigos.find((artigo) => artigo.id === parseInt(id));
  if(!artigo) {
    return <div>Artigo não encontrado</div>
  } 
  return(
        <div className="artigo-completo">
            <h1>{artigo.titulo}</h1>
            <p>{artigo.conteudoCompleto}</p>
        </div>
        
    )
}
