import { useLocation } from "react-router-dom"
import Mensagem from "../layout/Mensagem"
import styles from './Projetos.module.css'
import Container from '../layout/Container'
import BotaoNovoProjeto from "../layout/BotaoNovoProjeto"

function Projetos(){
    const location = useLocation()
    let mensagem = ''
    if(location.state){
        mensagem = location.state.mensagem
    }
    return(
        <div className={styles.projeto_container}>
            <div className={styles.titulo_container}>
            <h1>Meus Projetos</h1>
            <BotaoNovoProjeto to='/NovoProjeto' text='Criar Projeto' />
            </div>
            {mensagem && <Mensagem type='sucesso' msg={mensagem} />}
            <Container customClass='start'>
                <p>Projetos</p>
            </Container>
        </div>
        
    )
}

export default Projetos