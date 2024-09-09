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
  function createList(intel) {
    const list = document.createElement('ul');

    for (const key in intel) {
      const listItem = document.createElement('li');

      listItem.textContent = key;

      if (
        typeof intel[key] === 'object' &&
        Object.keys(intel[key]).length > 0
      ) {
        listItem.appendChild(createList(intel[key]));
      }

      list.appendChild(listItem);
    }

    return list;
  }

  element.appendChild(createList(data));
}

createTree(tree, food);
