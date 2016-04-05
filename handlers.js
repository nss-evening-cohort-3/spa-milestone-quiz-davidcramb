"use strict";
var CarLot = (function (carlotHandlers){
  var handlers;

    carlotHandlers.activateEvents = function (target) {
      target.addEventListener('click', carlotHandlers.event, false);
    },

      
    carlotHandlers.event = function (e) {

        let input = document.getElementById('input');
        input.addEventListener('keyup', carlotHandlers.inputReset, false)
        input.addEventListener('keyup', carlotHandlers.describeCar, false)
        input.focus(); input.value = "";
        if (e.target !== e.currentTarget) {
        let target = e.target.offsetParent.children[0];
        let cardDescription = target.children[2];
        target.classList.toggle('clickedCard');
        e.stopPropagation();
      }
    },

    carlotHandlers.describeCar = function (e) {
      let output = document.getElementsByClassName('clickedCard');
      let currentDescription = output[0].children[2];
      let newInput = input.value;
      currentDescription.innerHTML = newInput;
      // console.log(output[0].children[2].innerHTML)

    },

    carlotHandlers.inputReset = function (e) {
      if (e.keyCode === 13) {
        let removeClassFromThisCard = document.getElementsByClassName('clickedCard');
        removeClassFromThisCard[0].classList.remove('clickedCard');
        this.value = '';
        this.blur();
      }
    }

    return carlotHandlers;
  })(CarLot || {} );
