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
  if (Object.keys(data).length) {
    const ul = document.createElement('ul');

    element.append(ul);

    for (const key in data) {
      const li = document.createElement('li');

      li.innerHTML = key;
      ul.append(li);

      if (typeof data[key] === 'object') {
        createTree(li, data[key]);
      }
    }
  }
}

createTree(tree, food);
