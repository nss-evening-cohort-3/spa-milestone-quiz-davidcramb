"use strict";
var CarLot = (function(carlotHandlers){
  // Function removes clickedCard class so two cards cannot have this class name.
   carlotHandlers.clearCard = function () {
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++){
      if (cards[i].children[0].classList.contains('clickedCard')) {
        cards[i].children[0].classList.remove('clickedCard');
      };
    };
   },
    // Function adds additional styling to any clicked card
    carlotHandlers.clickCard = function (e) {
      let cards = document.getElementsByClassName('card');
      if (e.target !== e.currentTarget && e.target.offsetParent.classList.contains('card')){
        e.target.offsetParent.children[0].classList.toggle('clickedCard');
    };
   },
    // Function allows user to edit the description (and only the description) of a card that was clicked.
    carlotHandlers.describeCar = function (e) {
      let output = document.getElementsByClassName('clickedCard');
      let currentDescription = output[0].children[2];
      let newInput = input.value;
      currentDescription.innerHTML = newInput;
    },
   // Once the user presses enter from the input field, this clears the value of the 
   //input and removes the styling from the clicked card.
    carlotHandlers.inputReset = function (e) {
      if (e.keyCode === 13) {
        let removeClassFromThisCard = document.getElementsByClassName('clickedCard');
        removeClassFromThisCard[0].classList.remove('clickedCard');
        this.value = '';
        this.blur();
    };
   },
   //Focuses the cursor on the input
    carlotHandlers.gotoInput = function () {
      input.focus();
      input.value = "";
    };
  return carlotHandlers;
})(CarLot || {} );
