import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import config from '../config/basicConfig'
import PDF from 'react-pdf-js';  
var echarts = require('echarts');

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
            showChart: 'none'
        }
        this.chart = this.chart.bind(this)
        this.cancel = this.cancel.bind(this) 
    }
    componentWillMount() { 
    } 
    chart(){
        axios.defaults.withCredentials = true;
        axios.get(url + '/getTxtData').then(response => {
            if (response.status === 200) { 
                //window.open(url2 + '/report',"","width=200,height=200")
                this.setState({
                    showChart:'block'
                })
                let data = response.data 
                console.log('data', data)
                let file1 = data.file1 
                let dataset1 = []
                file1.map((line)=>{
                    let temp = []
                    let figures = line.split(' ')
                    figures.map((f)=>{
                        temp.push(f)
                    })
                    dataset1.push(temp)
                })

                let file2 = data.file2
                let dataset2 = []
                file2.map((line)=>{
                    let temp = []
                    let figures = line.split(' ')
                    figures.map((f)=>{
                        temp.push(f)
                    })
                    dataset2.push(temp)
                })

                var myChart = echarts.init(document.getElementById('file1'));
                var option = {
                    title: {
                         
                    },
                    legend: {},
                    tooltip: {},
                    dataset: {
                        source: dataset1
                    },
                    xAxis: { type: 'category' },
                    yAxis: {},
                    series: [
                        { type: 'line' },
                        { type: 'line' },
                        { type: 'line' },
                        { type: 'line' },
                        { type: 'line' },
                        { type: 'line' },
                        { type: 'line' },
                    ]
                };
                myChart.setOption(option);

                var myChart2 = echarts.init(document.getElementById('file2'));
                var option2 = {
                    title: {
                         
                    },
                    legend: {},
                    tooltip: {},
                    dataset: {
                        source: dataset2
                    },
                    xAxis: { type: 'category' },
                    yAxis: {},
                    series: [
                        { type: 'line' },
                        { type: 'line' }
                    ]
                };
                myChart2.setOption(option2);

            } else {

            }
        })
    }

    cancel(){
        this.setState({
            showChart:'none'
        })
    }
    next(page) {
        if(this.state.page+1 == 12){
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
                <div >
                    <div class="cprofile_card img" style = {{"display":this.state.showChart}}>
                    <div class='img' style={{ 'width': '1%'}}>
                            <button type="button" class = "glyphicon glyphicon-eye-close " onClick ={this.cancel}> </button>
                        </div>
                    <div id="file1" style={{ "width": '100%', "height": "400px" }}> 
                    </div> 
                    <div id="file2" style={{ "width": '100%', "height": "400px" }}> 
                    </div> 
                    </div>
                <a class="img" style = {{'width':'13%'}} onClick = {this.chart}>click to see data analysis</a>
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
                </div>
            )
        }
    }
    export default Report;