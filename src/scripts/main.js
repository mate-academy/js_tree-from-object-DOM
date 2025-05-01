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
  if (Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  element.append(ul);

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    createTree(li, data[key]);
    ul.appendChild(li);
  }
}

createTree(tree, food);
