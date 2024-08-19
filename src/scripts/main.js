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
  if (Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  element.appendChild(ul);

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const li = document.createElement('li');

      li.textContent = key;
      ul.appendChild(li);

      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
