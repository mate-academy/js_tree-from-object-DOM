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
  let i = 0;

  for (const key of Object.keys(data)) {
    const newLi = document.createElement('li');
    const currentValue = data[Object.keys(data)[i]];

    element.appendChild(newUl);
    newUl.appendChild(newLi);
    newLi.textContent = key;

    if (currentValue) {
      createTree(newLi, currentValue);
    }
    i++;
  }
}

createTree(tree, food);
