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
  const entries = Object.entries(data);

  if (entries.length === 0) {
    return;
  }

  element.append(list);

  for (const [key, value] of entries) {
    const item = document.createElement('li');

    item.innerText = key;
    list.append(item);
    createTree(item, value);
  }
}

createTree(tree, food);
