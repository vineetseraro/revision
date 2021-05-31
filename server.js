var express=require('express');
var mongoose=require('mongoose')
var cors=require('cors');
var bodyParser = require('body-parser');
var app=express();
var routes=require("./router/router");

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)
app.use('/routes',routes)


const mongoURI='mongodb+srv://admin:admin@cluster0.ykxm7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(
 mongoURI,
    {
        useNewUrlParser:true
    }
)

app.listen(8080,function(){
    console.log('everything is okay')
})

