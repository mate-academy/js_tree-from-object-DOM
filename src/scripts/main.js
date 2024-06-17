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

function makeTree(data) {
  const rootList = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    const hasNestedList = !!Object.keys(data[key]).length;

    if (hasNestedList) {
      const list = makeTree(data[key]);

      listItem.append(list);
    }

    rootList.append(listItem);
  }

  return rootList;
}

function createTree(element, data) {
  const listTree = makeTree(data);

  element.prepend(listTree);
}

createTree(tree, food);
