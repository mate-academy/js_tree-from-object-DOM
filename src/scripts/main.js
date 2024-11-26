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

function createTree(element = document.createElement('ul'), data) {
  if (!element) {
    element = document.createElement('ul');
    element.setAttribute('id', 'tree');
    document.body.appendChild(element);
  }

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const li = document.createElement('li');

      li.textContent = key;
      element.appendChild(li);

      if (
        typeof data[key] === 'object' &&
        data[key] !== null &&
        Object.keys(data[key]).length > 0
      ) {
        const ul = document.createElement('ul');

        li.appendChild(ul);
        createTree(ul, data[key]);
      }
    }
  }
}

createTree(tree, food);
