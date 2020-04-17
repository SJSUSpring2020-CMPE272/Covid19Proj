import React, {Component} from 'react';
import '../App.css'; 
import config from '../config/basicConfig'
import axios from 'axios';

var echarts = require('echarts');
 
 
class Home extends Component{
    constructor(props){
        super(props);
        this.state = { 
            cityDate:{},
            allData:{},
            cityName:'',
        } 
        this.showCharts = this.showCharts.bind(this)
        this.cityNameHandler = this.cityNameHandler.bind(this)
        this.getDataFromApi = this.getDataFromApi.bind(this)
    }

    componentWillMount(){
        let getInfoUrl = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats';

        // axios.defaults.withCredentials = true;
        // axios.get(getInfoUrl,{
        //     headers:{"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        //     "x-rapidapi-key": "a1d4249599msh3ed4e59db18ea47p1dee78jsnf59fe22051bd"
        // }
        // }).then(response => {
        //     if(response.status === 200){
        //         console.log('response',response)
        //     }}
        // )
 
    }
 
     showCharts(e){
        e.preventDefault();
        console.log('cityName',this.state.cityName)
        this.getDataFromApi(this.state.cityName)
        //console.log('cityDate',cityDate)
        //let cityDate = this.state.cityDate Santa Clara
       
    }

    cityNameHandler = (e) => {
        this.setState({
            cityName : e.target.value
        })
    }

    getDataFromApi =  (cityName)=>{
        let getInfoUrl = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats';
        
        fetch(getInfoUrl,{
                method: 'get',
                headers: {
                'content-type': 'application/json',
                "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
                "x-rapidapi-key": "a1d4249599msh3ed4e59db18ea47p1dee78jsnf59fe22051bd"
                },
        }).then(result =>{
            result.json().then(res => {
                let data = res.data.covid19Stats;
                let isSearched = 0;
                let cityDate = ''
                data.map((res)=>{
                            if(res.city == cityName){
                                console.log('res',res)
                                isSearched = 1
                                cityDate = res;
                            }
                })
                if(isSearched == 0){
                    alert('sorry,no this city')
                }else{
                    var myChart = echarts.init(document.getElementById('main'));
                    var option = {
                        title: {
                            text: cityDate.keyId+cityDate.lastUpdate
                        },
                        tooltip: {},
                        legend: {
                            data:['销量']
                        },
                        xAxis: {
                            data: ["confirmed","deaths","recovered"]
                        },
                        yAxis: {},
                        series: [{
                            name: 'number',
                            type: 'bar',
                            data: [cityDate.confirmed, cityDate.deaths, cityDate.recovered]
                        }]
                    }; 
                    myChart.setOption(option);
                }
            })
        })
    }

    render(){
        
    return(
        <div> 
        <div class="col-md-12 ">
            {/* {redirectVar} */}
            <div class="cprofile_card img" style = {{'width':'100%'}}>
            <img style = {{'width':'30%'}} class='img' src={require('../img/corona.jpg')} alt="." ></img>
            
                <h3 class="center">Search City</h3>
                <div class = "img">
                 <input name="cityName" type="text" class="inputForm" aria-label="..." style = {{'width':'92%'}} onChange = {this.cityNameHandler}>
                 </input>
                 <button type="button" class="glyphicon glyphicon-search"  style = {{'margin-left':'20px',"height": "34px","border-radius": "10px"}} onClick={this.showCharts}></button>
                 <br></br>
                 <div id="main" style={{"width":'100%',"height":"400px"}}></div>
                 
                </div>
                
                </div>
                {/* <iframe width="1024" height="576" src="https://app.developer.here.com/coronavirus/" frameborder="0" style = {{'width':'100%'}}></iframe> */}
                
            </div> 
             
        </div>
        )
    }
    
}

export default Home;