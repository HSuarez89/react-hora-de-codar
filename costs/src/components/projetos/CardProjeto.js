import styles from './CardProjeto.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function CardProjeto({id, name, orcamento, categoria, handleRemove}) {

    const remover = (e) => {
        e.preventDefault()
        handleRemove(id)
    }
    return (
        <div className={styles.card_projeto}>
            <h4>{name}</h4>
            <p><span>Orçamento:</span> R${orcamento}</p>
            <p className={styles.text_categoria}><span className={`${styles[categoria.toLowerCase()]}`}></span>{categoria}</p>
            <div className={styles.acoes_card_projeto}>
                <Link to={`/projeto/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remover}>
                    <BsFillTrashFill /> Remover
                </button>
            </div>
        </div>
    )
}

export default CardProjeto