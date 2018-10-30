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
    var filter = "filterOne"
    if (req.query.product__filter !== null || req.query.product__filter !== "" || req.query.product__filter !== undefined) {
        filter = req.query.product__filter;
        products.find({
            product__filter: filter,
        }).toArray(function (err, docs) {
            if (err) {
                console.log(err);
                return;
            }

            var context = {
                products: docs,
                collection: filter,
            };

            var product = findObject(docs, "product__name", "Clasico");
            if (product !== null) {
                products.find({
                    product__Type: "filterTwo",
                }).toArray(function (err, docs) {
                    if (err) {
                        console.log(err);
                        return;
                    }
        
                    var context = {
                        products: docs,
                        collection: filter,
                    };
                    res.render("product", docs);
                });
                
            } else {
                res.render("store", context);

            }
        });
     }else {
        products.find({
            product__Type: "filterOne",
        }).toArray(function (err, docs) {
            if (err) {
                console.log(err);
                return;
            }

            var context = {
                products: docs,
            };
            res.render("store", context);
        });
    }


});

function findObject(array, key, value) {
    for (let index = 0; index < array.length; index++) {
        if (array[index][key] === value) {
            return array[index];

        }

    }
    return null;

};



app.listen(5500);
