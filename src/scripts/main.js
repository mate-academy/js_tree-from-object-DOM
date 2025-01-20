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
    const li = document.createElement('li');

    li.textContent = key;

    if (typeof data[key] === 'object' && data[key] !== null) {
      createTree(li, data[key]);
    } else {
      const value = document.createElement('span');

      value.textContent = `${data[key]}`;
      li.appendChild(value);
    }
    ul.appendChild(li);
  }

  element.appendChild(ul);
}

createTree(tree, food);
