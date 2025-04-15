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
    const listitem = document.createElement('li');

    listitem.textContent = key;

    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      const nastedList = createTree(document.createElement('ul'), data[key]);

      listitem.appendChild(nastedList);
    }

    list.appendChild(listitem);
  }

  element.appendChild(list);

  return list;
}

createTree(tree, food);
