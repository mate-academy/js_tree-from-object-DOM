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

  Object.entries(data).forEach(([key, value]) => {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    list.append(listItem);

    if (Object.entries(value).length) {
      createTree(listItem, value);
    }
  });

  element.append(list);
}

createTree(tree, food);
