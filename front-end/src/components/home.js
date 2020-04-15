import React, {Component} from 'react';
import '../App.css'; 
import config from '../config/basicConfig'
 
import axios from 'axios';
 

let host = config.host;
let port = config.back_end_port;
let url = host + ':' + port;

class Home extends Component{
    constructor(props){
        super(props);
        this.state = { 
        } 
    }

    componentWillMount(){
        let getInfoUrl = ''
        let user = ''
 
    }
 
    render(){
 
    return(
        <div> 
        <div class="col-md-12 ">
            {/* {redirectVar} */}
            <div class="cprofile_card img" style = {{'width':'100%'}}>
            <img style = {{'width':'30%'}} class='img' src={require('../img/corona.jpg')} alt="." ></img>
            
                <h3 class="center">Select States </h3>
                <div class = "img">
                 <input type="text" class="inputForm" aria-label="..." style = {{'width':'92%'}}>
                 </input>
                 <button type="button" class="glyphicon glyphicon-search"  style = {{'margin-left':'20px',"height": "34px","border-radius": "10px"}}></button>
                
                 
                </div>
                </div>
            </div> 
             
        </div>
        )
    }
}

export default Home;