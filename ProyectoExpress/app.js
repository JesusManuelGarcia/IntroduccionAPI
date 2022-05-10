/*var express = requiere('express');
var app=express();

app.get('/hola', function(req,res){
    res.send('Hola Mundo!!!');
});
app.get('/adios', function(req,res){
    res.send('Adios Mundo!!!');
});
app.listen(3000, function(){
    console.log('Aplicacion Ejemplo, Escucha el puerto 3000!');
});*/
const express =require('express');
const port =3002;

const bodyParser=require('body-parser');