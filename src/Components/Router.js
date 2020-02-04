import React,{Component} from "react";
//import {Route} from "react-router-dom";
import { Switch, Route } from 'react-router';
import {BrowserRouter} from "react-router-dom";

import Connexion from "./Connexion";
import App from "./App";

class Router extends Component{
   render(){
       return(
           <BrowserRouter>
               <Switch>
                   <Route exact path="/" component={Connexion} />
                   <Route exact path="/pseudo/:pseudo" component={App} />
               </Switch>
            </BrowserRouter>   
            
       );
   }
}

export default Router;