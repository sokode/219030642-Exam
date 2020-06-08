const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require ('mongoose');
const app = express();

mongoose.set('useNewUrlParer', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopologgy', true);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection'));

let port = process.env.port || 3000;

var MyModel = mongoose.model('test',{
    name: String
});

app.get('/', function(req,res){

    MyModel.fineone(function(error,result){
        if (error) {
            console.log(error)

        }else {
            console.log(result)
        }
    });
});


app.listen(port);