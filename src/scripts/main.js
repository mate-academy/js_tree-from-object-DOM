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
  if (data) {
    const ul = document.createElement('ul');

    element.append(ul);

    for (const key in data) {
      const li = document.createElement('li');

      li.textContent = key;
      ul.append(li);

      if (typeof data[key] === 'object' && data[key] !== null) {
        createTree(li, data[key]);
      }
    }
  }
}

createTree(tree, food);
