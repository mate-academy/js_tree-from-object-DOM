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
  if (Object.keys(data).length < 1) {
    return;
  }

  const ul = document.createElement('ul');
  const keysArr = Object.keys(data);

  for (const key of keysArr) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }
    ul.appendChild(li);
  }
  element.appendChild(ul);
}
createTree(tree, food);
