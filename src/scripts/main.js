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

  if (!element) {
    document.body.appendChild(list);
    list.id = 'tree';
  } else {
    element.appendChild(list);
  }

  for (const key in data) {
    const item = document.createElement('li');

    item.innerText = key;
    list.appendChild(item);

    if (typeof data[key] === 'object' && Object.keys(data[key]).length !== 0) {
      createTree(item, data[key]);
    }
  }
}

createTree(tree, food);
