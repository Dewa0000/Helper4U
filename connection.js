const { error } = require('console');
const mysql = require('mysql2');
const { connection } = require('mysql2/typings/mysql/lib/Connection');
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Dewa@0000',
    database:'Helper4U'
})
mysqlConnection.connect((err)=>{
    if(err){
        console.log('Error in Database Connection'+ JSON.stringify(error,undefined,2));
    }
    else{
        console.log('Database Connected');
    }
})

module.exports=mysqlConnectionconnection