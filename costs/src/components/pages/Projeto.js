import {v4 as uuidv4} from 'uuid'
import styles from './Projeto.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import FormularioProjeto from '../projetos/FormularioProjeto'
import Mensagem from '../layout/Mensagem'
import FormularioServico from '../servicos/FormularioServico'
import CardServico from '../servicos/CardServico'

function Projeto(){
    const { id } = useParams()
    const [projeto, setProjeto] = useState([])
    const [mostraFormulario, setMostraFormulario] = useState(false)
    const [mostraFormularioServico, setMostraFormularioServico] = useState(false)
    const [mensagem, setMensagem] = useState()
    const [tipo, setTipo] = useState()
    const [servicos, setServicos] = useState([])

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
                setServicos(data.servicos)
            })
            .catch((err) => console.log(err))
            }, 1000)
        }, [id])

        function editPost(projeto){
            setMensagem('')
            if(projeto.orcamento < projeto.cost){
                setMensagem('O custo do projeto não pode ser maior que seu orçamento total.')
                setTipo('erro')
                return(false)
            }
            fetch(`http://localhost:5000/projetos/${projeto.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(projeto)
            }).then((resp) => resp.json())
            .then((data) =>{
                setProjeto(data)
                setMostraFormulario(false)
                setMensagem('Projeto atualizado com sucesso!')
                setTipo('sucesso')
            })
            .catch((err) => console.log(err))
        }

        function criarServico(projeto){
            setMensagem('')
            const ultimoServico = projeto.servicos[projeto.servicos.length - 1]
            ultimoServico.id = uuidv4
            const custoUltimoServico = ultimoServico.cost
            const novoCusto = parseFloat(projeto.cost) + parseFloat(custoUltimoServico)

            if(novoCusto > parseFloat(projeto.orcamento)){
                setMensagem('Orçamento insuficiente. Verifique os valores dos serviços.')
                setTipo('erro')
                projeto.servicos.pop()
                return(false)
            }
            projeto.cost = novoCusto
            fetch(`http://localhost:5000/projetos/${projeto.id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(projeto)
            }).then((resp) => resp.json())
            .then((data) => {
                setMostraFormularioServico(false)
            })
            .catch((err) => console.log(err))
        }

        function removeServico(){

        }

        function chamaFormularioProjeto(){
            setMostraFormulario(!mostraFormulario)
        }

        function chamaFormularioServico(){
            setMostraFormularioServico(!mostraFormularioServico)
        }
    
    return(
            <>
            {projeto.name ? (
                <div className={styles.detalhes_projeto}>
                    <Container className='column'>
                        {mensagem && <Mensagem type={tipo} msg={mensagem} />}
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
                                        <span>Total de Orçamento: </span> R${projeto.orcamento}
                                    </p>
                                    <p>
                                        <span>Total Utilizado: </span> R${projeto.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.projeto_info}>
                                    <FormularioProjeto handleSubmit={editPost} btnText='Concluir edição'  dadosProjeto={projeto} />
                                </div>
                            )}
                        </div>
                        <div className={styles.servicos_form_container}>
                                <h2>Adicione um serviço:</h2>
                                <button className={styles.botao} onClick={chamaFormularioServico}>
                                {!mostraFormularioServico ? 'Adicionar Serviço' : 'Fechar'}
                                </button>
                                <div className={styles.projeto_info}>
                                    {mostraFormularioServico && 
                                        <FormularioServico
                                        handleSubmit={criarServico}
                                        btnText='Adicionar Serviço'
                                        dadosProjeto={projeto}
                                        />
                                    }
                                </div>
                        </div>
                        <h2>Serviços:</h2>
                        <Container customClass='start'>
                            {servicos.length > 0 &&
                                servicos.map((servico) => (
                                    <CardServico 
                                        id={servico.id}
                                        name={servico.name}
                                        cost={servico.cost}
                                        desc={servico.desc}
                                        key={servico.id}
                                        handleremove={removeServico}
                                    />
                                ))
                            }
                            {servicos.legth === 0 && <p>Não há serviços cadastrados!</p>}
                        </Container>
                    </Container>
                </div>
            ): (
                <Loading />
            )}
            </>
    )
}

export default Projeto