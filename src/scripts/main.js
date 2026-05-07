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
  const ul = document.createElement('ul');
  const keys = Object.keys(data);

  keys.forEach((key) => {
    if (data[key] === null) {
      return;
    }

    const li = document.createElement('li');

    li.textContent = key;
    ul.appendChild(li);

    createTree(li, data[key]);
  });

  if (ul.children.length > 0) {
    element.appendChild(ul);
  }
}

createTree(tree, food);
