import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import config from '../config/basicConfig'
import PDF from 'react-pdf-js';  

let host = config.host;
let port = config.back_end_port;
let url = host + ':' + port;


//Define a Login Component
class Report extends Component {
    //call the constructor method
    constructor(props) { 
        super(props); 
        this.state = {
            "page": 1, 

        }
        
    }
    componentWillMount() { 
    } 
    next(page) {
        if(this.state.page+1 == 10){
            alert('this is last page')
        }
        else{
            this.setState({
                page: this.state.page+1,
            })
        }
        
    }
    previous(page) {
        if(this.state.page -1 == 0){
            alert('this is first page')
        }
        else{
        this.setState({
            page: Number(this.state.page-1),
        })}
    }

        render() {
            let img = require(`../config/p.pdf`);
            return (
                <div class = 'img' style = {{'width':'42%'}}>
                    <PDF file={img}
                    page={this.state.page}
                    ></PDF>
                    {/* <Pagination onChange={this.onChange.bind(this)} total={this.state.pages} current={this.state.page} /> */}
                    <div class='img'  > 
                        <button type="reset" style = {{'margin-left':'40px'}} onClick ={this.previous.bind(this)}  class='btn btn-info'>previous</button>
                        <button type="button" style = {{'margin-left':'40px'}} class='btn btn-danger' onClick ={this.next.bind(this)}>next page</button>
                    </div>
                </div>
            )
        }
    }
    export default Report;