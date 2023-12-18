import {useNavigate} from 'react-router-dom'
import FormularioProjeto from '../projetos/FormularioProjeto'
import styles from './NovoProjeto.module.css'

function NovoProjeto(){
    const navigate = useNavigate()
    function criarProjeto(projeto){
        // inicializando custos e serviços
        projeto.cost = 0
        projeto.servicos = []

        fetch('http://localhost:5000/projetos', {
            method: "POST",
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify(projeto)
        }).then((resp) => resp.json())
        .then((data) => {console.log(data);
        navigate('/projetos', {state: {mensagem: 'Projeto criado com sucesso!'}})})
        .catch((err) => console.log(err))
    }
    return (
        <div className={styles.novoprojeto_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <FormularioProjeto handleSubmit={criarProjeto} btnText='Criar Projeto'/>
        </div>
    )
}

export default NovoProjeto