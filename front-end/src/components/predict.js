import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import config from '../config/basicConfig'
import states from '../../src/config/state'
import fs from 'fs'

let host = config.host;
let port = config.front_end_port;
let url = host + ':' + port;


//Define a Login Component
class Predict extends Component {
    //call the constructor method
    constructor(props) {
        //Call the constrictor of Super class i.e The Component
        super(props);
        //const mes = props.location.state
        this.state = {
            message: ''
        }
    }
    componentWillMount() {
        axios.defaults.withCredentials = true;
        axios.get(url + '/getTxtData').then(response => {
            if (response.status === 200) { 
                let data = response.data 
                console.log('data', data) 
            } else {

            }
        })
    }


    //submit Login handler to send a request to the node backend
    submitLogin = (e) => {
        //prevent page from refresh
        e.preventDefault();
        let date = e.target.date.value;
        let state = e.target.states.value;

        if (date && state) {
            axios.defaults.withCredentials = true;
            axios.get(url + '/predict?date=' + date + '&&state=' + state).then(response => {
                if (response.status === 200) {

                    let data = response.data
                    let predict = data.predictions[0].values[0]
                    console.log('predict', predict)
                    this.setState({
                        message: 'the predict figure is '+predict[0]
                    })
                } else {

                }
            })

        } else {
            this.setState({
                message: 'no empty'
            })
        }
    }
    render() {

        return (
            <div>
                <div class="container">

                    <div class="maincenter">
                        <div align="center">
                            <img style={{ 'width': '100%' }} class='img' src={require('../img/corona.jpg')} alt="." ></img>
                        </div>

                        <div class="loginform">
                            <div>
                                <div align="center">
                                    <p>Please enter your prediction information</p>
                                </div>
                                <form onSubmit={this.submitLogin}>
                                    
                                    <div class="form-group">

                                        <select
                                            style={{ 'width': '100%' }}
                                            name="states"
                                        >
                                            <option value="" disabled selected label="States">
                                                States
                                            </option>
                                            {
                                                states.map((m) => (
                                                    <option value={m} >{m}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="date" placeholder="Date" />
                                    </div>
                                    {/* <h4> the level of lockdown</h4>
                                    <label class="radio-inline">
                                        <input type="radio" name="role" value="customer" /> low
                            </label>
                                    <label class="radio-inline">
                                        <input type="radio" name="role" value="seller" /> medium
                            </label>
                                    <label class="radio-inline">
                                        <input type="radio" name="role" value="admin" /> high
                            </label> */}

                                    <button class="button">Predict</button>
                                </form>
                            </div>
                            <div>
                                <br></br>
                                <h4>{this.state.message}</h4>
                            </div>
                            <br></br>
                            <div>
                            <p >want more information? <a href={url + '/report'} class="navbar-link">click me</a></p>
                    
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
//export Login Component
export default Predict;