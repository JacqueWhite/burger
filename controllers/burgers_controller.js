var express = require('express');
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req,res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req,res) {

    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(data);
      res.render("index", {burgers : data });
    });

});

router.post("/burgers/create", function(req, res) {
  burger.createOne(req.body.burger_name, function(result) {
    console.log(result);

  });
   res.redirect("/");
});

router.put("/burgers/update", function(req, res) {
  console.log(req.body);
  burger.updateOne(req.body.id, function(result) {
    console.log(result);

  });
   res.redirect("/");
});


// Export routes for server.js to use.
module.exports = router;