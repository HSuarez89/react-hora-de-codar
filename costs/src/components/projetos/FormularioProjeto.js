import {useEffect, useState} from 'react'
import Botao from '../formulario/Botao'
import Input from '../formulario/Input'
import Select from '../formulario/Select'
import styles from './FormularioProjeto.module.css'

function FormularioProjeto({btnText}){
    const [categoria, setCategoria]= useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/categorias', {
        method: 'GET',
        headers: {
            'Content-Type': 'application.json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {setCategoria(data)})
    .catch((err) => console.log(err))
    }, [])
    return (
        <form className={styles.formulario}>
            <Input type='text' text='Nome do projeto' name='name' placeholder='Insira o nome do projeto' />
            <Input type='number' text='Orçamento do projeto' name='orçamento' placeholder='Insira o orçamento total' />
            <Select name='id_categoria' text='Selecione a categoria' options={categoria}/>
            <Botao text={btnText}/>
        </form>
    )
}

export default FormularioProjeto