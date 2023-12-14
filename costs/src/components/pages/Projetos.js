import {useSearchParams} from 'react-router-dom'
import Mensagem from "../layout/Mensagem"

function Projetos(){
    const [parametros] = useSearchParams()
    let mensagem = ''
    if(parametros.state) {
        mensagem = parametros.state.mensagem
    }
    return(
        <div>
            <h1>Meus Projetos</h1>
            {mensagem && <Mensagem type={'sucesso'} msg={mensagem} />}
        </div>
        
    )
}

export default Projetos