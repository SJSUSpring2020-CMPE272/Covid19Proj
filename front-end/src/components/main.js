import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Navbar from './Nav/Navbar';
import Home from './home';
import World from './World'
import predict from './predict'
 

class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/" component={Navbar}/> 
                <Route path="/home" component={Home}/> 
                <Route path="/world" component={World}/> 
                <Route path="/predict" component={predict}/> 
                

            </div>
        )
    }
}
//Export The Main Component
export default Main;