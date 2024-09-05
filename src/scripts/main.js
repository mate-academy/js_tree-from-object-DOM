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
  function createTreeStructure(parentElement, obj) {
    const ul = document.createElement('ul');

    for (const key in obj) {
      const li = document.createElement('li');

      li.textContent = key;

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        createTreeStructure(li, obj[key]);
      }

      ul.appendChild(li);
    }

    parentElement.appendChild(ul);
  }

  element.innerHTML = '';

  createTreeStructure(element, data);
}
createTree(tree, food);
