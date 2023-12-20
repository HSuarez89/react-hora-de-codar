import styles from './Projeto.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Projeto(){
    const { id } = useParams()
    const [projeto, setProjeto] = useState([])

    useEffect(() => {
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
    }, [id])
    
    return(
            <p>{projeto.name}</p>
    )
}

export default Projeto