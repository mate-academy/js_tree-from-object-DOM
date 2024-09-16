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
  const keysArray = Object.keys(data);

  if (keysArray.length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  element.append(ul);

  for (const key of keysArray) {
    const li = document.createElement('li');

    li.textContent = key;
    createTree(li, data[key]);
    ul.append(li);
  }
}

createTree(tree, food);
