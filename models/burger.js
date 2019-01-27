var orm = require('../config/orm.js');

// $(function() {
//   $(".change-devoured").on("click", function(event) {
//     var id = $(this).data("id");
//     var newDevoured = $(this).data("newdevoured");

//     var newDevouredState = {
//       devoured: newDevoured
//     };

//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: newDevouredState
//     }).then(
//       function() {
//         console.log("changed devoured to", newDevoured);
//         location.reload();
//       }
//     );
//   });

//   $(".create-form").on("submit", function(event) {
//     event.preventDefault();
//       var newBurger = {
//         burger_name: $("#br").val().trim(),
//         devoured: $("[name=devoured]:checked").val()
//       };

//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("created new burger");
//           location.reload();
//         }
//       );
//   });
// });

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
    });
}};
  module.exports = burger;