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

const startTree = document.createElement('div');

startTree.setAttribute('id', 'tree');
document.body.appendChild(startTree);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  element.appendChild(ul);

  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    ul.appendChild(li);
    li.textContent = key;

    if (value) {
      createTree(li, value);
    } else {
      ul.remove();
    }
  }
}

createTree(tree, food);
