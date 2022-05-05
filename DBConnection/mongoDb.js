const mongoose = require('mongoose');

class DbConnection {

    constructor(){
        this.mongoDbConnection()
    }

    mongoDbConnection(){
        mongoose.connect('mongodb://localhost:27017/bookMyShow');

        mongoose.connection.once('open', () => {
            console.log("My database is connected.");
        });

        mongoose.connection.on('on', () => {
            console.log("My database's connection failed.");
        });
    }
}

module.exports = DbConnection;