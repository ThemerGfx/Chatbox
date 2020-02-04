//REACT
import React from 'react';

class Connexion extends React.Component {
    constructor(props) {
    super(props)
      this.state = {
        pseudo: ''
      }
    }

    goToChat = event => {
        event.preventDefault();
        console.log(this.state.pseudo)
        //1 recuéprer valeur psuedo
        this.props.history.push(`/app/${this.state.pseudo}`)
        //2 Redirection app/:psuedo
       
        //recupeper le pseudo
        //const pseudo = this.pseudoInput.value;
        //changer l'url
       // this.context.router.transitionTo(`/pseudo/${pseudo}`);
    };

    handlePseudo = event => {
      this.setState({
        pseudo:  event.target.value
      })
    }

    render() {
        return (
            <div className="connexionBox" >
                <form className="connexion" onSubmit={this.goToChat}>
                    <input 
                        type="text"
                        name="pseudo"
                        placeholder="Pseudo"
                        required
<<<<<<< HEAD
                        onChange={this.handlePseudo}
                        />
                    <button type="submit">Submit</button>
=======
                        ref={input => {this.pseudoInput = input}} 
                    />
                    <button type="submit">Go!</button>
>>>>>>> 78aab4993215a571878cda4c5732a4cdf2cf5391
                </form>
            </div>
        )
    }
   /* static contextTypes = {
        router: React.PropTypes.object
    }*/
}

export default Connexion;