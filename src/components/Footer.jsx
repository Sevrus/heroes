import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="global-footer">
            <div className="global-footer__copyright">
                <p className="global-footer__copyright--secondary-color">Politique de Confidentialité|Conditions d'utilisation</p>
                <p>COPYRIGHT © Christophe Bodeau TOUS DROITS Réservés</p>
            </div>
            <nav className="global-footer__nav">
                <Link to={`/`}>ACCUEIL</Link>
                <Link to={`/personnage`}>PERSONNAGE</Link>
                <Link to={`/scenario`}>SCÉNARIO</Link>
                <Link to={`/contact`}>CONTACT</Link>
            </nav>
        </footer>
    )
}

export default Footer;