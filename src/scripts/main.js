'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE

  const ul = document.createElement('ul');

  element.appendChild(ul);

  for (const key in data) {
    const id = Math.random();

    ul.innerHTML += `<li id="${id}">${key}</li>`;

    const li = document.getElementById(`${id}`);

    if (Object.keys(data[key]).length !== 0) {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
