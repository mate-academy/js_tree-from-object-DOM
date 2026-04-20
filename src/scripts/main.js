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
  const list = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (typeof data[key] === 'object' && data[key] !== null) {
      const subList = document.createElement('ul');

      createTree(subList, data[key]);
      li.appendChild(subList);
    }

    list.appendChild(li);
  }

  element.appendChild(list);
}

createTree(tree, food);
