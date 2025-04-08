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

  element.append(ulItem);

  for (const [key, values] of Object.entries(data)) {
    const liItem = document.createElement('li');

    liItem.textContent = key;

    ulItem.append(liItem);

    for (const child of Object.keys(values)) {
      createTree(liItem, { [child]: values[child] });
    }
  }
}

createTree(tree, food);
