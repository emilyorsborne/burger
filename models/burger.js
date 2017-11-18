// Inside burger.js, import orm.js into burger.js
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.

var orm = require('../config/orm.js');

//show all the burgers
var burgers = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    //make a new burger
    insertOne: function(vals, cb) {
        orm.insertOne("burgers", vals, function(res) {
            cb(res);
        });
    },
    //devour a burger
    updateOne: function(condition, cb) {
        orm.updateOne("burgers", condition, function(res) {
            cb(res);
        });
    }
};



module.exports = burger;