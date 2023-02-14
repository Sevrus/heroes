import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div>
                <p>Politique de Confidentialité|Conditions d'utilisation</p>
                <p>COPYRIGHT © Christophe Bodeau TOUS DROITS Réservés</p>
            </div>
            <nav>
                <Link to={`/`}>ACCUEIL</Link>
                <Link to={`/personnage`}>PERSONNAGE</Link>
                <Link to={`/scenario`}>SCÉNARIO</Link>
                <Link to={`/contact`}>CONTACT</Link>
            </nav>
        </footer>
    )
}

export default Footer;