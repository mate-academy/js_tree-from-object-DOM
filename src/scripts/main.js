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
  const list = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const item = document.createElement('li');

    item.textContent = key;
    list.append(item);

    element.append(list);

    if (value) {
      createTree(item, data[key]);
    }
  }
}

createTree(tree, food);
