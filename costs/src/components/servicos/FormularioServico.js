import { useState } from 'react'
import Input from '../formulario/Input'
import Botao from '../formulario/Botao'
import styles from '../projetos/FormularioProjeto.module.css'

function FormularioServico({handleSubmit, btnText, dadosProjeto}){

    const [servico, setServico] = useState()

    function submit(e){
        e.preventDefault()
        dadosProjeto.servicos.push(servico)
        handleSubmit(dadosProjeto)
    }

    function handleChange(e){
        setServico({ ...servico, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={submit} className={styles.formulario}>
            <Input type='text'
            text="Nome do serviço"
            placeholder="Insira o nome do serviço"
            name='name'
            handleOnChange={handleChange}/>
            <Input type='number'
            text="Custo do serviço"
            placeholder="Insira o valor do serviço"
            name='cost'
            handleOnChange={handleChange}/>
            <Input type='text'
            text="Descrição do serviço"
            placeholder="Descreva o serviço"
            name='desc'
            handleOnChange={handleChange}/>
            <Botao text={btnText} />
        </form>
    )
}

export default FormularioServico