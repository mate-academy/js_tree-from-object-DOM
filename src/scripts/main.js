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

function createTree(data, element) {
  const list = document.createElement('ul');

  for (const key in data) {
    const newItem = document.createElement('li');

    newItem.innerText = key;

    if (Object.keys(data[key]).length !== 0) {
      createTree(data[key], newItem);
    }
    list.appendChild(newItem);
  }

  element.appendChild(list);
}

createTree(food, tree);
