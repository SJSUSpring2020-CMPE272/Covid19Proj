import React, { Component } from 'react';
import '../App.css';
var echarts = require('echarts');


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            chartType:'line'
        }
        this.showCharts = this.showCharts.bind(this)
        this.cityNameHandler = this.cityNameHandler.bind(this)
        this.getDataFromApi = this.getDataFromApi.bind(this)
        this.barChart = this.barChart.bind(this)
    }

    componentWillMount() {
        let getInfoUrl = 'https://coronavirus-map.p.rapidapi.com/v1/spots/month?region="usa"';

        fetch(getInfoUrl, {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                "x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
                "x-rapidapi-key": "a1d4249599msh3ed4e59db18ea47p1dee78jsnf59fe22051bd"
            },
        }).then(result => {
            result.json().then(res => {
                console.log('resresresres', res.data)
                let data = res.data;
                let dataset = [['date', 'total_cases', 'deaths', 'recovered']]

                for (var key in data) {
                    let ds = [];
                    let skey = key.substring(key.length - 5)
                    ds.push(skey);
                    ds.push(data[key].total_cases);
                    ds.push(data[key].deaths);
                    ds.push(data[key].recovered);
                    dataset.push(ds);
                }
                dataset.reverse()
                dataset.unshift(['date', 'total_cases', 'deaths', 'recovered'])
                var myChart = echarts.init(document.getElementById('states'));
                var option = {
                    title: {
                        text: 'data in the last month'
                    },
                    legend: {},
                    tooltip: {},
                    dataset: {
                        source: dataset
                    },
                    xAxis: { type: 'category' },
                    yAxis: {},
                    series: [
                        { type: 'line' },
                        { type: 'line' },
                        { type: 'line' }
                    ]
                };
                myChart.setOption(option);

            })
        })
    }

    showCharts(e) {
        e.preventDefault();
        console.log('cityName', this.state.cityName)
        if (this.state.cityName != '') {
            this.getDataFromApi(this.state.cityName)
        }
        //San Diego  Santa Clara  San Francisco  Santa Cruz  Los Angeles
    }

    cityNameHandler = (e) => {
        this.setState({
            cityName: e.target.value
        })
    }

    getDataFromApi = (cityName) => {
        let getInfoUrl = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats';

        fetch(getInfoUrl, {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
                "x-rapidapi-key": "a1d4249599msh3ed4e59db18ea47p1dee78jsnf59fe22051bd"
            },
        }).then(result => {
            result.json().then(res => {
                let data = res.data.covid19Stats;
                let isSearched = 0;
                let cityDate = ''
                console.log('alldata', data)
                data.map((res) => {
                    if (res.city == cityName) {
                        console.log('res', res)
                        isSearched = 1
                        cityDate = res;
                    }
                })
                if (isSearched == 0) {
                    alert('sorry,no this city')
                } else {
                    var myChart = echarts.init(document.getElementById('main'));
                    var option = {
                        title: {
                            text: cityDate.keyId + cityDate.lastUpdate
                        },
                        // tooltip: {},
                        // legend: {
                        //     data:['销量']
                        // },
                        // xAxis: {
                        //     //data: ["confirmed","deaths","recovered"]
                        // },
                        // yAxis: {},
                        series: [{
                            name: 'number',
                            //radius: '55%',
                            type: 'pie',
                            //roseType: 'angle',
                            data: [{ value: cityDate.confirmed, name: 'confirmed: ' + cityDate.confirmed },
                            { value: cityDate.deaths, name: 'deaths: ' + cityDate.deaths },
                            { value: cityDate.recovered, name: 'recovered: ' + cityDate.recovered }]
                        }]
                    };
                    myChart.setOption(option);
                }
            })
        })
    }
    switch(){
        if(this.state.chartType == 'line'){
            this.barChart()
            this.setState({
                chartType:'bar'
            })
        }else{
            this.componentWillMount()
            this.setState({
                chartType:'line'
            })
        }
        console.log('this.state.chartType',this.state.chartType)
    }
    barChart(){
        let getInfoUrl = 'https://coronavirus-map.p.rapidapi.com/v1/spots/month?region="usa"';

        fetch(getInfoUrl, {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                "x-rapidapi-host": "coronavirus-map.p.rapidapi.com",
                "x-rapidapi-key": "a1d4249599msh3ed4e59db18ea47p1dee78jsnf59fe22051bd"
            },
        }).then(result => {
            result.json().then(res => {
                console.log('resresresres', res.data)
                let data = res.data;
                let dataset = [['date', 'total_cases', 'deaths', 'recovered']]

                for (var key in data) {
                    let ds = [];
                    let skey = key.substring(key.length - 5)
                    ds.push(skey);
                    ds.push(data[key].total_cases);
                    ds.push(data[key].deaths);
                    ds.push(data[key].recovered);
                    dataset.push(ds);
                }
                dataset.reverse()
                dataset.unshift(['date', 'total_cases', 'deaths', 'recovered'])
                var myChart = echarts.init(document.getElementById('states'));
                var option = {
                    title: {
                        text: 'data in the last month'
                    },
                    legend: {},
                    tooltip: {},
                    dataset: {
                        source: dataset
                    },
                    xAxis: { type: 'category' },
                    yAxis: {},
                    series: [
                        { type: 'bar' },
                        { type: 'bar' },
                        { type: 'bar' }
                    ]
                };
                myChart.setOption(option);

            })
        })
    }

    render() {

        return (
            <div>
                <div class="col-md-12 ">
                    {/* {redirectVar} */}
                    
                    <div class="cprofile_card img" style={{ 'width': '100%' }}>
                    <div class='img' style={{ 'width': '1%'}}>
                            <button type="button" class = " glyphicon glyphicon-retweet " onClick ={this.switch.bind(this)}> </button>
                        </div>
                        <div id="states" style={{ "width": '100%', "height": "400px" }}>
                            <div class='img'>
                                <div align="center">
                                    <img style={{ 'width': '90%',"height": "350px" }} class='img' src={require('../img/time.gif')} alt="." ></img>
                                </div>
                            </div>

                        </div>
                        
                        <h3 class="center">Search City</h3>
                        <div class="img">
                            <input name="cityName" type="text" class="inputForm" aria-label="..." style={{ 'width': '92%' }} onChange={this.cityNameHandler}>
                            </input>
                            <button type="button" class="glyphicon glyphicon-search" style={{ 'margin-left': '20px', "height": "34px", "border-radius": "10px" }} onClick={this.showCharts}></button>
                            <br></br>
                            <div id="main" style={{ "width": '100%', "height": "400px" }}></div>

                        </div>

                    </div>
                    {/* <iframe width="1024" height="576" src="https://app.developer.here.com/coronavirus/" frameborder="0" style = {{'width':'100%'}}></iframe> */}

                </div>

            </div>
        )
    }

}

export default Home;