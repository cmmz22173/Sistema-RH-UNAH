require('dotenv').config();

module.exports = {
    app:{ 
        port: process.env.PORT || 3000
    },
    jwt:{
        secret: process.env.JET_SECRET
    },
    mysql:{
        server: process.env.MYSQL_SERVER,
        dababase: process.env.MYSQL_DB,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    }
}