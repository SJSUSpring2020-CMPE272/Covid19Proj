var fs = require('fs')
//import express module 
var express = require('express');
//create  an express app
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
//require express session
var session = require('express-session');
let cors = require("cors"); //  npm install cors
var config = require('./config/basicConfig');
var cookieParser = require('cookie-parser');
let jsexecpy = require("jsexecpy")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret              : 'cmpe273_lab1_yilinzhou',
    resave              : false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized   : false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration            : 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration      :  5 * 60 * 1000
}));

let front_url = config.host + ':' +config.front_end_port;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', front_url);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });


app.use(cors({
       origin: true,
       credentials: true,
    // 　　methods: ["GET", "POST","PUT"],
    // 　　alloweHeaders: ["Content-Type", "application/json;application/x-www-form-urlencoded"]
}));
app.use(cookieParser())
 
var btoa = require("btoa");
var request = require('request');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const wml_credentials = new Map();
//var apikey = "y1wTyLwd-0IE6PriwT3_s0cmqZmVqw2FCP5DgSU7_lw1";
var apikey = "ak771J-5kx03A4zH-0zjUK60g-BbkKD5HU7o3HzIvF1r";

var IBM_Cloud_IAM_uid = "bx";
var IBM_Cloud_IAM_pwd = "bx"; 
var options = {
    url: "https://iam.bluemix.net/oidc/token",//"https://iam.cloud.ibm.com/identity/token"
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + btoa(IBM_Cloud_IAM_uid + ":" + IBM_Cloud_IAM_pwd)
    },
    body: "apikey=" + apikey + "&grant_type=urn:ibm:params:oauth:grant-type:apikey"
};

app.get('/predict',function(req,res){
    let data = req.query;
    let date = data.date;
    let state = data.state;
    request.post(options, function (error, response, body) {
        console.log('bodybodybody', body)
        var iam_token = JSON.parse(body)["access_token"];
        const wmlToken = "Bearer " + iam_token;
        const mlInstanceId = 'ed418535-f5e3-4015-8ad6-7927873e01f0';
        date = Number(date)
        let array_of_values_to_be_scored = [date,state]
        console.log('array_of_values_to_be_scored',array_of_values_to_be_scored)
        //[20200424, 'CA']
        //array_of_values_to_be_scored.push(date)
        //array_of_values_to_be_scored.push(state)
        let another_array_of_values_to_be_scored = array_of_values_to_be_scored
        let payload = { "input_data": [{ "fields": ["date", "state"], "values": [array_of_values_to_be_scored] }] };
        payload = JSON.stringify(payload)
        const scoring_url = "https://us-south.ml.cloud.ibm.com/v4/deployments/d7751b29-a351-4740-8359-6bb7140ac6ec/predictions";
            apiPost(scoring_url, wmlToken, mlInstanceId, payload, function (resp) {
                let parsedPostResponse;
                try {
                    parsedPostResponse = JSON.parse(this.responseText);
                } catch (ex) {
                    // TODO: handle parsing exception
                }
                console.log("Scoring response");
                console.log(parsedPostResponse);
                res.json(parsedPostResponse);
            }, function (error) {
                console.log(error);
            });
    })
})

app.get('/getTxtData',function(req,res){

    // jsexecpy.run_ipynb_code("./config/272italy.ipynb",({data,pythonpath},otherargs = 11)=>{
    //     console.log('data',data)
    //     console.log('pythonpath',pythonpath)
    //     console.log('otherargs',otherargs) 
    // })
    // fs.readFile('./config/1.txt', 'utf8', function(err, data){
    //     // let x = data.split('\n')
    //     // console.log(x);  
    //     // res.end(data)
    // });
})

app.listen(3001, function () {
    console.log("Server listening on port 3001");
});




function apiPost(scoring_url, token, mlInstanceID, payload, loadCallback, errorCallback) {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", loadCallback);
    oReq.addEventListener("error", errorCallback);
    oReq.open("POST", scoring_url);
    oReq.setRequestHeader("Accept", "application/json");
    oReq.setRequestHeader("Authorization", token);
    oReq.setRequestHeader("ML-Instance-ID", mlInstanceID);
    oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    oReq.send(payload);
}