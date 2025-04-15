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
  const ul = document.createElement('ul');

  for (const key of Object.keys(data)) {
    if (data.hasOwnProperty(key)) {
      const li = document.createElement('li');

      li.textContent = key;

      if (Object.keys(data[key]).length > 0) {
        createTree(li, data[key]);
      }

      ul.appendChild(li);
    }
  }
  element.appendChild(ul);
}

createTree(tree, food);
