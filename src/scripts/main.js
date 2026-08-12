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

const newtree = document.createElement('div');

newtree.id = 'tree';
document.body.appendChild(newtree);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  Object.keys(data).forEach((key) => {
    const li = document.createElement('li');

    const hasChildren = Object.keys(data[key]).length > 0;

    li.textContent = key;

    if (hasChildren) {
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  });

  element.appendChild(ul);
}

createTree(tree, food);
