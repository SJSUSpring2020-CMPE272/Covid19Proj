var btoa = require("btoa");
var request = require('request');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const wml_credentials = new Map();
//var apikey = "y1wTyLwd-0IE6PriwT3_s0cmqZmVqw2FCP5DgSU7_lw1";
var apikey = "QVrODgZjynDOQk2l725gTGuHD9kI4dq22ayypoVLyLcM";

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

request.post(options, function (error, response, body) {
    console.log('bodybodybody', body)
    var iam_token = JSON.parse(body)["access_token"];
})