"use strict";
var CarLot = (function (carlotHandlers){

//activates events from event augmenter IIFE

    carlotHandlers.activateEvents = function (target) {
      target.addEventListener('click', carlotHandlers.event, false);
      target.addEventListener('click', carlotHandlers.gotoInput, false);
    },

    input.addEventListener('keyup', carlotHandlers.describeCar, false);
   
   
    return carlotHandlers;
  })(CarLot || {} );
