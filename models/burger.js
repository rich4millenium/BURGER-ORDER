var connection = require("./connection.js");
 
function selectAll() {
    var query = "SELECT * FROM burgers"
    connection.query(query, function (err, data) {
        if (err) throw err;
    })
}
 
function insertOne() {
    var query = "INSERT INTO burgers SET ?"
    connection.query(query, function (err, data) {
        if (err) throw err;
    })
}
 
function updateOne() {
    var query = "UPDATE burgers SET ? WHERE ?"
    connection.query(query, function (err, data) {
        if (err) throw err;
    })
}