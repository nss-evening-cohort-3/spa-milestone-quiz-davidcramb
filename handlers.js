"use strict";
var CarLot = (function (carlotHandlers){

//activates events from event augmenter IIFE

    carlotHandlers.activateEvents = function (target) {
      target.addEventListener('click', carlotHandlers.clearCard, false);
      target.addEventListener('click', carlotHandlers.clickCard, false);
      target.addEventListener('click', carlotHandlers.gotoInput, false);
    },
    input.addEventListener('keyup', carlotHandlers.describeCar, false);
    input.addEventListener('keyup', carlotHandlers.inputReset, false);   
return carlotHandlers;
})(CarLot || {} );
