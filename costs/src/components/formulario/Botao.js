import styles from './Botao.module.css'

function Botao({text}){
    return(
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default Botao