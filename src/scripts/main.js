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

function createTree(element, data) {
  if (!element || !data || Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    createTree(li, data[key]);

    ul.append(li);
  }

  element.append(ul);
}

let tree = document.querySelector('#tree');

if (!tree) {
  tree = document.createElement('div');
  tree.id = 'tree';
  document.body.append(tree);
}

createTree(tree, food);
