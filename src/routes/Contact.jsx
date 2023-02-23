const Contact = () => {
  return(
    <form>
        <div>
            <label>Votre identifiant</label>
            <input type="text"/>
        </div>
        <div>
            <label>Votre mail</label>
            <input type="mail"/>
        </div>
        <textarea placeholder="Écrivez votre message ici ..."></textarea>
        <button>ENVOYER</button>
    </form>
  )
}

export default Contact;