import avatar from '../assets/img/avatar.png';
import dice from '../assets/img/dice.svg';

const Personnage = () => {
  const altDice = "Un dé à 12 faces";
  return(
<section>
    <h2>CRÉATION DE PERSONNAGE</h2>
    <div>
      <img src={avatar} alt="Image de votre avatar"/>
      <div>
        <div>
          <input type="text" placeholder="NOM"/>
          <img src={dice} alt={altDice}/>
        </div>
        <div>
          <input type="text" placeholder="PRÉNOM"/>
          <img src={dice} alt={altDice}/>
        </div>
        <div>
          <div>
            <label></label>
            <input type="number"/>
            <img src={dice} alt={altDice}/>
          </div>
          <div>
            <label></label>
            <input type="number"/>
            <img src={dice} alt={altDice}/>
          </div>
          <div>
            <label></label>
            <input type="number"/>
            <img src={dice} alt={altDice}/>
          </div>
          <div>
            <p>Agilité : défini votre capacité à attaquer</p>
            <p>Constitution : défini votre capacité à résister aux diverses agressions</p>
            <p>PV : points de vie</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <article>
        <h3>ÉQUIPEMENT</h3>
        <p>Au début de l’aventure vous démarrez avec 1 épée, 2 rations et 3 pièces d’or.</p>
        <p>Il vous sera possible d’étoffer votre équipement au fil de vos aventures, cependant vous n’avez au début qu’un petit sac qui ne contient que 6 slots. Même s’il est possible de trouver des sac plus gros, il vous faudra faire très attention à la gestion de votre équipement.</p>
      </article>
      <article>
        <h3>COMPÉTENCES</h3>
        <p>Au début de l’aventure vous démarrez avec 1 épée, 2 rations et 3 pièces d’or.</p>
        <p>Il vous sera possible d’étoffer votre équipement au fil de vos aventures, cependant vous n’avez au début qu’un petit sac qui ne contient que 6 slots. Même s’il est possible de trouver des sac plus gros, il vous faudra faire très attention à la gestion de votre équipement.</p>
      </article>
    </div>
  <button>VALIDER</button>
</section>
  )
}

export default Personnage;