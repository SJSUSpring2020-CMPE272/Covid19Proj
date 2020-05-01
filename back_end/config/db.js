
var mysql=require("mysql");

var pool = mysql.createPool({
    host     : 'amazon.cgbbrfwctj9b.us-east-2.rds.amazonaws.com',     
    user     : 'admin',              
    password : 'adminadmin',       
    port: '3306',                   
    database: 'covid19' 
});

module.exports=pool;