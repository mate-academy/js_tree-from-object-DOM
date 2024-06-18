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

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const li = document.createElement('li');

      li.textContent = key;

      const nestedData = data[key];

      if (Object.keys(nestedData).length > 0) {
        createTree(li, nestedData);
      }

      ul.appendChild(li);
    }
  }

  element.appendChild(ul);
}

createTree(tree, food);
