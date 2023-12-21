import styles from './Projeto.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'

function Projeto(){
    const { id } = useParams()
    const [projeto, setProjeto] = useState([])
    const [mostraFormulario, setMostraFormulario] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projetos/${id}`,{ 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            }).then((resp) => resp.json())
            .then((data) => {
                setProjeto(data)
            })
            .catch((err) => console.log(err))
            }, 1000)
        }, [id])

        function chamaFormularioProjeto(){
            setMostraFormulario(!mostraFormulario)
        }
    
    return(
            <>
            {projeto.name ? (
                <div className={styles.detalhes_projeto}>
                    <Container className='column'>
                        <div className={styles.detalhes_container}>
                            <h1>Projeto: {projeto.name}</h1>
                            <button className={styles.botao} onClick={chamaFormularioProjeto}>
                                {!mostraFormulario ? 'Editar Projeto' : 'Fechar'}
                            </button>
                            {!mostraFormulario ? (
                                <div className={styles.projeto_info}>
                                    <p>
                                        <span>Catergoria: </span> {projeto.categoria.nome}
                                    </p>
                                    <p>
                                        <span>Toral de Orçamento: </span> R${projeto.orcamento}
                                    </p>
                                    <p>
                                        <span>Toral Utilizado: </span> R${projeto.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.projeto_info}>
                                    <p>Detalhes do Projeto</p>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ): (
                <Loading />
            )}
            </>
    )
}

export default Projeto