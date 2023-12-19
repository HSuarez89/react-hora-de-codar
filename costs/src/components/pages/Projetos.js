import { useLocation } from "react-router-dom"
import Mensagem from "../layout/Mensagem"
import styles from './Projetos.module.css'
import Container from '../layout/Container'
import BotaoNovoProjeto from "../layout/BotaoNovoProjeto"
import CardProjeto from "../projetos/CardProjeto"
import { useState, useEffect } from "react"
import Loading from "../layout/Loading"

function Projetos(){
    const [projetos, setProjetos] = useState([])
    const location = useLocation()
    const [removeLoading, setRemoveLoading] = useState(false)
    const [mensagemProjeto, setMensagemProjeto] = useState('')
    let mensagem = ''
    if(location.state){
        mensagem = location.state.mensagem
    }
    useEffect(() =>{
        setTimeout(() => {
        fetch('http://localhost:5000/projetos',{
            method: 'GET',
            headers: {'Content-Type': 'application/json',},
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setProjetos(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
        }, 1000)
    }, [])

    function removerProjeto(id) {
        fetch(`http://localhost:5000/projetos/${id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
        }).then(() => {
            setProjetos(projetos.filter((projeto) => projeto.id !== id))
            setMensagemProjeto('Projeto removido com sucesso!')
        })
        .then((resp) => resp.json())
        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.projeto_container}>
            <div className={styles.titulo_container}>
            <h1>Meus Projetos</h1>
            <BotaoNovoProjeto to='/NovoProjeto' text='Criar Projeto' />
            </div>
            {mensagem && <Mensagem type='sucesso' msg={mensagem} />}
            {mensagemProjeto && <Mensagem type='sucesso' msg={mensagemProjeto} />}
            <Container customClass='start'>
                {projetos.length > 0 &&
                    projetos.map((projeto) =>(
                        <CardProjeto 
                        name={projeto.name}
                        id= {projeto.id}
                        orcamento = {projeto.orcamento}
                        categoria = {projeto.categoria.nome}
                        key = {projeto.id} 
                        handleRemove = {removerProjeto} />
                    ))}
                {!removeLoading && <Loading />}
                {removeLoading && projetos.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
        
    )
}

export default Projetos