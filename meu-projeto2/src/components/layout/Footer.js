import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return(
        <footer>
            <h2>Rodapé da página</h2>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p>Nosso rodapé</p>
        </footer>
    )
}

export default Footer