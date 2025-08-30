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
  const elementDOM = document.createElement(element);

  if (data) {
    const ul = document.createElement('ul');

    for (const key in data) {
      const item = document.createElement('li');

      item.textContent = key;

      if (typeof data[key] === 'object' && data[key] !== null) {
        const childTree = createTree('ul', data[key]);

        item.appendChild(childTree);
      }
      ul.appendChild(item);
    }

    elementDOM.appendChild(ul);
  }

  return elementDOM;
}

createTree(tree, food);
