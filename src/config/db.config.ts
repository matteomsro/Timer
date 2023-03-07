import * as mysql from 'mysql';

//local mysql db connection
export const dbConn = mysql.createConnection({
    host : 'localhost',
    user : 'timer',
    password : '2LkW9bfQUbGF9cbz',
    database : 'timer'
});

dbConn.connect(function(err: ErrorEvent){
    if (err) throw err;
    console.log("Database Connected");
});
