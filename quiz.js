"use strict";

function populatePage (inventory) {
  var cardHolder = document.getElementById('card-container')

  let make,
      model,
      year,
      color,
      purchased,
      desc = '';

  for (let i in inventory) {
      make  = inventory[i].make;
      model = inventory[i].model;
      year  = inventory[i].year;
      color = inventory[i].color;
      desc  = inventory[i].description;
      let buildCard = `<div class="card"><div class="insideCard" style="border-color:${color}" box-shadow:"${color}"><h3>${make} ${model}</h3><div>${year} ${color} ${make} ${model}</div><div class="description">${desc}</div>`
      cardHolder.innerHTML += buildCard;
  }; 
  let card = document.getElementsByClassName('card');
  for (var i = 0; i < card.length; i++) {
    card[i].classList.add('col-xs-4');
  };
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents(cardHolder);
};

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(CarLot.getInventory);