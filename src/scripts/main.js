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
  for (const key in data) {
    const newList = document.createElement('ul');
    const newElement = document.createElement('li');

    newElement.innerText = key;
    newList.append(newElement);
    element.append(newList);

    if (typeof data[key] === 'object') {
      createTree(newElement, data[key]);
    }
  }
}

createTree(tree, food);
