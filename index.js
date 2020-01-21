const express = require("express");
const bodyparser = require("body-parser");

const app = express();

let itemlist = ["Drink more", "Study more", "Play more"];

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));

app.get('/', function (req, res) {

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US",options);

    res.render("list", {ejsList:itemlist , ejsday:day

    });

});

app.post("/", function (req, res) {
    let item = req.body.inputItem;

        itemlist.push(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});