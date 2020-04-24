import React,{Component} from 'react';
import {Link} from 'react-router-dom';

//create the Navbar Component
class Navbar extends Component {
    constructor(props){
        super(props); 
    } 
    render(){
        //if Cookie is set render Logout Button 
        return(
            <div> 
            <nav class="navbar navbar-default navbar-static-top" style = {{"z-index":'9999'}}>
                <div class="container-fluid">
                    <div class="navbar-header">
                        <Link class="navbar-brand" to="/home">COVID-19</Link>
                    </div> 
                    <ul class="nav navbar-nav navbar-right"> 
                        <li><Link to="/home" class = "glyphicon glyphicon-list-alt">USA</Link></li>
                        <li><Link to="/world" class = "glyphicon glyphicon-map-marker">World</Link></li>
                        <li><Link to="/predict" class = "glyphicon glyphicon-question-sign">Predict</Link></li>

                    </ul>
                    
                </div>
            </nav>
        </div>
        )
    }
} 

export default Navbar; 