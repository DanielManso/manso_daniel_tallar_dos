const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");

const app = express();

//----------------------------------------
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const mongoURL = "mongodb://localhost:27017";
const nombre = "corkcicle";
const mongoclient = new MongoClient(mongoURL);

var products = null;

function findObj(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

mongoclient.connect(function (err) {
    assert.equal(null, err);
    console.log("Funciona");
    const db = mongoclient.db(nombre);
    products = db.collection("producto");
});

//_---------------------_Para conectar la pagina a un servidor _---------------------_
//Para que las personas solo puedan ver el contenido de la carpeta public
app.use(express.static("public"));
//Se le dice que el motor que renderisa la pagina es handlebasr 
app.engine("handlebars", hbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/store", function (req, res) {
    var filter = req.query.product__collectio;
    var filterZise = req.query.product__size;
    var filterColour = req.query.product__colour;

    var name = req.query.product__nameFilter;

    if (filter !== null && filter !== '' && filter !== undefined) {
        products.find({
            "product__collectio": filter,
        }).toArray(function (err, array) {
            if (err) {
                console.log(err);
                return;
            }
            var context = {
                products: array,
                collectio: filter,
            };

            var product = findObjectByKey(array, "product__nameFilter", name);
            if (product !== null && product !== undefined) {
                res.render('bill', product);
            } else {
                res.render('store', context);
            }
        });
    }
    else if (filterZise !== null && filterZise !== '' && filterZise !== undefined) {
        products.find({
            "product__size": filterZise,
        }).toArray(function (err, array) {
            if (err) {
                console.log(err);
                return;
            }
            var context = {
                products: array,
                collection: filterZise,
            };


            var product = findObjectByKey(array, "product__nameFilter", name);
            if (product !== null && product !== undefined) {
                res.render('bill', product);
            } else {
                res.render('store', context);
            }
        });
    }
    else if (filterColour !== null && filterColour !== '' && filterColour !== undefined) {
        products.find({
            "product__colour": filterColour,
        }).toArray(function (err, array) {
            if (err) {
                console.log(err);
                return;
            }
            var context = {
                products: array,
                collection: filterColour,
            };
            res.render('store', context);
        });
    }

    else {
        products.find({
            product__Type: 'filterTwo',
        }).toArray(function (err, array) {
            if (err) {
                console.log(err);
                return;
            }
            var context = {
                products: array,
            };


            var product = findObjectByKey(array, "product__nameFilter", name);
            if (product !== null && product !== undefined) {
                res.render('bill', product);
            } else {
                res.render('store', context);
            }
        });
    }
});

app.get('/checkOut', function(req, res){
    res.render('checkOut');
});

function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

app.listen(5500);
