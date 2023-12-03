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
    const listItem = document.createElement('li');

    listItem.textContent = key;

    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      const nestedList = createTree(document.createElement('ul'), data[key]);

      listItem.appendChild(nestedList);
    }

    list.appendChild(listItem);
  }

  element.appendChild(list);

  return list;
}

createTree(tree, food);
