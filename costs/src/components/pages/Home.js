import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import { Link } from 'react-router-dom'
import BotaoNovoProjeto from '../layout/BotaoNovoProjeto'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Começe a gerenciar os seus projetos agora mesmo!</p>
            <BotaoNovoProjeto to='/NovoProjeto' text='Criar Projeto' />
            <img src={savings} alt='Costs'></img>
        </section>
    )
}

export default Home