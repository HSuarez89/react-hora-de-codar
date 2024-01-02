import styles from '../projetos/CardProjeto.module.css'
import { BsFillTrashFill } from 'react-icons/bs'

function CardServico({id, name, cost, desc, handleRemove}){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }

    return(
        <div className={styles.card_projeto}>
            <h4>{name}</h4>
            <p><span>Custo total: </span>R${cost}</p>
            <p>{desc}</p>
            <div className={styles.acoes_card_projeto}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    )
}

export default CardServico