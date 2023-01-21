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
  if (element.id === 'tree') {
    const ul = document.createElement('ul');

    element.append(ul);
    createTree(ul, data);
  } else {
    for (const key of Object.keys(data)) {
      const li = document.createElement('li');

      li.textContent = key;
      element.appendChild(li);

      if (Object.keys(data[key]).length !== 0) {
        const ul = document.createElement('ul');

        li.appendChild(ul);
        createTree(ul, data[key]);
      }
    }
  }
}

createTree(tree, food);
