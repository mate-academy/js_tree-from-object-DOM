'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

let tree = document.getElementById("tree");

function createTree(element, data) {
  let ulElement = document.createElement("ul");

  for (let key in data) {

    ulElement.insertAdjacentHTML("beforeend", `<li>${key}</li>`);

    if(  Object.keys(data[key]).length > 0 ) {
      ulElement.append( createTree( element, data[key]))
    }
  }

  element.append(ulElement);
  return ulElement

}

createTree(tree, food);











