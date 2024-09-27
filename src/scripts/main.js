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
  const ulItem = document.createElement('ul');

  for (const key in data) {
    const liItem = document.createElement('li');

    liItem.innerText = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(liItem, data[key]);
    }

    ulItem.append(liItem);
  }

  element.append(ulItem);
}

createTree(tree, food);
