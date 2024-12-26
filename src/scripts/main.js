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
  const keys = Object.keys(data);

  if (!keys.length) {
    return;
  }

  const ul = document.createElement('ul');

  keys.forEach((key) => {
    const li = document.createElement('li');

    li.textContent = key;
    createTree(li, data[key]);
    ul.appendChild(li);
  });

  element.appendChild(ul);
}

createTree(tree, food);
