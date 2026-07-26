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
  // WRITE YOUR CODE HERE
}

createTree(tree, food);
function createTree(element, data) {
  if (!Object.keys(data).length) return;

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');
    li.textContent = key;

    if (typeof data[key] === 'object') {
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}
