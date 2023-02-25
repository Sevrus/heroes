import {Link} from "react-router-dom";

const classLink = 'main-content__nav__link';

const Content = () => {
  return(
      <main className="main-content">
          <nav className="main-content__nav">
              <Link className={classLink} to={`/`}>Accueil</Link>
              <Link className={classLink} to={`/personnage`}>Personnage</Link>
              <Link className={classLink} to={`/scenario`}>Scénario</Link>
              <Link className={classLink} to={`/contact`}>Contact</Link>
          </nav>
      </main>
  )
}

export default Content;