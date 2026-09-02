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

const tree = document.createElement('div');

tree.id = 'tree';
document.body.appendChild(tree);

function createTree(element, data) {
  const list = document.createElement('ul');

  Object.keys(data).forEach((key) => {
    const item = document.createElement('li');

    item.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(item, data[key]);
    }

    list.appendChild(item);
  });

  element.appendChild(list);
}

createTree(tree, food);
