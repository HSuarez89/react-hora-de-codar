import {Link} from 'react-router-dom'
import styles from './BotaoNovoProjeto.module.css'

function BotaoNovoProjeto({to, text}){
    return(
        <Link className={styles.botao} to={to}>{text}</Link>
    )
}

export default BotaoNovoProjeto