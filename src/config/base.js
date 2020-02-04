/*import Rebase from 're-base';

const base = Rebase.createClass ({ 
    apiKey: "AIzaSyC1hsTC5frNf4XP_sucMG-1Ogz6LtkihMs",
    authDomain: "chatbox-7c93e.firebaseapp.com",
    databaseURL: "https://chatbox-7c93e.firebaseio.com"
});

export default base;*/
import firebase from "firebase";

var config = {
    apiKey: "AIzaSyC1hsTC5frNf4XP_sucMG-1Ogz6LtkihMs",
    authDomain: "chatbox-7c93e.firebaseapp.com",
    databaseURL: "https://chatbox-7c93e.firebaseio.com"
  };
firebase.initializeApp(config);
const db = firebase.database();
export default db;

