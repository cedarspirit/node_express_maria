const mariadb = require('mariadb');

const pool = mariadb.createPool({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASS,
database: process.env.DB_NAME,
connectionLimit: 5
});


// connect and check for errors
pool.getConnection((err,connection)=>{
    if(err){
        if (err.code === 'PROTOCL_CONNECTION_LOST'){
            console.error('Database connection lost');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Database connection Count Error');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('Connection Refused!!!');
        }
    }
if(connection) connection.release();
return;

});

module.exports = pool;
