import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/costs_logo.png' 

function NavBar(){
    return(
        <nav class={styles.navbar}>
            <Container>
                <ul class={styles.list}>
                    <li class={styles.item}><Link to='/'><img src={logo} alt='Costs' /></Link></li>
                    <li class={styles.item}><Link to='/'>Home</Link></li>
                    <li class={styles.item}><Link to='/projetos'>Projetos</Link></li>
                    <li class={styles.item}><Link to='/contato'>Contato</Link></li>
                    <li class={styles.item}><Link to='/empresa'>Empresa</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar