var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var connection = require("../config/connection.js");

//get route for homepage
router.get('/', function (req, res) {
    var query = "SELECT * FROM burgers"
    connection.query(query, function (err, data) {
        if (err) throw err;
        res.render("index", {"burgers": data})
    })
});

router.post("/create", function (req, res) {
    var query = "INSERT INTO burgers (burger_name) VALUES (?)"
    connection.query(query, [req.body.burger_name], function (err, data) {
        if (err) throw err;
        res.redirect("/");
    })
})

module.exports = router;