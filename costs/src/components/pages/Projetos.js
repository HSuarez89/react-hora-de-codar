import { useLocation } from "react-router-dom"
import Mensagem from "../layout/Mensagem"

function Projetos(){
    const location = useLocation()
    let mensagem = ''
    if(location.state){
        mensagem = location.state.mensagem
    }
    return(
        <div>
            <h1>Meus Projetos</h1>
            {mensagem && <Mensagem type='sucesso' msg={mensagem} />}
        </div>
        
    )
}

export default Projetos