//REACT
import React from 'react';

//COMPONENT
import Formulaire from './Formulaire';
import Message from './Message';
import base from '../../config/base';

//CSS
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
<<<<<<< HEAD:src/Components/App.js
=======
import '../../Style/animation.css';
>>>>>>> 78aab4993215a571878cda4c5732a4cdf2cf5391:src/Components/Chat/App.js

class App extends React.Component {

    //STATES
    state = {
        messages: {}
    }

    //CYCLE DE VIE
    componentWillMount() {
        this.ref = base.syncState('/', {
            context: this,
            state: 'messages'
        });
    }
    componentDidUpdate(){
        //mettre le scroll en bas
        this.messages.scrollTop = this.messages.scrollHeight;
    }

    //FONCTIONS
    addMessage = (message) => {
        //copier le state
        const messages = {...this.state.messages};
        //ajouter le message avec une clé timestamp
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;
        //on suprime si plus de 10 messages
        Object.keys(messages).slice(0, -10).map((key) => messages[key] = null );
        //mettre a jour notre state
        this.setState({messages})
    };

    isUser = (pseudo) => {
        return pseudo === this.props.params.pseudo;
    };

    render() {

        const messages = Object
            .keys(this.state.messages)
            .map( (key) => {
                return <Message
                            key={key}
                            details={this.state.messages[key]}
                            isUser = { this.isUser } 
                        />
                }
            );

        return (
            <div className="box">
                <div>
                    <div 
                        className="messages"
                        ref = { (input) => this.messages = input}
                    >
                        <ReactCSSTransitionGroup
                            component="div"
                            className="message"
                            transitionName="message"
                            transitionEnterTimeout={200}
                            transitionLeaveTimeout={200}
                        >
                            {messages}
                        </ReactCSSTransitionGroup>
                    </div>
                    <Formulaire 
                        addMessage={this.addMessage}
                        pseudo={this.props.params.pseudo}
                        length= {140} 
                    />
                </div>
            </div>
        )
    }
<<<<<<< HEAD:src/Components/App.js
    /*static propTypes = {
=======

    static propTypes = {
>>>>>>> 78aab4993215a571878cda4c5732a4cdf2cf5391:src/Components/Chat/App.js
        params: React.PropTypes.object.isRequired
    };*/
}

export default App;