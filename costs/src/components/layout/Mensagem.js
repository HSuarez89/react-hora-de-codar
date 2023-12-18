import {useState, useEffect} from 'react'
import styles from './Mensagem.module.css'

function Mensagem({type, msg}){
    const [visivel, setVisivel] = useState(false)
    useEffect(() => {
        if(!msg){
            setVisivel(false)
            return
        }
        setVisivel(true)
        const timer = setTimeout(() => {
            setVisivel(false)
        }, 3000)
        return () => {clearTimeout(timer)}
    }, [msg])
    return(
        <>
        {visivel && (
            <div className={`${styles.mensagem} ${styles[type]}`}>
                {msg}
            </div>
        )}
        </>
    )
}

export default Mensagem