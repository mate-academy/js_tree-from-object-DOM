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
    const ul = document.createElement('ul');
    const item = document.createElement('li');

    item.textContent = key;
    element.append(ul);
    ul.append(item);

    if (Object.keys(data[key]).length !== 0) {
      createTree(item, data[key]);
    }
  }
}

createTree(tree, food);
