var express=require('express');
var app=express.Router()


app.get('/',function(request,response){
    response.send("server is runing")

});


module.export=app