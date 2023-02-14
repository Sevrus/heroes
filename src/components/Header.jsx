import shield from '../assets/img/shield-1.png';
import start from '../assets/img/start-button-1.svg'

const Header = () => {
  return(
      <header>
          <div>
            <img src={shield} alt="Un bouclier" />
            <h1>Le site dont vous êtes le héros</h1>
          </div>
          <div>
              <div>
                  <img src={start} alt="Logo start" />
                  <span>SE CONNECTER</span>
              </div>
              <button>S'inscrire</button>
          </div>
      </header>
  )
}

export default Header;