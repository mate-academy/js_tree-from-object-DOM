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

const tree = document.querySelector('#tree');

function createTree(element, data) {
  for (const key of Object.keys(data)) {
    const elem = document.createElement('li');

    elem.innerText = key;
    element.appendChild(elem);

    if (Object.keys(data[key]).length !== 0) {
      const newUl = document.createElement('ul');

      elem.appendChild(newUl);

      createTree(newUl, data[key]);
    }
  }
}

createTree(tree, food);
