import orc from '../assets/img/img-orc.png';

const paragraph = 'main-accueil__section__articles__p';

const Accueil = () => {
    return (
        <main className="main-accueil">
            <section className="main-accueil__section">
                <article className="main-accueil__section__articles first">
                    <h2 className="main-accueil__section__articles__title">Bonjour aventurier,</h2>
                    <p className={paragraph}>
                        Bienvenue sur le site dont vous êtes le héros.
                    </p>
                    <p className={paragraph}>
                        Vous avez soif d’aventures, vous aimez le monde médiéval fantastique, les combats épiques, les
                        monstres extraordinaires et vous avez toujours rêvé d’incarner un héros ? vous êtes sur le bon
                        site !
                    </p>
                    <p className={paragraph}>
                        Nous vous proposons d’incarner le héro de votre choix, en choisissant sa spécialité, ses
                        compétences, sa race, mais aussi en tirant ses caractéristiques. Nous mettons aussi à votre
                        disposition un large choix d’avatars, un générateur de noms et de caractéristiques physiques.
                    </p>
                    <p className={paragraph}>
                        Votre personnage construit, vous êtes ainsi prêt à braver les dangers et parcourir les étendues
                        fantastiques et sombres de Milestone !
                    </p>
                </article>
                <hr className="main-accueil__section__line"/>
                <article className="main-accueil__section__articles second">
                    <div className="main-accueil__section__articles__how">
                        <p>Comment dois-je faire pour créer mon personnage et partir à l’aventure ?</p>
                        <p>Pour cela, rien de plus simple, il vous suffit de :</p>
                        <ol>
                            <li>vous inscrire sur le site</li>
                            <li>créer votre personnage</li>
                            <li>choisir votre scénario</li>
                            <li>partir à l'aventure !!</li>
                        </ol>
                    </div>
                    <img src={orc} alt="Un orc avec une hache"/>
                </article>
            </section>
        </main>
    )
}

export default Accueil;