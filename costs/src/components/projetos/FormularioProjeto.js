import {useEffect, useState} from 'react'
import Botao from '../formulario/Botao'
import Input from '../formulario/Input'
import Select from '../formulario/Select'
import styles from './FormularioProjeto.module.css'

function FormularioProjeto({handleSubmit, btnText, dadosProjeto}){
    const [categoria, setCategoria]= useState([])
    const [projeto, setProjeto] = useState(dadosProjeto || {})

    useEffect(() =>{
        fetch('http://localhost:5000/categorias', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((resp) => resp.json())
    .then((data) => {setCategoria(data)})
    .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(projeto)
    }

    function handleChange(e){
        setProjeto({ ...projeto, [e.target.name]: e.target.value})
    }

    function handleCategoria(e){
        setProjeto({ ...projeto, categoria: {
            id: e.target.value,
            nome: e.target.options[e.target.selectedIndex].text,
        },})
    }

    return (
        <form onSubmit={submit} className={styles.formulario}>
            <Input type='text' text='Nome do projeto' name='name' placeholder='Insira o nome do projeto' handleOnChange={handleChange} value={projeto.name ? projeto.name : ''}/>
            <Input type='number' text='Orçamento do projeto' name='orcamento' placeholder='Insira o orçamento total' handleOnChange={handleChange} value={projeto.orcamento ? projeto.orcamento : ''}/>
            <Select name='id_categoria' text='Selecione a categoria' options={categoria} handleOnChange={handleCategoria} value={projeto.categoria ? projeto.categoria.id : ''}/>
            <Botao text={btnText}/>
        </form>
    )
}

export default FormularioProjeto