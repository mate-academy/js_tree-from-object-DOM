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

  Object.keys(data).forEach(key => {
    const listElement  = document.createElement('li');
    listElement.textContent = key;

    if (typeof data[key] === 'object' && data[key] !== null) {
      createTree(listElement, data[key]);
    }

    list.appendChild(listElement);
  })

  element.appendChild(list);
}

createTree(tree, food);
