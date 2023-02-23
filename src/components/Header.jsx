import shield from '../assets/img/shield-1.png';
import start from '../assets/img/start-button-1.svg'

const Header = () => {
  return(
      <header className="header">
          <div className="header__title">
            <img src={shield} alt="Un bouclier" className="header__title--resize"/>
            <h1 className="header__title--h1Size">Heroes Journey</h1>
          </div>
          <div className="header__connect">
              <div className="header__connect__start">
                  <img src={start} alt="Logo start" />
                  <span>SE CONNECTER</span>
              </div>
              <button className="header__connect__inscription">S'inscrire</button>
          </div>
      </header>
  )
}

export default Header;