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
    const li = document.createElement('li');

    li.textContent = key;

    const value = data[key];

    if (value && typeof value === 'object' && Object.keys(value).length > 0) {
      createTree(li, data[key]);
    }
    ul.append(li);
  }
  element.append(ul);
}

createTree(tree, food);
