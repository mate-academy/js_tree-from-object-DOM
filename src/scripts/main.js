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

const divTree = document.createElement('div');

divTree.id = 'tree';
document.body.prepend(divTree);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (typeof data[key] === 'object' && data[key] !== null) {
      createTree(li, data[key]);
    }

    ul.append(li);
  }
  element.append(ul);
}

createTree(tree, food);
