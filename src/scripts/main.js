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
  const newUl = document.createElement('ul');

  element.appendChild(newUl);

  for (const key of Object.keys(data)) {
    const newLi = document.createElement('li');
    const currentValue = data[key];

    newUl.appendChild(newLi);
    newLi.textContent = key;

    if (Object.values(currentValue).length !== 0) {
      createTree(newLi, currentValue);
    }
  }
}

createTree(tree, food);
