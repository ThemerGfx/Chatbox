//REACT
import React from 'react';

class Formulaire extends React.Component {

    state = {
        length: this.props.length
    }

    createMessage = (event) => {
        event.prevenetDefault();
        //recuperer les msg écrit dans une variable
        const message = {
            message: this.message.value,
            pseudo: this.props.pseudo
        };
        //envoyer le msg dans une props
        this.props.addMessage(message);

        //reset le msg écrit et déjà envoyer
        this.messageForm.reset();
        const length = this.props.length;
        this.setState({ length });
    };

    compteur = (event) => {
        const length = this.props.length - this.message.value.length;
        console.log (length);
        this.setState({ length });
    };

    render() {
        return (
            <form 
                className="form" 
                onSubmit={(e) => this.createMessage(e)}
                ref={input => this.messageForm = input}
                onChange = { (e) => this.compteur(e) }
            >
                <textarea
                    required
                    maxLength={this.props.length}
                    ref={input  => this.message = input}
                >
                </textarea>
                <div className="info">
                    {this.state.length}
                </div>
                <button type="submit">Envoyer!</button>    
            </form>
        )
    }
   /* static propTypes = {
        addMessage: React.PropTypes.func.isRequired,
        pseudo: React.PropTypes.string.isRequired,
        length: React.PropTypes.number.isRequired
    };*/
}

export default Formulaire;