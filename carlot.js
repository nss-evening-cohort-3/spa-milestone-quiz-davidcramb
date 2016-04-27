"use strict";
var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function (data, callback) {
      data = JSON.parse(data);
      for (let i in data.cars) {
        inventory.push(data.cars[i]);
      };
      return callback(inventory)
    },
    getInventoryList: function () {
      return inventory;
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.JSON");
      inventoryLoader.send();
      inventoryLoader.addEventListener("load", function () {
      var data = this.responseText;
      return callback(data, populatePage);
      });
    }
  };

})(CarLot);
