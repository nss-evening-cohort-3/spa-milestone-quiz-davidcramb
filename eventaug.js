"use strict";
var CarLot = (function(carlotHandlers){

    carlotHandlers.event = function (e) {
      // let input = document.getElementById('input');
      // input.addEventListener('keyup', carlotHandlers.inputReset, false)
      let cardHolder = document.getElementById('card-container');

      if (e.target !== e.currentTarget && e.target.offsetParent.classList.contains('card')){
        e.target.offsetParent.children[0].classList.toggle('clickedCard');





    
    };
      e.stopPropagation();
    
  },

    
    carlotHandlers.describeCar = function (e) {
      let output = document.getElementsByClassName('clickedCard');
      let currentDescription = output[0].children[2];
      let newInput = input.value;
      currentDescription.innerHTML = newInput;
    },

    carlotHandlers.inputReset = function (e) {
      if (e.keyCode === 13) {
        let removeClassFromThisCard = document.getElementsByClassName('clickedCard');
        removeClassFromThisCard[0].classList.remove('clickedCard');
        this.value = '';
        this.blur();
      };
    },

    carlotHandlers.gotoInput = function () {
      input.focus();
      input.value = "";
    }
  
  return carlotHandlers;
})(CarLot || {} );
