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

  Object.keys(data).forEach((key) => {
    const item = document.createElement('li');

    item.textContent = key;
    list.appendChild(item);

    if (Object.keys(data[key]).length > 0) {
      createTree(item, data[key]);
    }
  });

  element.appendChild(list);
}

createTree(tree, food);
