import {Link} from "react-router-dom";

const Content = () => {
  return(
      <main>
        <div>
            <header>
                <nav>
                    <Link to={`/`}>Accueil</Link>
                    <Link to={`/personnage`}>Personnage</Link>
                    <Link to={`/scenario`}>Scénario</Link>
                    <Link to={`/contact`}>Contact</Link>
                </nav>
            </header>
        </div>
      </main>
  )
}

export default Content;