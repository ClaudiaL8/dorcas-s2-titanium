"use strict";

//colapsables

var collapsibles = document.querySelectorAll(".collapsible");
var contenido = document.querySelectorAll(".collapsible__content");

var collapsibleTriggers = document.querySelectorAll(".collapsible__label");
console.log(collapsibleTriggers);


for (var i = 0; i < collapsibleTriggers.length; i++) {
  console.log(collapsibleTriggers[i]);
  collapsibleTriggers[i].addEventListener("click", updateCollapsibles);
  // move.classList.add("rota");
  // crear clase en el css con: rotate {
//  transform: rotate(-180deg);
//  margin-right: 0;
//  margin-left: auto;
// }
}
function updateCollapsibles(event) {
  // var move = document.querySelector(".fieldset__rellena--arrow");
  for (var i = 0; i < collapsibleTriggers.length; i++) {

    collapsibleTriggers[i].parentElement.classList.add("fieldset--invisible");
  }
  var madre = event.currentTarget.parentElement;
  madre.classList.toggle("fieldset--invisible");
  console.log(event);
}

