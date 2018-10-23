const express = require ("express");
const path = require ("path");
const hbs = require("express-handlebars");

const app = express();

//----------------------------------------
const MongoClient = require("mongodb").MongoClient;
const assert = require ("assert");
const mongoURL = "mongodb://localhost:27017";
const nombre = "corkcicle";
const mongoclient = new MongoClient(mongoURL);

mongoclient.connect (function(err){
    assert.equal(null,err);
    console.log("Funciona");
    const db = mongoclient.db(nombre);
    const producs = db.collection("producto");
    producs.insertMany([{a:1},{b:2},{c:3}], 
        function(err,result){
        assert.equal(err,null);
        console.log("funcionax2");
    });
    mongoclient.close(); 
});









//_---------------------_Para conectar la pagina a un servidor _---------------------_
//Para que las personas solo puedan ver el contenido de la carpeta public
app.use(express.static("public"));
//Se le dice que el motor que renderisa la pagina es handlebasr 
app.engine("handlebars", hbs());
app.set("view engine","handlebars");

app.get("/", function(req,res) {
    res.render("index");
});

app.get("/store", function(req,res) {
    res.render("store");
});
app.listen(5500);
