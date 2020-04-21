import React, {Component} from 'react';
import '../App.css';
import axios from 'axios'; 


//Define a Login Component
class Predict  extends Component {
        //call the constructor method
        constructor(props){
            //Call the constrictor of Super class i.e The Component
            super(props);
            //const mes = props.location.state
            this.state = {
                message:''
            } 
        }
        componentWillMount(){
        }


     //submit Login handler to send a request to the node backend
     submitLogin = (e) => {
        //prevent page from refresh
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        let role = e.target.role.value;
        
        if(email && password && role){
            
            const data = {
                email : email,
                password : password,
                role : role
            } 
 
            }else{ 
            }
        }
    render() {  

        return(
            <div>
            <div class="container">
                
                <div class="maincenter">
                    <div align ="center">
                        <img style = {{'width':'100%'}} class='img' src={require('../img/corona.jpg')} alt="." ></img>
            </div>
                    
                    <div class="loginform">
                        <div>
                        <div align ="center">
                            <p>Please enter your prediction information</p>
                        </div>
                        <form onSubmit={this.submitLogin}>
                            <div class="form-group">
                                <input   type="text" class="form-control" name="Date" placeholder="Date"/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" name="password" placeholder="Place"/>
                            </div>
                            <h4> the level of lockdown</h4>
                            <label class="radio-inline">
                                <input type="radio" name="role"  value="customer"/> low
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="role" value="seller"/> medium
                            </label>
                            <label class="radio-inline">
                                <input type="radio" name="role" value="admin"/> high
                            </label>

                            <button  class="button">Predict</button> 
                        </form>
                            </div>  
                            <div><h4>{this.state.message}</h4></div> 
                        </div>            
                         
                </div>
            </div>
            </div>
        )
    }
}
//export Login Component
export default Predict;