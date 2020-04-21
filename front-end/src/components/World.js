import React, {Component} from 'react';
import '../App.css'; 
import config from '../config/basicConfig'
import axios from 'axios';

var echarts = require('echarts');
 
 
class Nation extends Component{
    constructor(props){
        super(props); 
    }

    componentWillMount(){ 
 
    }
  
 

    render(){
        
    return(
        <div>  
            <iframe width="1024" height="576" src="https://app.developer.here.com/coronavirus/" frameborder="0" style = {{'width':'100%'}}></iframe>
        </div>
        )
    }
    
}

export default Nation;