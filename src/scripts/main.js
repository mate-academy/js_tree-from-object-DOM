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
  if (!Object.keys(data).length) return;

  const ul = document.createElement('ul');

  for(let key in data) {
    const li = document.createElement('li');
    li.textContent = key;

    if (Object.keys(data[key]).length) {
      createTree(li, data[key]);
    }

    ul.appendChild(li)
  }

  element.appendChild(ul)
}

createTree(tree, food);
