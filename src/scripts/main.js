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

const treeElement = document.querySelector('#tree');

function createTree(element, data) {
  function createListFromObject(obj) {
    const ul = document.createElement('ul');

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const li = document.createElement('li');

        li.textContent = key;

        if (typeof obj[key] === 'object' && Object.keys(obj[key]).length > 0) {
          li.appendChild(createListFromObject(obj[key]));
        }
        ul.appendChild(li);
      }
    }

    return ul;
  }

  const tree = createListFromObject(data);

  element.appendChild(tree);
}

createTree(treeElement, food);
